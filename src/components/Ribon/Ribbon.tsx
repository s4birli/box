import React, { FC } from "react";
import Download from "@components/RibbonControls/Download";
import Upload from "@components/RibbonControls/Upload";
import Create from "@components/RibbonControls/Create";
import Refresh from "@components/RibbonControls/Refresh";
import Search from "@components/RibbonControls/Search";

const Ribbon: FC = () => {
  return (
    <>
      <div className="d-flex justify-content-between p-3 border-bottom border-gray">
        <div className="d-flex justify-content-start gap-3">
          <Download />
          <Upload />
          <Create />
          <Refresh />
        </div>
        <div className="d-flex justify-content-end">
          <Search />
        </div>
      </div>
    </>
  );
};

export default Ribbon;
