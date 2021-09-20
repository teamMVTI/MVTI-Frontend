import axios, { AxiosRequestConfig, AxiosResponse, Method } from "axios";

export const client = axios.create();

export const req = async (
  url: string,
  method: Method,
  cb?: (res: AxiosResponse) => void,
  errcb?: () => void,
  configs?: AxiosRequestConfig,
) => {
  const res = await client.request({
    url,
    method,
    ...configs,
  });

  if (res.status === 200) {
    if (cb) cb(res);
  } else {
    console.log(res.data);
    if (errcb) errcb();
  }
};
