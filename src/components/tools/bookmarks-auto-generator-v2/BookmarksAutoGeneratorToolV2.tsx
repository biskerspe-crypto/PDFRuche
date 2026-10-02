'use client';

import React from 'react';
import { BookmarksAutoGeneratorTool } from '@/components/tools/bookmarks-auto-generator/BookmarksAutoGeneratorTool';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function BookmarksAutoGeneratorToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="bookmarks-auto-generator" className={className}>
      <BookmarksAutoGeneratorTool />
    </V2ToolHero>
  );
}

export default BookmarksAutoGeneratorToolV2;
