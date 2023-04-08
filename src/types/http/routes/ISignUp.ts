export interface signUpRequestProps {
  username: string;
  email: string;
  password: string;
}

export interface signUpResponseProps {
  message: string;
}

export interface ISignUp {
  execute: (data: signUpRequestProps) => Promise<signUpResponseProps>;
}
