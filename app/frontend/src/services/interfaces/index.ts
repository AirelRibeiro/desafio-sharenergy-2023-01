import { MouseEventHandler } from 'react';

export interface ILogin {
  username: string;
  password: string;
}

export interface IAlertProps {
  message: string;
  closeAlert: MouseEventHandler<HTMLButtonElement>;
}
