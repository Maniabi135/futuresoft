import axios from "axios";

const BASE_URL = "https://60a55fccc0c1fd00175f3cf5.mockapi.io";

export const API_URLS = {
  tilesUrl: `${BASE_URL}/getTilesData/latencyData`,
  memoryUsageUrl: `${BASE_URL}/getTilesData/MemoryUsage`,
  processesUrl: `${BASE_URL}/getTilesData/processesData`,
  latencyUrl: `${BASE_URL}/getTilesData/latencyData`
};

export const makeApi = (config, doCancelRequest) => {
  const { CancelToken } = axios;
  config.method = config.method || "GET";
  config.headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  if (doCancelRequest !== undefined) {
    config.cancelToken = new CancelToken(function executor(cancelHttpRequest) {
      doCancelRequest(cancelHttpRequest);
    });
  }
  return axios(config)
    .then(response => {
      return response;
    })
    .catch(response => {
      return response;
    });
};
