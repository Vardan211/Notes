import React from "react";
import {
  Folder as FolderIcon,
  FolderOpen as FolderOpenIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface FolderProps {
  name: string;
  onSelectedChange?: (selected: boolean) => void;
  selected?: boolean;
  className?: string;
}

export const Folder: React.FC<FolderProps> = ({
  name,
  onSelectedChange,
  selected = false,
  className,
}) => {
  return (
    <div
      className={cn(" hover:text-white", className)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "15px",
        cursor: "pointer",
      }}
      onClick={() => onSelectedChange && onSelectedChange(!selected)} // Меняем состояние при клике
    >
      {selected ? (
        <>
          <FolderOpenIcon className="w-[20px] h-[20px] text-white" />
          <span className="text-white">{name}</span>
        </>
      ) : (
        <>
          <FolderIcon className="w-[20px] h-[20px] text-gray-300 hover:text-white" />
          <span className="text-gray-300 hover:text-white">{name}</span>
        </>
      )}
    </div>
  );
};
