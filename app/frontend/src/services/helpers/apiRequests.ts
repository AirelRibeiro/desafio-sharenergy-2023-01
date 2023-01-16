import axios from 'axios';
import { ILogin } from '../interfaces';

export async function requestLogin(user: ILogin) {
  const { data } = await axios.post('http://localhost:3001/auth/login', user);
  return data;
}
