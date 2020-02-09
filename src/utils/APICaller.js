import { SourceType } from "../redux/constants/ActionTypes";

import axios from "axios";

import { APIhandler } from "./method";

const recommendationServer = process.env.REACT_APP_SERVER_URL;
const newsapiHeadlinesUrl = process.env.REACT_APP_NEWSAPI_HEADLINES;
const newsapiBaseUrl = process.env.REACT_APP_NEWSAPI_SEARCH;
const newsapiKey = process.env.REACT_APP_NEWSAPI_KEY;

const APICaller = ({
  method = "get",
  reqUrl,
  reqOpts,
  data = {},
  source = SourceType.RECOMMENDATIONS,
  headers = {
    "content-type": "application/json",
    Accept: "application/json"
  }
}) => {
  return new Promise(async (resolve, reject) => {
    let apiBaseUrl = "INVALID"
    console.log('src', source)
    switch(source) {
      case SourceType.NEWSAPI_HEADLINES:
        apiBaseUrl = newsapiHeadlinesUrl
        reqOpts = `apiKey=${newsapiKey}&${reqOpts}`
        break;
      case SourceType.NEWSAPI_SEARCH:
        apiBaseUrl = newsapiBaseUrl
        reqOpts = `apiKey=${newsapiKey}&${reqOpts}`
        break;
      case SourceType.RECOMMENDATIONS:
        const user = localStorage.getItem("user");
        let { token = false } = user ? JSON.parse(user) : {};
        headers = token
        ? { ...headers, Authorization: `Bearer ${token}` }
        : headers;
        apiBaseUrl = recommendationServer;
        break;
      default:
        break;
    }

    let url = `${apiBaseUrl}`;
    if (reqUrl) {
      url = `${apiBaseUrl}/${reqUrl}`
    } 
    url = `${url}?${reqOpts}`;
    console.log('APIURL', apiBaseUrl, url)
    
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
        switch(source) {
          case SourceType.NEWSAPI_HEADLINES:
          case SourceType.NEWSAPI_SEARCH:
            response.data = response.data.articles
          case SourceType.RECOMMENDATIONS:
            break;
          default:
            break;
        }
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
