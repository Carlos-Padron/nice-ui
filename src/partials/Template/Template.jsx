import React from "react";
import InviteModal from "../../components/InvateModal";
import SearchModal from "../../components/SearchModal";
import MainSidebar from "../MainSidebar/MainSidebar";
import WorkspaceSidebar from "../WorkspaceSidebar/WorkspaceSidebar";

const Template = ({ children }) => {
  return (
    <div className="flex bg-slate-50">
      <WorkspaceSidebar />
      <MainSidebar />

      <div className="mx-8 w-full h-100 bg-gray-50">
        {React.cloneElement(children)}
      </div>

      <SearchModal />
      <InviteModal />
    </div>
  );
};

export default Template;
