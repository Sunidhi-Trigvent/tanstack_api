import axios from "axios";

const useAuth = () => {
  const request = axios.create({
    baseURL: "https://api.pujakaitem.com/api/products",
  });
  return { request };
};

export default useAuth;
