import React from 'react';

type ErrorDisplayProps = {
  error: string;
  onRetry: () => void;
};

export default function ErrorDisplay({ error, onRetry }: ErrorDisplayProps) {
  return (
    <div className="flex flex-col h-[420px] w-full max-w-xl border rounded-xl shadow bg-white">
      <div className="flex-1 flex items-center justify-center text-red-500">
        <div className="text-center">
          <div className="mb-2">Error loading chat</div>
          <div className="text-sm text-gray-500">{error}</div>
          <button
            onClick={onRetry}
            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    </div>
  );
}
