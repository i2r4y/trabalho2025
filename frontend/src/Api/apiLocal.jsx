import axios from "axios";
const apiLocal = axios.create({
  baseURL: "http://localhost:3333",
  methods: "GET, POST, PUT, DELETE",
});

export default apiLocal;
