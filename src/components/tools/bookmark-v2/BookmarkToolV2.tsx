'use client';

import React from 'react';
import { BookmarkTool } from '@/components/tools/bookmark';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function BookmarkToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="bookmark" className={className}>
      <BookmarkTool />
    </V2ToolHero>
  );
}

export default BookmarkToolV2;
