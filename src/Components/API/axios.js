import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const BASE_URL = process.env.REACT_APP_BASE_URL;

export default axios.create({
  baseURL: BASE_URL,
});
