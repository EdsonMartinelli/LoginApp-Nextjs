import axios, { AxiosError, AxiosResponse } from "axios";
import { IStandardError } from "../../../types/http/errors/IStandardError";

const instance = axios.create({
  baseURL: "api",
});


/* instance.interceptors.response.use(
  (response: AxiosResponse) => {
    const responseData = (response.data as AxiosResponse).data;
    return responseData;
  },
  async (error: AxiosError) => {
    if (error.response?.status === 0) {
      const responseNetworkError = {
        message: "Internal Server Error!",
        status: 500,
      } satisfies IStandardError;
      return await Promise.reject(responseNetworkError);
    }
    const responseError = (error.response?.data as AxiosResponse).data;
    const responseAPIError = {
      message: responseError?.message,
      status: error.response?.status ?? 500,
    } satisfies IStandardError;
    return await Promise.reject(responseAPIError);
  }
); */

export { instance };
