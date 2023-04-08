import { User } from "../../entities/User";

export interface ISignUpUserRequest {
  email: string;
  username: string;
  password: string;
}

export interface ISignUpUseCase {
  execute: (args: ISignUpUserRequest) => Promise<User>;
}
