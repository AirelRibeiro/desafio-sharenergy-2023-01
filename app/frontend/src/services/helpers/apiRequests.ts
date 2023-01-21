import axios from 'axios';
import {
  IClientCreateFields,
  IClientUpdateFields,
  ILogin,
} from '../interfaces';
import { recoverData } from './storageFunctions';

export async function requestLogin(user: ILogin) {
  const { data } = await axios.post('http://localhost:3001/auth/login', user);
  return data;
}

export async function requestCreateClient(client: IClientCreateFields) {
  const token = recoverData()?.token;
  const { data } = await axios.post('http://localhost:3001/users', client, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return data;
}

export async function requestUpdateClient(client: IClientUpdateFields) {
  const token = recoverData()?.token;
  const data = await axios.patch(
    `http://localhost:3001/users/${client._id}`,
    client,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return data;
}

export async function requestClients() {
  const token = recoverData()?.token;
  const { data } = await axios.get('http://localhost:3001/users', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
}

export async function requestSingleClient(id: string) {
  const token = recoverData()?.token;
  const { data } = await axios.get(`http://localhost:3001/users/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
}

export async function requestDeletClient(id: string) {
  const token = recoverData()?.token;
  const { data } = await axios.delete(`http://localhost:3001/users/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
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
