import { downloadFile, downloadFolder } from "@/utils/axios";
import React, { FC } from "react";
import { BiCloudDownload } from "react-icons/bi";

const Download: FC = () => {
  const handleDownloadClick = async (id: number) => {
    const isFile = true;
    try {
      let res;
      if (isFile) {
        res = await downloadFile(id);
      } else {
        res = await downloadFolder(id);
      }
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="p-1">
      <BiCloudDownload size={32} onClick={() => handleDownloadClick(0)} />
    </div>
  );
};

export default Download;
