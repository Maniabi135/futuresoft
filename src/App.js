import React from "react";
import TilesCard from "./Dashboard/TilesCard";
import MemoryUsage from "./Dashboard/MemoryUsage";
import ProcessesLineChart from "./Dashboard/ProcessesLineChart";
import LatencyBarChart from "./Dashboard/LatencyBarChart";

function App() {
  return (
    <div className="container-fluid">
      <TilesCard />
      <div className="row gy-4 mt-4">
        <div className="col-12 col-sm-12 col-md-7">
          <MemoryUsage />
        </div>
        <div className="col-12 col-sm-12 col-md-5">
          <div className="row gy-4">
            <div className="col-12 col-sm-6 col-md-12">
              <ProcessesLineChart />
            </div>
            <div className="col-12 col-sm-6 col-md-12">
              <LatencyBarChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
