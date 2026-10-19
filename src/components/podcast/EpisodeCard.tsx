"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Clock,
  Calendar,
  Tag,
  User,
  ChevronUp,
  Share2,
  Check,
} from "lucide-react";
import { PodcastEpisode } from "@/data/podcastData";
import dynamic from "next/dynamic";

const AudioPlayer = dynamic(() => import("./AudioPlayer"), { ssr: false });

interface EpisodeCardProps {
  episode: PodcastEpisode;
  index: number;
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function EpisodeCard({ episode, index }: EpisodeCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyLink = () => {
    const url = `https://kiaantechnology.com/podcast/${episode.id}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden hover:border-yellow-500/40 transition-all duration-500 group"
      aria-label={`Episode ${episode.episode}: ${episode.title}`}
    >
      <div className="p-6">
        {/* Episode Header */}
        <div className="flex items-start gap-4">
          {/* Episode Number Badge */}
          <div className="shrink-0 w-14 h-14 rounded-xl bg-zinc-800 border border-zinc-700 flex flex-col items-center justify-center group-hover:border-yellow-500/50 group-hover:bg-yellow-500/10 transition-all duration-300">
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest">EP</span>
            <span className="text-lg font-black text-white font-display leading-none">
              {String(episode.episode).padStart(2, "0")}
            </span>
          </div>

          {/* Title + Meta */}
          <div className="flex-1 min-w-0">
            <Link
              href={`/podcast/${episode.id}`}
              className="block group/link"
              aria-label={`Listen to episode: ${episode.title}`}
            >
              <h2 className="text-lg font-bold text-white leading-snug group-hover/link:text-yellow-400 transition-colors line-clamp-2">
                {episode.title}
              </h2>
            </Link>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mt-2">
              <span className="flex items-center gap-1 text-xs text-zinc-500">
                <Calendar className="w-3 h-3" />
                {formatDate(episode.publishedAt)}
              </span>
              <span className="flex items-center gap-1 text-xs text-zinc-500">
                <Clock className="w-3 h-3" />
                {episode.duration}
              </span>
              {episode.guestName && (
                <span className="flex items-center gap-1 text-xs text-zinc-500">
                  <User className="w-3 h-3" />
                  {episode.guestName}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="mt-4 text-sm text-zinc-400 leading-relaxed">
          {episode.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-3">
          {episode.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-zinc-800/80 border border-zinc-700 rounded-full text-xs text-zinc-400"
            >
              <Tag className="w-2.5 h-2.5" />
              {tag}
            </span>
          ))}
        </div>

        {/* Expandable Player */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              id={`player-${episode.id}`}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
              className="overflow-hidden"
            >
              <div className="mt-4">
                <AudioPlayer episode={episode} compact />
              </div>
              <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                {episode.longDescription}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Actions */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-zinc-800">
          <div className="flex items-center gap-2">
            <button
              id={`expand-${episode.id}`}
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 px-4 py-2 bg-yellow-400 text-black text-sm font-bold rounded-lg hover:bg-yellow-300 transition-colors"
              aria-expanded={isExpanded}
              aria-controls={`player-${episode.id}`}
            >
              {isExpanded ? (
                <>
                  <ChevronUp className="w-3.5 h-3.5" />
                  Collapse
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-current" />
                  Play Episode
                </>
              )}
            </button>
            <Link
              href={`/podcast/${episode.id}`}
              className="px-4 py-2 text-sm text-zinc-400 border border-zinc-700 rounded-lg hover:text-white hover:border-zinc-500 transition-colors"
              aria-label={`View full details for ${episode.title}`}
            >
              Details
            </Link>
          </div>

          <button
            id={`share-${episode.id}`}
            onClick={copyLink}
            className="w-9 h-9 flex items-center justify-center text-zinc-500 hover:text-yellow-400 transition-colors rounded-lg hover:bg-zinc-800"
            aria-label="Copy episode link"
            title="Copy link"
          >
            {copied ? <Check className="w-4 h-4 text-green-400" /> : <Share2 className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </motion.article>
  );
}
