import axios from "axios";

const MarisInstance = axios.create({
  baseURL: "http://localhost:4000",
  header: {
    "Content-Type": "application/json",
  },
});

export default MarisInstance;
