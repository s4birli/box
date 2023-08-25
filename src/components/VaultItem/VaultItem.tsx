import React, { FC } from "react";
import { VaultItemProps } from "./VaultItem.types";
import VaultItemControl from "@components/VaultItemControl";
import { BiFolder, BiFile } from "react-icons/bi";
import "./VaultItem.scss";

const VaultItem: FC<VaultItemProps> = ({
  id,
  name,
  time,
  size,
  type,
  control,
}) => {
  return (
    <>
      <li key={id} className="p-1 mb-4 custom-css">
        <div className="d-flex justify-content-between">
          <a href={`/vault/${id}`}>
            <div className="d-flex justify-content-start align-items-center gap-3">
              {type === "folder" ? (
                <BiFolder size={35} />
              ) : (
                type === "file" && <BiFile size={35} />
              )}
              <div className="d-flex flex-column align-self-center">
                <div className="d-flex">
                  <span className="name">{name}</span>
                </div>
                <div className="d-flex">
                  <span className="detail">
                    Last edited {time} | {size}
                  </span>
                </div>
              </div>
            </div>
          </a>
          <div className="d-flex justify-content-end align-self-center">
            <VaultItemControl
              control={control}
              isFile={type === "file"}
              id={id}
            />
          </div>
        </div>
      </li>
    </>
  );
};
export default VaultItem;
