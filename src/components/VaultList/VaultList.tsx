import React, { FC } from "react";
import "./VaultList.scss";
import { VaultListProps } from "./VaultList.types";
import VaultItem from "@components/VaultItem";
import { FaArrowUp } from "react-icons/fa";

const VaultList: FC<VaultListProps> = ({ data, id }) => {
  return (
    <>
      <div className="p-2">
        {id !== -1 && (
          <a href={`/vault/${id}`}>
            <div className="mt-3 p-2 d-flex custom-css">
              <FaArrowUp size={34} className="mb-1" />
              <span className="mt-2">&nbsp; &nbsp; Up</span>
            </div>
          </a>
        )}

        <div className="mt-3">
          {data && (
            <ul className="list-unstyled">
              {data.map((item) => (
                <VaultItem
                  key={item.id}
                  id={parseInt(item.id)}
                  name={item.name}
                  time={item.time}
                  size={item.size}
                  type={item.type}
                  control={item.control}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default VaultList;
