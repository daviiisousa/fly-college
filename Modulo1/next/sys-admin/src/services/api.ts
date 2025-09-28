import axios from "axios";

export const instance = axios.create({
  baseURL: "https://e-commerce-api-d72d.onrender.com/",
});
