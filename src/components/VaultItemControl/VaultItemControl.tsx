import React, { FC } from "react";
import { Button, Dropdown } from "react-bootstrap";
import {
  BiMenu,
  BiCloudDownload,
  BiShareAlt,
  BiPencil,
  BiTrash,
} from "react-icons/bi";
import { AiOutlineEye } from "react-icons/ai";
import "./VaultItemControl.scss";
import { VaultItemControlProps } from "./VaultItemControl.types";
import clsx from "clsx";
import { downloadFile, downloadFolder } from "@/utils/axios";

const VaultItemControl: FC<VaultItemControlProps> = ({
  isFile,
  control,
  id,
}) => {
  const handleDownloadClick = async (id: number) => {
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

  const handleShareClick = async (id: number) => {
    try {
      let res = "Share";
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  const handleRenameClick = async (id: number) => {
    try {
      let res = "Rename";
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteClick = async (id: number) => {
    try {
      let res = "Delete";
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {isFile && (
        <AiOutlineEye
          size={32}
          className="d-flex justify-content-between align-self-center p-1"
        />
      )}
      <Dropdown className="dropdown-menu-right">
        <Dropdown.Toggle as={Button} variant="light">
          <BiMenu />
        </Dropdown.Toggle>
        <Dropdown.Menu style={{ width: "170px" }}>
          <Dropdown.Item
            href="#action"
            className={clsx("d-flex", "justify-content-between", {
              disabled: !control.can_download,
            })}
            onClick={() => handleDownloadClick(id)}
          >
            <div className="d-flex justify-content-start">Download</div>
            <div className="d-flex justify-content-end">
              <BiCloudDownload size={25} />
            </div>
          </Dropdown.Item>
          <Dropdown.Item
            href="#action"
            className={clsx("d-flex", "justify-content-between", {
              disabled: !control.can_share,
            })}
            onClick={() => handleShareClick(id)}
          >
            <div className="d-flex justify-content-start">Share</div>
            <div className="d-flex justify-content-end">
              <BiShareAlt size={24} />
            </div>
          </Dropdown.Item>
          <Dropdown.Item
            href="#action"
            className={clsx("d-flex", "justify-content-between", {
              disabled: !control.can_rename,
            })}
            onClick={() => handleRenameClick(id)}
          >
            <div className="d-flex justify-content-start">Rename</div>
            <div className="d-flex justify-content-end">
              <BiPencil size={24} />
            </div>
          </Dropdown.Item>
          <Dropdown.Item
            href="#action"
            className={clsx("d-flex", "justify-content-between", {
              disabled: !control.can_delete,
            })}
            onClick={() => handleDeleteClick(id)}
          >
            <div className="d-flex justify-content-start">Delete</div>
            <div className="d-flex justify-content-end">
              <BiTrash size={24} />
            </div>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default VaultItemControl;
