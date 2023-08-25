import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AxiosResponse } from "axios";
import Ribbon from "@components/Ribon";
import BreadCrumb from "@components/BreadCrumb";
import VaultList from "@components/VaultList";
import {
  PathCollection,
  BoxRoot,
  VaultItem,
  ErrorState,
  BoxRoot2,
} from "@/models/BoxResponse";
import { axiosGetWithAuth } from "@/utils/axios";
import { getBreadCrumb, getLastIndex, mapVaultItems } from "@/utils/mapData";

const Vault: FC = () => {
  const { id } = useParams<{ id: string }>();
  const [vaultList, setVaultList] = useState<VaultItem[]>([]);
  const [breadCrumbList, setBreadCrumbList] = useState<
    PathCollection | undefined
  >(undefined);
  const [lastIndex, setLastIndex] = useState<number>(-1);
  const [error, setError] = useState<ErrorState | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataList: BoxRoot2 = await axiosGetWithAuth(id);
        const list = mapVaultItems(dataList?.boxData.entries);
        const breadCrumb = getBreadCrumb(dataList?.boxData.entries);
        const lastIndex = getLastIndex(dataList?.boxData.entries);
        setVaultList(list ? list : []);
        setBreadCrumbList(breadCrumb);
        setLastIndex(lastIndex);
      } catch (error) {
        setError({ message: `Could not retrieve folder items for ${id}` });
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className="container">
      <Ribbon />
      {error ? (
        <div className="alert alert-danger" role="alert">
          {error.message}
        </div>
      ) : (
        <>
          <BreadCrumb data={breadCrumbList} />
          <VaultList data={vaultList} id={lastIndex} />
        </>
      )}
    </div>
  );
};

export default Vault;
