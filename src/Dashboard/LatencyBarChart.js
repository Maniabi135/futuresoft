import React, { useState, useEffect } from "react";
import { makeApi, API_URLS } from "../ApiUtils";
import Chart from "react-apexcharts";

const lineChartData = {
  series: [
    {
      name: "Latency",
      data: []
    }
  ],
  options: {
    chart: {
      height: 150,
      type: "bar",
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: false,
      background: {
        enabled: false
      }
    },
    grid: {
      xaxis: {
        lines: {
          show: false
        }
      },
      yaxis: {
        lines: {
          show: false
        }
      }
    },
    colors: ["#f48e13"],
    stroke: {
      width: [2, 2]
    },
    xaxis: {
      labels: {
        show: false
      },
      tooltip: {
        enabled: false
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    yaxis: {
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: false
      }
    },
    legend: {
      show: false
    }
  }
};

const defaultData = [
  2,
  10,
  8,
  7,
  5,
  4,
  3,
  2,
  4,
  14,
  8,
  4,
  10,
  4,
  3,
  3,
  2,
  14,
  8,
  10,
  15,
  12,
  6,
  7,
  8,
  9,
  10,
  11
];

const LatencyBarChart = () => {
  const [loader, setLoader] = useState(true);
  const [chartData, setChartData] = useState(lineChartData);
  const [milliSecs, setMilliSecs] = useState("");

  const getLatencyData = async () => {
    try {
      const config = {
        url: API_URLS.latencyUrl
      };
      let res = await makeApi(config);
      const tempData = { ...chartData };
      tempData.series[0].data = res?.data?.length
        ? res.data[0].data
        : defaultData;
      setMilliSecs(res?.data[0]?.millisecs || 2.3);
      setChartData({ ...chartData, ...tempData });
      setLoader(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getLatencyData();
  }, []);

  return (
    <div className="latencyBarChartSection">
      <div className="header d-flex align-items-center justify-content-between">
        <span className="title">LATENCY</span>
        {milliSecs && !loader && (
          <span className="seconds">{milliSecs} ms</span>
        )}
        {loader && <span className="linearBackground" />}
      </div>
      <div className="chartSection">
        {!loader && (
          <Chart
            options={chartData.options}
            series={chartData.series}
            type="bar"
            height={120}
          />
        )}
        {loader && <div className="chartLoader">Loading...</div>}
      </div>
    </div>
  );
};

export default LatencyBarChart;
