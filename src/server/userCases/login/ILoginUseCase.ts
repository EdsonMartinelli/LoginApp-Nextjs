export interface ILoginUserRequest {
  email: string;
  password: string;
}

export interface ILoginUserResponse{
  accessCookie: string;
  refreshCookie: string;
}

export interface ILoginUseCase {
  execute: (args: ILoginUserRequest) => Promise<ILoginUserResponse>;
}

