'use client';

import type { DemoSoftware } from '@/data/demo-software-data';
import DemoCard from './DemoCard';
import EmptyState from './EmptyState';

interface DemoGridProps {
  software: DemoSoftware[];
  onViewDemo: (software: DemoSoftware) => void;
  onViewFeatures: (software: DemoSoftware) => void;
  onViewHowItWorks: (software: DemoSoftware) => void;
  onWatchVideo: (software: DemoSoftware) => void;
  onViewDocument?: (software: DemoSoftware) => void;
  searchQuery: string;
  selectedCategory: string;
  onClearFilters: () => void;
}

export default function DemoGrid({
  software,
  onViewDemo,
  onViewFeatures,
  onViewHowItWorks,
  onWatchVideo,
  onViewDocument,
  searchQuery,
  selectedCategory,
  onClearFilters,
}: DemoGridProps) {
  if (software.length === 0) {
    return (
      <EmptyState
        searchQuery={searchQuery}
        selectedCategory={selectedCategory}
        onClearFilters={onClearFilters}
      />
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
      {software.map((item) => (
        <DemoCard
          key={item.id}
          software={item}
          onViewDemo={onViewDemo}
          onViewFeatures={onViewFeatures}
          onViewHowItWorks={onViewHowItWorks}
          onWatchVideo={onWatchVideo}
          onViewDocument={onViewDocument}
        />
      ))}
    </div>
  );
}

