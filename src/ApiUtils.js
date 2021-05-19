import axios from "axios";

const BASE_URL = "https://60a55fccc0c1fd00175f3cf5.mockapi.io";

export const API_URLS = {
  tilesUrl: `https://60a55fccc0c1fd00175f3cf5.mockapi.io/getTilesData/latencyData`,
  memoryUsageUrl: `${BASE_URL}/getTilesData/MemoryUsage`,
  processesUrl: `${BASE_URL}/getTilesData/processesData`,
  latencyUrl: `${BASE_URL}/getTilesData/latencyData`
};

export const makeApi = async (data = {}, doCancelRequest = "") => {
  try {
    const { CancelToken = "" } = axios;
    const { method = "GET" } = data;
    const config = {
      method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      withCredentials: true
    };
    doCancelRequest &&
      (config.cancelToken = new CancelToken(function executor(
        cancelHttpRequest
      ) {
        doCancelRequest(cancelHttpRequest);
      }));
    return await axios(config);
  } catch (err) {
    console.error(err);
  }
};

// export const makeApi = (config, doCancelRequest) => {
//   const { CancelToken } = axios;
//   config.method = config.method || "GET";
//   config.headers = {
//     Accept: "application/json",
//     "Content-Type": "application/json"
//   };
//   config.withCredentials = true;
//   if (doCancelRequest !== undefined) {
//     config.cancelToken = new CancelToken(function executor(cancelHttpRequest) {
//       doCancelRequest(cancelHttpRequest);
//     });
//   }
//   return axios(config)
//     .then(response => {
//       return response;
//     })
//     .catch(response => {
//       return response;
//     });
// };
