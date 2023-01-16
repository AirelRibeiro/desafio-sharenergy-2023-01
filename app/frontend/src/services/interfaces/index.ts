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

export interface ISearchProps {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  clearSearch: React.MouseEventHandler<HTMLButtonElement>;
  filterUsers: React.MouseEventHandler<HTMLButtonElement>;
}

