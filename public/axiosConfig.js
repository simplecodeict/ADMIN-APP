const AxiosInstance = axios.create({
    baseURL: "http://ec2-13-203-212-195.ap-south-1.compute.amazonaws.com",
  });
  
  AxiosInstance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token");
      const payload = JSON.parse(token);
      const accessToken = payload?.accessToken;
      if (token) {
        config.headers["Authorization"] = `Bearer ${accessToken}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  