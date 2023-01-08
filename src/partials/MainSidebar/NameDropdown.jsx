import React from "react";
import { ChevronDown } from "react-feather";

const NameDropdown = () => {
  return (
    <div className="dropdown cursor-pointer w-full px-4 pb-4">
      <div tabIndex="0" className="flex flex-col">
        <div className="username flex justify-between items-center">
          <p className="uppercase text-md font-medium text-danger">
            Carlos Padron
          </p>
          <ChevronDown size={20} />
        </div>
        <div className="workspace-name flex justify-between items-center">
          <p className="text-sm font-medium text-primary">Workspace name </p>
        </div>
      </div>
      <ul
        tabIndex="0"
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-48"
      >
        <li>
          <p className="text-sm">Settings</p>
        </li>
        <li>
          <p className="text-sm">Help Desk</p>
        </li>
        <li>
          <p className="text-sm">Developer</p>
        </li>
        <li>
          <p className="text-red-500 text-sm">Log Out</p>
        </li>
      </ul>
    </div>
  );
};

export default NameDropdown;
