import axios, { AxiosResponse } from "axios";
import { Machine } from "../models/machine";

// Hardcoded api url only for temporary experimental purposes. In production will be done via .env from web-pack
axios.defaults.baseURL = "http://localhost:5042/api";

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
  put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
  del: <T>(url: string) => axios.delete<T>(url).then(responseBody),
};

const Machines = {
  list: () => requests.get<Machine[]>("/machines"),
};

const agent = {
  Machines,
};

export default agent;
