import React, { FC, useEffect } from "react";
import "./BreadCrumb.scss";
import { BreadCrumbProps } from "./BreadCrumb.types";
import clsx from "clsx";

const BreadCrumb: FC<BreadCrumbProps> = ({ data }) => {
  const [isRoot, setIsRoot] = React.useState<boolean>(true);

  useEffect(() => {
    if (data && data.entries && data.entries.length > 1) {
      setIsRoot(false);
    }
  }, [data]);

  return (
    <div className="border-bottom border-gray">
      <nav className="custom-margin">
        <ul className="breadcrumb list-unstyled ">
          {data?.entries?.map((item, index) => {
            const isActive = index === data.entries.length - 1;
            return (
              <li
                key={item.id}
                className={clsx("breadcrumb-item", "mt-3", {
                  active: isActive,
                })}
                aria-current={isActive ? "page" : undefined}
              >
                {isActive ? (
                  <span>{item.name}</span>
                ) : (
                  <a href={`/vault/${item.id}`}>{item.name}</a>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default BreadCrumb;
