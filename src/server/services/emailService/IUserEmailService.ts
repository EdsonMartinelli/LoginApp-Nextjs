export interface emailConfirmProps {
  email: string;
  emailToken: string;
}

export interface IUsersEmailService {
  sendEmailConfirm: (data: emailConfirmProps) => Promise<void>;
}
