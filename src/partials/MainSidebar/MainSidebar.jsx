import React from "react";
import { Folder } from "react-feather";
import { Link } from "react-router-dom";
import MenuOptions from "./MenuOptions";

import NameDropdown from "./NameDropdown";

const MainSidebar = () => {
  return (
    <div className="h-screen w-64 bg-white pt-4 border-x border-b-slate-10 block">
      <NameDropdown />
      {/* Regular menu option */}
      <MenuOptions />

      <div className="h-5 mt-6 mb-2 mx-4 flex items-center">
          <p className="text-xs text-slate-500 font-semibold">Workspace</p>
      </div>
      <Link to={'/'} className="w-full h-10  flex items-center cursor-pointer hover:bg-gray-100">
        <div className="mx-4 flex items-center">
          <Folder color="#269EF7" size={15} className="mr-3" />
          <p className="text-sm">My first project</p>
        </div>
      </Link>

    </div>
  );
};

export default MainSidebar;
