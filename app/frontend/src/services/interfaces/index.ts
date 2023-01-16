import { MouseEventHandler } from 'react';

export interface IAlertProps {
  message: string;
  closeAlert: MouseEventHandler<HTMLButtonElement>;
}
