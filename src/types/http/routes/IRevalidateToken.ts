export interface revalidateTokenResponseProps {
  token: string;
}

export interface IRevalidateToken {
  execute: () => Promise<revalidateTokenResponseProps>;
}
