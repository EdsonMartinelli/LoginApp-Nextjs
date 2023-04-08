export interface loginRequestProps {
  email: string;
  password: string;
}

export interface loginResponseProps {
  token: string;
}

export interface ILogin {
  execute: (data: loginRequestProps) => Promise<loginResponseProps>;
}
