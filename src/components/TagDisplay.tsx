'use client';

import { useState } from 'react';

interface TagDisplayProps {
  tags: string[];
}

const tagColors = [
  { bg: 'bg-blue-500', text: 'text-white' },
  { bg: 'bg-green-500', text: 'text-white' },
  { bg: 'bg-purple-500', text: 'text-white' },
  { bg: 'bg-red-500', text: 'text-white' },
  { bg: 'bg-yellow-500', text: 'text-white' },
  { bg: 'bg-indigo-500', text: 'text-white' },
  { bg: 'bg-pink-500', text: 'text-white' },
  { bg: 'bg-teal-500', text: 'text-white' },
];

export default function TagDisplay({ tags }: TagDisplayProps) {
  const [showAllTags, setShowAllTags] = useState(false);
  const initialTags = tags.slice(0, 10);
  const remainingTagsCount = tags.length - initialTags.length;

  const displayedTags = showAllTags ? tags : initialTags;

  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {displayedTags.map((tag, index) => (
        <span
          key={index}
          className={`${tagColors[index % tagColors.length].bg} bg-opacity-30 ${tagColors[index % tagColors.length].text} text-xs px-2 py-1 rounded-full inline-flex items-center justify-center`}
        >
          {tag}
        </span>
      ))}
      {remainingTagsCount > 0 && !showAllTags && (
        <button
          onClick={() => setShowAllTags(true)}
          className="text-custom-blue text-xs px-2 py-1 rounded-full border border-custom-blue hover:bg-custom-blue hover:text-white transition-colors duration-300 cursor-pointer"
        >
          {remainingTagsCount} more
        </button>
      )}
      {showAllTags && tags.length > 10 && (
        <button
          onClick={() => setShowAllTags(false)}
          className="text-custom-blue text-xs px-2 py-1 rounded-full border border-custom-blue hover:bg-custom-blue hover:text-white transition-colors duration-300 cursor-pointer"
        >
          Show less
        </button>
      )}
    </div>
  );
}
