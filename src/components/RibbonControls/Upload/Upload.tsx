import React, { FC } from "react";
import { BiCloudUpload } from "react-icons/bi";

const Upload: FC = () => {
  const handleUploadClick = async () => {
    try {
      const res = "OK";
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="p-1">
      <BiCloudUpload size={32} onClick={() => handleUploadClick()} />
    </div>
  );
};

export default Upload;
