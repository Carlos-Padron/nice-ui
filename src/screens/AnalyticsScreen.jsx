import React from "react";
import { Clock, Codesandbox, File, User } from "react-feather";

const AnalyticsScreen = () => {
  return (
    <div className="header my-8  ">
      <h1 className="text-xl font-bold w-full sm:w-6/12">Analytics</h1>
      <h3 className="text-sm font-normal mt-1 text-slate-400 w-full sm:w-6/12">
        Measure the performace of your workspace
      </h3>

      <div className="w-full h-32 overflow-x-auto mt-2">
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-figure text-primary">
              <Codesandbox color="#f86e72" size={25} />
            </div>
            <div className="stat-title text-slate-900">Credits Left</div>
            <div className="stat-value text-red-400">48min</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <Clock color="#60a5fa" size={25} />
            </div>
            <div className="stat-title text-slate-900">Time uploaded</div>
            <div className="stat-value text-blue-400">8h 17m 13s</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <File color="#818cf8" size={25} />
            </div>
            <div className="stat-title text-slate-900">Files uploaded</div>
            <div className="stat-value text-indigo-400">28</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <User color="#4ade80" size={25} />
            </div>
            <div className="stat-title text-slate-900">Active members</div>
            <div className="stat-value text-green-400">3</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsScreen;
