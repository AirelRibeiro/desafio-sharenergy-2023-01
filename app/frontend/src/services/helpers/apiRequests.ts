import axios from 'axios';
import { ILogin } from '../interfaces';

export async function requestLogin(user: ILogin) {
  const { data } = await axios.post('http://localhost:3001/auth/login', user);
  return data;
}

export async function requestRandomUsers() {
  const { data } = await axios.get(
    'https://randomuser.me/api/?results=100&nat=br'
  );
  return data;
}

export async function requestRandomDogs() {
  const { data } = await axios.get('https://random.dog/woof.json');
  return data;
}
