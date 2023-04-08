import {
  ISignUp,
  signUpRequestProps,
  signUpResponseProps,
} from "../../../../types/http/routes/ISignUp";
import { instance } from "../axios-config";

const signup = {
  execute: async (data: signUpRequestProps): Promise<signUpResponseProps> => {
    return await instance.post("/signup", data);
  },
} satisfies ISignUp;

export default signup;
