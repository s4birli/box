import { BoxRoot, BoxRoot2 } from "@/models/BoxResponse";
import axios, { AxiosResponse } from "axios";
import { upperFirst } from "lodash";

const url = import.meta.env.VITE_API_URL;

export const axiosGetWithAuth = async (
  id: string | undefined
): Promise<BoxRoot2> => {
  const token = localStorage.getItem("authToken");
  //   if (!token) {
  //     throw new Error("No auth token found in local storage");
  //   }
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  try {
    const response = await axios.get<BoxRoot>(url, { headers });
    const responseData = response.data;
    const result = responseData.find(
      (item) => item.id === parseInt(id ? id : "0", 10)
    );
    if (!result) {
      throw new Error(`Could not find data with id ${id}`);
    }
    return result;
  } catch (error) {
    throw new Error(`Could not retrieve data from ${url}`);
  }
};

export const axiosPostWithAuth = async (data: any): Promise<AxiosResponse> => {
  const token = localStorage.getItem("authToken");
  if (!token) {
    throw new Error("No auth token found in local storage");
  }
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  try {
    const response = await axios.post(url, data, { headers });
    return response;
  } catch (error) {
    throw new Error(`Could not post data to ${url}`);
  }
};

export const downloadFile = async (id: number): Promise<any> => {
  if (!id) {
    throw new Error("No file ID provided");
  }
  try {
    // const response: AxiosResponse = await axios.get(
    //   `${url}/vault/files/${id}/content`
    // );
    return "OK";
    // return response.data;
  } catch (error: any) {
    throw new Error(`Could not retrieve file: ${error.message}`);
  }
};

export const downloadFolder = async (id: number): Promise<any> => {
  if (!id) {
    throw new Error("No folder ID provided");
  }
  try {
    // const response: AxiosResponse = await axios.get(
    //   `${url}/vault/folders/${id}/getDownloadLink`
    // );
    // return response.data;
    return "OK";
  } catch (error: any) {
    throw new Error(
      `Could not retrieve folder download link: ${error.message}`
    );
  }
};

export const createFolder = async (
  folderName: string,
  parentFolderId: string,
  silent: boolean = false
): Promise<any> => {
  try {
    const response: AxiosResponse = await axios.post(`${url}/vault/folders`, {
      folderName,
      parentFolderId,
    });
    return response.data;
  } catch (error: any) {
    if (!silent) {
      throw new Error(
        `Could not create folder "${folderName}": ${error.message}`
      );
    }
  }
};

export const deleteItem = async (item: any): Promise<any> => {
  if (!(item && item.id)) {
    throw new Error(`${upperFirst(item.type)} id is missing!`);
  }
  try {
    const response: AxiosResponse = await axios.delete(
      `${url}/vault/${item.type}s/${item.id}`
    );
    if (response.status === 200) {
      return item;
    } else {
      throw new Error(`Could not delete ${item.type} with id ${item.id}`);
    }
  } catch (error: any) {
    throw new Error(`Could not delete file: ${error.message}`);
  }
};

export const updateItem = async (
  item: any,
  patch: any,
  silent: boolean = false
): Promise<any> => {
  try {
    const response: AxiosResponse = await axios.put(
      `${url}/vault/${item.type}s/` + item.id,
      patch
    );
    return response.data;
  } catch (error: any) {
    if (!silent) {
      throw new Error(
        `Could not update ${item.type} "${item.name}": ${error.message}`
      );
    }
  }
};
