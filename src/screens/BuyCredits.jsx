import React, { useState } from "react";
import { ArrowLeft } from "react-feather";

import { useNavigate } from "react-router-dom";

const BuyCredits = () => {
  const [hours, setHours] = useState(1);

  const navigate = useNavigate();

  const changeHours = (e) => {
    setHours(parseInt(e.target.value));
  };

  const CalculatePrice = () => {
    let message = `${hours} `;

    message += hours === 1 ? "hour " : "hours ";
    if (hours <= 24) {
      message += `for $${hours * 12}`;
    } else if (hours <= 49) {
      message += `for $${hours * 11}`;
    } else if (hours <= 74) {
      message += `for $${(hours * 9.6).toFixed(1)}`;
    } else {
      message = "Custom pricing";
    }
    return message;
  };

  return (
    <div className="w-full h-screen bg-gray-50 p-8">
      <div>
        <button
          className="btn bg-white btn-sm gap-2 text-slate-600 normal-case hover:bg-slate-50"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft color="#4b5565" size={20} />
        </button>
      </div>
      <div className="my-8  mx-28">
        <div className="title">
          <h1 className="text-xl font-bold">Buy hours</h1>
          <h3 className="text-md font-medium text-slate-400">
            Add credits to your account
          </h3>
        </div>
        <div className="content mt-10 flex justify-between flex-nowrap">
          <div className="w-6/12">
            <h3 className="text-sm font-medium text-slate-500 ">
              How much do you need?
            </h3>
            <div className="card w-full bg-base-100 shadow-md">
              <div className="card-body">
                <h2 className="card-title">Use slider to adjust</h2>
                <div className="w-full flex flex-nowrap justify-between text-xs px-2">
                  <span>1</span>
                  <span>25</span>
                  <span>50</span>
                  <span>75+</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="75"
                  value={hours}
                  className="range range-primary"
                  step="1"
                  onChange={changeHours}
                />
                <div className="w-full flex flex-nowrap justify-between text-xs px-2">
                  <span className="invisible">|</span>
                  <span className="text-xs font-medium text-slate-500">
                    $12/hour
                  </span>
                  <span className="invisible">|</span>
                  <span className="text-xs font-medium text-slate-500 flex  flex-nowrap flex-col justify-center items-center">
                    $11/hour
                    <div className="badge badge-success text-white text-xs">
                      9% OFF
                    </div>
                  </span>
                  <span className="invisible">|</span>
                  <span className="text-xs font-medium text-slate-500 flex flex-nowrap flex-col justify-center items-center">
                    $9.6/hour
                    <div className="badge badge-success text-white text-xs">
                      20% OFF
                    </div>
                  </span>
                  <span className="invisible">|</span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-5/12">
            <h3 className="text-sm font-medium text-slate-500 ">Summary</h3>
            <div className="card w-full bg-base-100 shadow-md">
              <div className="card-body">
                <h2 className="text-slate-500 text-xl">Total</h2>
                <h2 className="card-title text-2xl">{<CalculatePrice />}</h2>
                <button className="btn btn-block btn-primary text-white normal-case">
                  {hours < 75 ? "Purchase" : "Custom pricing"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyCredits;
