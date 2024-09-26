import React, { useState } from "react";
import { Title } from "./title";
import { Button } from "../ui";
import { FolderPlus } from "lucide-react";
import { FoldersGroup } from "./folders-group";

export interface Props {
  className?: string;
}

export const Folders: React.FC<Props> = ({ className }) => {
  // Хранение индекса выбранной папки, по умолчанию -1 (ничего не выбрано)
  const [selectedFolderIndex, setSelectedFolderIndex] = useState<number | null>(
    null
  );

  // Массив тестовых папок
  const folders = [
    { name: "Documents" },
    { name: "Pictures" },
    { name: "Music" },
  ];

  // Обработчик клика по папке
  const handleSelectedChange = (index: number) => {
    // Если текущая папка выбрана (ее индекс совпадает с selectedFolderIndex), делаем её неактивной
    // Если она не выбрана, то активируем её
    setSelectedFolderIndex(index === selectedFolderIndex ? null : index);
  };

  return (
    <div className={className}>
      <div className="flex items-center justify-between">
        <Title text="Folders" size="xs" className="text-white" />
        <Button className="bg-black">
          <FolderPlus className="w-[20px] h-[20px]"></FolderPlus>
        </Button>
      </div>

      {/* Передаем папки в FoldersGroup */}
      <FoldersGroup
        items={folders.map((folder, index) => ({
          ...folder,
          selected: index === selectedFolderIndex, // Если индекс совпадает с выбранным
          onSelectedChange: () => handleSelectedChange(index), // Изменяем выбранную папку
        }))}
      />
    </div>
  );
};
