import {
  ILogin,
  loginRequestProps,
  loginResponseProps,
} from "../../../../types/http/routes/ILogin";
import { instance } from "../axios-config";

const login = {
  execute: async (data: loginRequestProps): Promise<loginResponseProps> => {
    return await instance.post("/login", data);
  },
} satisfies ILogin;

export default login;
