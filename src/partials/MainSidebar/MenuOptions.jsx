import React from "react";
import { Codesandbox, Settings, BookOpen, BarChart2 } from "react-feather";
import { Link, useNavigate } from "react-router-dom";
const MenuOptions = () => {
  const navigate = useNavigate();


  return (
    <>
      <Link
        to={"/buy-credits"}
        className="w-full h-10  flex items-center cursor-pointer hover:bg-gray-100"
      >
        <div className="mx-4 flex items-center">
          <Codesandbox color="#f86e72" size={15} className="mr-3" />
          <p className="text-sm">Credits</p>
        </div>
      </Link>
      <Link className="w-full h-10  flex items-center cursor-pointer hover:bg-gray-100">
        <div className="mx-4 flex items-center">
          <BookOpen color="#f3c715" size={15} className="mr-3" />
          <p className="text-sm">Vocabulary</p>
        </div>
      </Link>
      <Link className="w-full h-10  flex items-center cursor-pointer hover:bg-gray-100">
        <div className="mx-4 flex items-center">
          <BarChart2 color="#4ade80" size={15} className="mr-3" />
          <p className="text-sm">Analytics</p>
        </div>
      </Link>
      <label
        onClick={() => navigate("/members")}
        htmlFor="my-drawer-2"
        className="w-full h-10 flex items-center cursor-pointer hover:bg-gray-100"
      >
        <div className="mx-4 flex items-center">
          <Settings color="#444ce7" size={15} className="mr-3" />
          <p className="text-sm">Settings & members</p>
        </div>
      </label>
    </>
  );
};

export default MenuOptions;
