import React from 'react';

type LoadMoreButtonProps = {
  onLoadMore: () => void;
  isLoading: boolean;
  hasMore: boolean;
};

export default function LoadMoreButton({ onLoadMore, isLoading, hasMore }: LoadMoreButtonProps) {
  if (!hasMore) return null;
  return (
    <div className="text-center">
      <button
        onClick={onLoadMore}
        disabled={isLoading}
        className="text-sm text-blue-600 hover:text-blue-800 disabled:opacity-50 transition-colors"
      >
        {isLoading ? 'Loading...' : 'Load more messages'}
      </button>
    </div>
  );
}
