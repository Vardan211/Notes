import React from "react";
import { Folder, FolderProps } from "./folder"; // Импортируем компонент Folder

type Item = FolderProps;

interface Props {
  items: Item[];
  className?: string;
}

export const FoldersGroup: React.FC<Props> = ({ items, className }) => {
  return (
    <div className={className}>
      {items.map((item, index) => (
        <Folder
          key={index}
          name={item.name}
          selected={item.selected}
          onSelectedChange={item.onSelectedChange}
          className={item.className}
        />
      ))}
    </div>
  );
};
