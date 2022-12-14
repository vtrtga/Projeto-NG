import axios from 'axios'
import ITransaction from '../interfaces/ITransaction'
import IUser from '../interfaces/IUser'

const protocol = `${process.env.PROTOCOL || 'http'}`
const endpoint = `${process.env.ENDPOINT || 'localhost'}`
const port = `${process.env.REACT_APP_API_PORT || '3001'}`

const api = axios.create({
  baseURL: `${protocol}://${endpoint}:${port}`,
  headers: {
    common: {
      Authorization: localStorage.getItem('token'),
    }, 
  },
})

export const setToken = (token: string) => {
  api.defaults.headers.common.Authorization = token;
};

export const requestData = async (endpoint: string) => {
  const { data } = await api.get(endpoint);

  return data;
};

export const requestLogin = async (endpoint: string, body: IUser) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

export const createUserRequest = async (endpoint: string, body: IUser) => {
  await api.post(endpoint, body);
};

export const getUserInfos = async(endpoint: string) => {
  console.log(endpoint, 'ENDPOINT')
  const { data } =  await api.get(endpoint);
  return data;
}

export const transactionRequest = async(endpoint: string, body: ITransaction) => {
  const { data } = await api.post(endpoint, body);

  return data;
}

