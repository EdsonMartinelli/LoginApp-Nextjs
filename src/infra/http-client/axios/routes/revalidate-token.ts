import {
  IRevalidateToken,
  revalidateTokenResponseProps,
} from "../../../../types/http/routes/IRevalidateToken";
import { instance } from "../axios-config";

const revalidateToken = {
  execute: async (): Promise<revalidateTokenResponseProps> => {
    return await instance.post("/revalidateToken");
  },
} satisfies IRevalidateToken;

export default revalidateToken;
