import React from "react";
import { Menu, Search, UserPlus } from "react-feather";
import NameDropdown from "../MainSidebar/NameDropdown";

const Header = () => {
  return (
    <div className="navbar sticky top-0 bg-white border-b border-b-slate-10 ">
      <div className="flex justify-between items-center w-full ">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-square btn-ghost lg:invisible"
        >
          <Menu color="#0064df" />
        </label>
        <div className="flex items-center">
          <label
            htmlFor="search-modal"
            title="Search"
            className="w-10 h-10 mx-4 flex justify-center items-center bg-blue-100 mask mask-circle  cursor-pointer hover:bg-blue-200"
          >
            <Search color="#269EF7" size={18} />
          </label>
          <label
            htmlFor="invite-modal"
            title="Invite"
            className="w-10 h-10 flex justify-center items-center bg-orange-100 mask mask-circle  cursor-pointer hover:bg-orange-200"
          >
            <UserPlus color="#f79009" size={18} />
          </label>
          <NameDropdown />
        </div>
      </div>
    </div>
  );
};

export default Header;
