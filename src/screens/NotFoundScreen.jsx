import React from "react";

const NotFoundScreen = () => {
  return (
    <div className="w-screen h-screen bg-slate-100 flex justify-center items-center">
      <div className="card w-96 bg-white  drop-shadow-md">
        <div className="card-body">
          <h2 className="card-title text-6xl text-slate-600 flex justify-center">404</h2>
          <h2 className="card-title text-4xl text-slate-600 flex justify-center"> Page Not Found 😥</h2>
          
        </div>
      </div>
    </div>
  );
};

export default NotFoundScreen;
