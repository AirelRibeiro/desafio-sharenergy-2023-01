import { MouseEventHandler, ReactElement } from 'react';

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

export interface ILayout {
  pageTitle: string;
  page: ReactElement;
}

export interface IHttpStatus {
  value: number;
  name: string;
}

export interface ISelectHttpProps {
  selected: IHttpStatus;
  setSelected: React.Dispatch<React.SetStateAction<IHttpStatus>>;
}

export interface IHttpCatsProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  catStatus: IHttpStatus;
}

export interface IAddress {
  street: string;
  city: string;
  stateAndCountry: string;
  cep: string;
}

export interface IUsers {
  id: string;
  name: string;
  username: string;
  email: string;
  age?: number;
  image?: string;
}

export interface IClient {
  name: string;
  username: string;
  email: string;
  phone: string;
  cpf: string;
}

export interface IClientProps {
  userInformation: IClient;
  changesFunction: {
    handleChangeUser: React.ChangeEventHandler<HTMLInputElement>;
    handleChangeAddress: React.ChangeEventHandler<HTMLInputElement>;
  };
  address: IAddress;
}

export interface IUsersViewProps {
  usersToDisplay: IUsers[];
  page: number;
  options: boolean;
}
export interface IName {
  title: string;
  first: string;
  last: string;
}

export interface IStreet {
  number: number;
  name: string;
}

export interface ICoordinates {
  latitude: string;
  longitude: string;
}

export interface ITimezone {
  offset: string;
  description: string;
}

export interface IUserLogin {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}

export interface IDob {
  date: string;
  age: number;
}

export interface IRegistered {
  date: string;
  age: number;
}

export interface IId {
  name: string;
  value: string;
}

export interface IPicture {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface IInfo {
  seed: string;
  results: number;
  page: number;
  version: string;
}

export interface IRoot {
  results: IResult[];
  info: IInfo;
}

export interface ILocation {
  street: IStreet;
  city: string;
  state: string;
  country: string;
  postcode: string;
  coordinates: ICoordinates;
  timezone: ITimezone;
}

export interface IResult {
  gender: string;
  name: IName;
  location: ILocation;
  email: string;
  login: IUserLogin;
  dob: IDob;
  registered: IRegistered;
  phone: string;
  cell: string;
  id: IId;
  picture: IPicture;
  nat: string;
}
