import axios from "axios";

import { APIhandler } from "./method";

const apiBaseUrl = process.env.REACT_APP_SERVER_URL;

const APICaller = ({
  method = "get",
  reqUrl,
  data = {},
  headers = {
    "content-type": "application/json",
    Accept: "application/json"
  }
}) => {
  return new Promise(async (resolve, reject) => {
    const user = localStorage.getItem("user");
    let { token = false } = user ? JSON.parse(user) : {};

    let url = `${apiBaseUrl}/${reqUrl}`;
    headers = token
      ? { ...headers, Authorization: `Bearer ${token}` }
      : headers;
    // console.log(url, "data", data, "method", method, "header", headers);
    let options = {
      method,
      url,
      data,
      headers
    };
    if (method.toLowerCase() === "get") delete options["data"];
    axios({ ...options })
      .then(response => {
        // console.log("%c{res}", "color: green", " => ", response); // eslint-disable-line no-console
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
};
export default process.env.REACT_APP_ENV === "withoutServer"
  ? APIhandler
  : APICaller;
