import axios from "axios";

// export const urlApi = API_URL; //"http://129.168.2.30:3001"; //API_URL;
export const urlApi = "http://localhost:3001";

const instance = axios.create({
  baseURL: urlApi,
  timeout: 20000,
});

instance.interceptors.request.use(
  async (request) => {
    let token = await localStorage.getItem("token");
    let authorization = request.headers.Authorization;

    if (!!token && !authorization) {
      request.headers.Authorization = `Bearer ${token}`;
    }

    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    //console.log(`\n\n Rota requerida: ${response.config.url}`);
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const api = instance;
