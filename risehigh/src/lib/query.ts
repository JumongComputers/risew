import axios, { AxiosInstance } from 'axios';


export const instance: AxiosInstance = axios.create({
  baseURL: process.env.URL,
  headers: {
    'Content-Type': 'application/json',
  },
});



