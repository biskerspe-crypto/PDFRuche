'use client';

import React from 'react';

export const DropzoneCard: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return <div className="lv4-dropzone p-6">{children}</div>;
};

export default DropzoneCard;
