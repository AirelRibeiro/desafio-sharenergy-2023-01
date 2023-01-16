import { MouseEventHandler } from 'react';

export interface ILogin {
  username: string;
  password: string;
}

export interface IStorageUserData {
  token: string;
  remember: boolean;
}

export interface IAlertProps {
  message: string;
  closeAlert: MouseEventHandler<HTMLButtonElement>;
}
