"use client";

import dynamic from "next/dynamic";
import { PodcastEpisode } from "@/data/podcastData";
import { Loader2 } from "lucide-react";

const AudioPlayer = dynamic(() => import("./AudioPlayer"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-24 bg-zinc-900/60 border border-zinc-800 rounded-2xl">
      <Loader2 className="w-6 h-6 text-zinc-600 animate-spin" />
    </div>
  ),
});

interface Props {
  episode: PodcastEpisode;
  compact?: boolean;
}

export default function AudioPlayerClient({ episode, compact }: Props) {
  return <AudioPlayer episode={episode} compact={compact} />;
}
