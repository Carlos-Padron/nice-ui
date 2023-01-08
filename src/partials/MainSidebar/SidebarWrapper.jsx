import React from "react";
import WorkspaceSidebar from "../WorkspaceSidebar/WorkspaceSidebar";
import MainSidebar from "./MainSidebar";

const SidebarWrapper = () => {
  return (
    <div className="h-screen w-72 bg-white  border-x border-b-slate-10 flex">
      <div className="">
        <WorkspaceSidebar />
      </div>
      <div className=" w-full">
        <MainSidebar />
      </div>
    </div>
  );
};

export default SidebarWrapper;
