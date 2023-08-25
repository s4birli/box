import React, { FC } from "react";
import { BiRefresh } from "react-icons/bi";

const Refresh: FC = () => {
  const handleRefreshClick = () => {
    window.location.reload();
  };
  return (
    <div className="p-1">
      <BiRefresh size={32} onClick={() => handleRefreshClick()} />
    </div>
  );
};

export default Refresh;
