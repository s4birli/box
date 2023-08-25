import { createFolder } from "@/utils/axios";
import React, { FC } from "react";
import { BiFolderPlus } from "react-icons/bi";

const Create: FC = () => {
  const handleCreateClick = async (
    folderName: string,
    parentFolderId: string
  ) => {
    try {
      const res = createFolder(folderName, parentFolderId, false);
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="p-1">
      <BiFolderPlus size={32} onClick={() => handleCreateClick("New", "1")} />
    </div>
  );
};

export default Create;
