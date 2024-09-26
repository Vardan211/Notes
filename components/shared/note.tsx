import React from "react";

export interface NoteProps {
  id: string;
  title: string;
  content?: string;
  folderId: string;
  createdAt: string;
  userId: string;
  className?: string;
}

export const Note: React.FC<NoteProps> = ({
  id,
  title,
  content,
  folderId,
  createdAt,
  userId,
  className,
}) => {
  return (
    <div className={`bg-black shadow-lg rounded-lg p-6 space-y-4 ${className}`}>
      {/* Title */}
      <h2 className="text-2xl font-bold text-white">{title}</h2>

      {/* Date */}
      <div className="text-sm text-gray-500">{createdAt}</div>

      {/* Folder */}
      <div className="text-sm text-blue-500">
        <a href="#" className="hover:underline">
          Folder: {folderId}
        </a>
      </div>

      {/* Content */}
      <div className="text-white text-base space-y-4">
        {content ? (
          <p>{content}</p>
        ) : (
          <p className="text-gray-400">No content available</p>
        )}
      </div>
    </div>
  );
};
