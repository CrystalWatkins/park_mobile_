import axios from "axios";

axios.defaults.headers.common["Authorization"] = "token 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";
export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};