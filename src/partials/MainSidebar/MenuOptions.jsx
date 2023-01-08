import React from "react";
import {
  Codesandbox,
  Search,
  Settings,
  UserPlus,
  MoreHorizontal,
  BookOpen,
  BarChart2,
} from "react-feather";
import { Link } from "react-router-dom";
const MenuOptions = () => {
  return (
    <>
      <label
        htmlFor="search-modal"
        className="w-full h-10  flex items-center cursor-pointer hover:bg-gray-100"
      >
        <div className="mx-4 flex items-center">
          <Search color="#269EF7" size={15} className="mr-3" />
          <p className="text-sm">Search</p>
        </div>
      </label>
      <Link to={'/buy-credits'} className="w-full h-10  flex items-center cursor-pointer hover:bg-gray-100">
        <div className="mx-4 flex items-center">
          <Codesandbox color="#f86e72" size={15} className="mr-3" />
          <p className="text-sm">Credits</p>
        </div>
      </Link>
      <label
        htmlFor="invite-modal"
        className="w-full h-10  flex items-center cursor-pointer hover:bg-gray-100"
      >
        <div className="mx-4 flex items-center">
          <UserPlus color="#f79009" size={15} className="mr-3" />
          <p className="text-sm">Invite</p>
        </div>
      </label>
      <div className="w-full h-10 flex items-center cursor-pointer hover:bg-gray-100">
        <div className="mx-4 flex items-center">
          <Settings color="#444ce7" size={15} className="mr-3" />
          <p className="text-sm">Settings & members</p>
        </div>
      </div>
      <div className="dropdown dropdown-bottom w-full h-10 flex items-center cursor-pointer hover:bg-gray-100">
        <div tabIndex="0" className="flex flex-col w-full">
          <div className="username flex justify-between items-center">
            <div className="mx-4 flex items-center">
              <MoreHorizontal color="#4b5565" size={15} className="mr-3" />
              <p className="text-sm">More</p>
            </div>
          </div>
        </div>
        <ul
          tabIndex="0"
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-48"
        >
          <li>
            <div className="flex items-center">
              <BookOpen color="#f3c715" size={15} className="mr-3" />
              <p className="text-sm">Vocabulary</p>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <BarChart2 color="#4ade80" size={15} className="mr-3" />
              <p className="text-sm">Analytics</p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MenuOptions;
