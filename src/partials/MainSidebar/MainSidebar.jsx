import React from "react";
import { Folder } from "react-feather";
import { useNavigate } from "react-router-dom";
import MenuOptions from "./MenuOptions";

const MainSidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen bg-white  border-x border-b-slate-10 block">
      {" "}
      {/* w-64 */}
      {/* <NameDropdown /> */}
      {/* Regular menu option */}
      <label className="btn btn-ghost normal-case text-xl w-full my-2 text-primary">
        daisyUI
      </label>
      <MenuOptions />
      <div className="h-5 mt-6 mb-2 mx-4 flex items-center">
        <p className="text-xs text-slate-500 font-semibold">Workspace</p>
      </div>
      <label
        onClick={() => navigate("/")}
        htmlFor="my-drawer-2"
        className="w-full h-10  flex items-center cursor-pointer hover:bg-gray-100"
      >
        <div className="mx-4 flex items-center">
          <Folder color="#269EF7" size={15} className="mr-3" />
          <p className="text-sm">My first project</p>
        </div>
      </label>
    </div>
  );
};

export default MainSidebar;
