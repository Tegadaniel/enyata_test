import axios from "axios";

let URL = process.env.REACT_APP_API_URL;

const apiResource = () => {
  const api = axios.create({
    baseURL: URL,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Methods": "*",
      "Access-Control-Allow-Origin": URL,
      "Access-Control-Allow-Credentials": true,
    },
  });

  api.interceptors.request.use(
    (config) => {
      const token = TokenService.getLocalAccessToken();
      if (!token) return config;
      config.headers["Authorization"] = token;
      return config;
    },
    (error) => Promise.reject(error)
  );

  api.interceptors.response.use(
    (response) =>
      new Promise((resolve, reject) => {
        resolve(response);
      }),
    async (error) => {
      if (error?.response?.status === 403) {
        TokenService.removeUser();
        window.location = "/login";
      } else if (error?.response?.status === 401) {
        const originalConfig = error.config;
        if (
          originalConfig.url !== "/api/v1/authenticate/login" &&
          error?.response
        ) {
          window.location = "/login";
          TokenService.removeUser();
          // call refresh token
          // Access Token was expired
          if (error.response.status === 400 && !originalConfig._retry) {
            originalConfig._retry = true;
            try {
              const rs = await api.post("/api/v1/authenticate/refreshtoken", {
                refreshToken: TokenService.getLocalRefreshToken(),
              });
              const { accessToken } = rs.data;
              TokenService.updateLocalAccessToken(accessToken);
              return api(originalConfig);
            } catch (_error) {
              return Promise.reject(_error);
            }
          }
        }
      } else {
        return new Promise((resolve, reject) => {
          reject(error?.response);
        });
      }
      return Promise.reject(error?.response);
    }
  );
  return {
    get: (url) => api.get(url).then(({ data }) => data),
    post: (values) => {
      const [url, form] = values;
      return api.post(url, form).then(({ data }) => data);
    },
    put: (values) => {
      const [url, form] = values;
      return api.put(url, form).then(({ data }) => data);
    },
  };
};

export const api = apiResource();
