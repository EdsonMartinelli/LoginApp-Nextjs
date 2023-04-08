import {
  IValidateEmail,
  validateEmailRequestProps,
  validateEmailResponseProps,
} from "../../../../types/http/routes/IValidateEmail";
import { instance } from "../axios-config";

const validateEmail = {
  execute: async ({
    id,
    emailToken,
  }: validateEmailRequestProps): Promise<validateEmailResponseProps> => {
    return await instance.patch(`/validateemail/${id}`, { emailToken });
  },
} satisfies IValidateEmail;

export default validateEmail;
