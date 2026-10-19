"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Rewind,
  FastForward,
  Loader2,
} from "lucide-react";
import { PodcastEpisode } from "@/data/podcastData";

interface AudioPlayerProps {
  episode: PodcastEpisode;
  compact?: boolean;
}

function formatTime(seconds: number): string {
  if (isNaN(seconds) || !isFinite(seconds)) return "0:00";
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  if (h > 0)
    return `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  return `${m}:${String(s).padStart(2, "0")}`;
}

export default function AudioPlayer({
  episode,
  compact = false,
}: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(episode.durationSeconds);
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  // FIX Bug #2: proper drag-to-seek state
  const [isSeeking, setIsSeeking] = useState(false);

  const rates = [0.75, 1, 1.25, 1.5, 2];

  // FIX Bug #1: separate audio event listeners from volume side-effect
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTimeUpdate = () => {
      if (!isSeeking) setCurrentTime(audio.currentTime);
    };
    const onDurationChange = () => {
      if (isFinite(audio.duration)) setDuration(audio.duration);
    };
    const onEnded = () => setIsPlaying(false);
    const onWaiting = () => setIsLoading(true);
    const onCanPlay = () => setIsLoading(false);
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("durationchange", onDurationChange);
    audio.addEventListener("ended", onEnded);
    audio.addEventListener("waiting", onWaiting);
    audio.addEventListener("canplay", onCanPlay);
    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);

    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("durationchange", onDurationChange);
      audio.removeEventListener("ended", onEnded);
      audio.removeEventListener("waiting", onWaiting);
      audio.removeEventListener("canplay", onCanPlay);
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
    };
    // only depend on isSeeking — not volume
  }, [isSeeking]);

  // FIX Bug #1: apply volume changes as a separate effect
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = isMuted ? 0 : volume;
    audio.muted = isMuted;
  }, [volume, isMuted]);

  const togglePlay = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return;
    try {
      if (isPlaying) {
        audio.pause();
      } else {
        setIsLoading(true);
        await audio.play();
        setIsLoading(false);
      }
    } catch {
      setIsLoading(false);
    }
  }, [isPlaying]);

  // FIX Bug #2: proper seek with pointer events for drag support
  const getProgressRatio = (clientX: number): number => {
    const bar = progressRef.current;
    if (!bar) return 0;
    const rect = bar.getBoundingClientRect();
    return Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
  };

  const handleProgressPointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      const audio = audioRef.current;
      if (!audio) return;
      e.currentTarget.setPointerCapture(e.pointerId);
      setIsSeeking(true);
      const ratio = getProgressRatio(e.clientX);
      const t = ratio * (audio.duration || episode.durationSeconds);
      audio.currentTime = t;
      setCurrentTime(t);
    },
    [episode.durationSeconds]
  );

  const handleProgressPointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!isSeeking) return;
      const audio = audioRef.current;
      if (!audio) return;
      const ratio = getProgressRatio(e.clientX);
      const t = ratio * (audio.duration || episode.durationSeconds);
      audio.currentTime = t;
      setCurrentTime(t);
    },
    [isSeeking, episode.durationSeconds]
  );

  const handleProgressPointerUp = useCallback(() => {
    setIsSeeking(false);
  }, []);

  const skip = (seconds: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = Math.max(
      0,
      Math.min(audio.duration || 0, audio.currentTime + seconds)
    );
  };

  const toggleMute = () => setIsMuted((m) => !m);

  const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = parseFloat(e.target.value);
    setVolume(v);
    if (v === 0) setIsMuted(true);
    else setIsMuted(false);
  };

  const cycleRate = () => {
    const idx = rates.indexOf(playbackRate);
    const next = rates[(idx + 1) % rates.length];
    setPlaybackRate(next);
    if (audioRef.current) audioRef.current.playbackRate = next;
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;
  const volumePct = isMuted ? 0 : volume * 100;

  // ── Compact Player ─────────────────────────────────────────────────────────
  if (compact) {
    return (
      <div className="flex items-center gap-3 bg-zinc-900/80 border border-zinc-800 rounded-xl px-4 py-3 w-full">
        <audio ref={audioRef} src={episode.audioUrl} preload="metadata" />

        <button
          id={`play-pause-compact-${episode.id}`}
          onClick={togglePlay}
          className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-black hover:bg-yellow-300 transition-colors shrink-0"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isLoading ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : isPlaying ? (
            <Pause className="w-4 h-4 fill-current" />
          ) : (
            <Play className="w-4 h-4 fill-current ml-0.5" />
          )}
        </button>

        <div className="flex-1 min-w-0">
          {/* FIX Bug #2: use pointer events for reliable seeking */}
          <div
            ref={progressRef}
            className="h-1.5 bg-zinc-700 rounded-full cursor-pointer group select-none"
            onPointerDown={handleProgressPointerDown}
            onPointerMove={handleProgressPointerMove}
            onPointerUp={handleProgressPointerUp}
            role="slider"
            aria-label="Audio seek"
            aria-valuenow={Math.round(currentTime)}
            aria-valuemin={0}
            aria-valuemax={Math.round(duration)}
          >
            <div
              className="h-full bg-yellow-400 rounded-full relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-yellow-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow" />
            </div>
          </div>
          <div className="flex justify-between text-xs text-zinc-500 mt-1">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      </div>
    );
  }

  // ── Full Player ────────────────────────────────────────────────────────────
  return (
    <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 w-full backdrop-blur-sm">
      <audio ref={audioRef} src={episode.audioUrl} preload="metadata" />

      {/* Progress Bar — FIX Bug #2: pointer-event-based drag seeking */}
      <div className="mb-5">
        <div
          ref={progressRef}
          id={`progress-bar-${episode.id}`}
          className="h-2.5 bg-zinc-800 rounded-full cursor-pointer group relative select-none"
          onPointerDown={handleProgressPointerDown}
          onPointerMove={handleProgressPointerMove}
          onPointerUp={handleProgressPointerUp}
          role="slider"
          aria-label="Audio seek"
          aria-valuenow={Math.round(currentTime)}
          aria-valuemin={0}
          aria-valuemax={Math.round(duration)}
        >
          {/* Track fill */}
          <div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-yellow-500 to-yellow-300 rounded-full transition-[width] duration-75"
            style={{ width: `${progress}%` }}
          />
          {/* Thumb */}
          <div
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
            style={{ left: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between text-xs text-zinc-400 mt-2 font-mono">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between gap-2">
        {/* Volume — FIX Bug #14: hide slider on mobile */}
        <div className="flex items-center gap-2">
          <button
            id={`mute-toggle-${episode.id}`}
            onClick={toggleMute}
            className="w-8 h-8 text-zinc-400 hover:text-white transition-colors flex items-center justify-center shrink-0"
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted || volume === 0 ? (
              <VolumeX className="w-4 h-4" />
            ) : (
              <Volume2 className="w-4 h-4" />
            )}
          </button>
          {/* FIX Bug #14: hidden on mobile, visible sm+ */}
          {/* FIX Bug #12: proper ARIA on volume slider */}
          <input
            id={`volume-slider-${episode.id}`}
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={isMuted ? 0 : volume}
            onChange={changeVolume}
            className="hidden sm:block w-20 h-1 accent-yellow-400 cursor-pointer"
            aria-label="Volume"
            aria-valuenow={Math.round(volumePct)}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>

        {/* Main Controls */}
        <div className="flex items-center gap-3">
          <button
            id={`rewind-${episode.id}`}
            onClick={() => skip(-15)}
            className="w-9 h-9 text-zinc-400 hover:text-white transition-colors flex items-center justify-center rounded-lg hover:bg-zinc-800 relative group/rewind"
            aria-label="Rewind 15 seconds"
          >
            <Rewind className="w-4 h-4" />
            <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[9px] text-zinc-600 hidden group-hover/rewind:block whitespace-nowrap">
              -15s
            </span>
          </button>

          <motion.button
            id={`play-pause-main-${episode.id}`}
            onClick={togglePlay}
            whileTap={{ scale: 0.92 }}
            className="w-14 h-14 rounded-full bg-yellow-400 flex items-center justify-center text-black hover:bg-yellow-300 transition-colors shadow-lg shadow-yellow-500/20"
            aria-label={isPlaying ? "Pause episode" : "Play episode"}
          >
            {isLoading ? (
              <Loader2 className="w-6 h-6 animate-spin" />
            ) : isPlaying ? (
              <Pause className="w-6 h-6 fill-current" />
            ) : (
              <Play className="w-6 h-6 fill-current ml-1" />
            )}
          </motion.button>

          <button
            id={`forward-${episode.id}`}
            onClick={() => skip(30)}
            className="w-9 h-9 text-zinc-400 hover:text-white transition-colors flex items-center justify-center rounded-lg hover:bg-zinc-800 relative group/fwd"
            aria-label="Forward 30 seconds"
          >
            <FastForward className="w-4 h-4" />
            <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[9px] text-zinc-600 hidden group-hover/fwd:block whitespace-nowrap">
              +30s
            </span>
          </button>
        </div>

        {/* Playback Rate */}
        <button
          id={`playback-rate-${episode.id}`}
          onClick={cycleRate}
          className="text-xs font-bold text-zinc-400 hover:text-yellow-400 transition-colors w-12 text-center border border-zinc-700 rounded-lg px-1.5 py-1.5 hover:border-yellow-500"
          aria-label={`Playback speed: ${playbackRate}x. Click to change.`}
          title={`Speed: ${playbackRate}x`}
        >
          {playbackRate}x
        </button>
      </div>
    </div>
  );
}
