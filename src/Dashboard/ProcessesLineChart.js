import React, { useState, useEffect } from "react";
import { makeApi, API_URLS } from "../ApiUtils";
import Chart from "react-apexcharts";
import { Utils } from "../Utils";

const barChartData = {
  series: [
    {
      name: "",
      data: []
    }
  ],
  options: {
    chart: {
      type: "line",
      zoom: {
        enabled: false
      },
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
    stroke: {
      width: [3, 3]
    },
    tooltip: {
      shared: false,
      intersect: true,
      x: {
        show: false
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
    colors: ["#f6719d"],
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
  80,
  41,
  55,
  71,
  39,
  62,
  69,
  91,
  148,
  10,
  20,
  30,
  40,
  50,
  60
];

const ProcessesLineChart = () => {
  const [loader, setLoader] = useState(true);
  const [chartData, setChartData] = useState(barChartData);
  const [value, setValue] = useState("");

  const getProcessesData = async () => {
    try {
      const config = {
        url: API_URLS.processesUrl
      };
      let res = await makeApi(config);
      const tempData = { ...chartData };
      tempData.series[0].data = res?.data?.length
        ? res?.data?.[0]?.data
        : defaultData;
      setChartData({ ...chartData, ...tempData });
      setValue(res?.data?.[0]?.value || 1597);
      setLoader(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getProcessesData();
  }, []);

  return (
    <div className="processesLineChartSection">
      <div className="row">
        <div className="col-12 order-1 col-sm-12 col-md-6 col-lg-7 order-sm-1  order-md-0 chartSection">
          {!loader && (
            <Chart
              options={chartData.options}
              series={chartData.series}
              type="line"
              height={110}
            />
          )}
          {loader && <div className="chartLoader">Loading...</div>}
        </div>
        <div className="processData order-0 mt-4 mt-sm-3 mt-md-0 col-12 col-sm-12 col-md-6 col-lg-5  order-sm-0  order-md-1 align-self-center">
          <h6 className="title">PROCESSES</h6>
          {value && !loader && <div className="count">{Utils.convertDigit(value)}</div>}
          {loader && <span className="linearBackground" />}
        </div>
      </div>
    </div>
  );
};

export default ProcessesLineChart;
