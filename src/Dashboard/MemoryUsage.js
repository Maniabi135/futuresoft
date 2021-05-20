import React, { useState, useEffect } from "react";
import { makeApi, API_URLS } from "../ApiUtils";
import Chart from "react-apexcharts";

const barColumnChartData = {
  series: [
    {
      name: "TOTAL",
      data: []
    },
    {
      name: "USED",
      data: []
    },
    {
      name: "FREE",
      data: []
    }
  ],
  options: {
    chart: {
      type: "bar",
      height: 350
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded"
      }
    },
    dataLabels: {
      enabled: false
    },
    grid: { borderColor: "#eee", strokeDashArray: 7 },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"]
    },
    colors: ["#f48e13", "#f6719d", "#03A9F4"],
    xaxis: {
      categories: ["Feb", "May", "Aug"]
    },
    yaxis: {
      title: {
        text: "$ (thousands)"
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands";
        }
      }
    },
    legend: {
      position: "top",
      horizontalAlign: "left"
    }
  }
};

const totalData = [300, 120, 60, 300, 50];
const freeData = [200, 40, 40, 240, 10];
const usedData = [100, 80, 20, 60, 40];
const months = ["Jan", "Feb", "Mar", "Apr", "May"];

const MemoryUsage = () => {
  const [loader, setLoader] = useState(true);
  const [chartData, setChartData] = useState(barColumnChartData);

  const getProcessesData = async () => {
    try {
      const config = {
        url: API_URLS.processesUrl
      };
      let res = await makeApi(config);
      const tempData = { ...chartData };
      tempData.series[0].data = res?.data?.length
        ? res.data[0].total
        : totalData;
      tempData.series[1].data = res?.data?.length ? res.data[0].used : freeData;
      tempData.series[2].data = res?.data?.length ? res.data[0].free : usedData;
      tempData.options.xaxis.categories = res?.data?.length
        ? res.data[0].months
        : months;
      setChartData({ ...chartData, ...tempData });
      setLoader(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getProcessesData();
  }, []);

  return (
    <div className="memoryUsageSection">
      <div className="header mb-4 d-flex align-items-center justify-content-between">
        <span className="title">Memory Usage</span>
        <div className="update d-flex align-items-center">
          <i className="material-icons pr-1">refresh</i>
          <span className="btnName">Update</span>
        </div>
      </div>
      <div className="chartSection">
        {!loader && (
          <Chart
            options={chartData.options}
            series={chartData.series}
            type="bar"
            height={350}
          />
        )}
        {loader && <div className="chartLoader">Loading...</div>}
      </div>
    </div>
  );
};

export default MemoryUsage;
