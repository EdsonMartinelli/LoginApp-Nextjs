export interface validateEmailRequestProps {
  id: string;
  emailToken: string;
}

export interface validateEmailResponseProps {
  message: string;
}

export interface IValidateEmail {
  execute: ({
    id,
    emailToken,
  }: validateEmailRequestProps) => Promise<validateEmailResponseProps>;
}
