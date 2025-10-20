"use client";

import { useLoading } from './LoadingContext';

export default function ProgressBar() {
  const { isLoading } = useLoading();

  return (
    <div
      className={`fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-custom-blue to-custom-green transition-transform duration-500 ease-in-out ${
        isLoading ? 'transform-none' : '-translate-x-full'
      }`}
    />
  );
}
