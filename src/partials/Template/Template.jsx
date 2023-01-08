import React from "react";
import InviteModal from "../../components/InvateModal";
import SearchModal from "../../components/SearchModal";
import Header from "../Header/Header";
import SidebarWrapper from "../MainSidebar/SidebarWrapper";

const Template = ({ children }) => {
  return (
    <div className="flex bg-slate-50">
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Header />
          <div className="px-8 w-full h-full bg-gray-50">
            {React.cloneElement(children)}
          </div>
          <SearchModal />
          <InviteModal />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

          <SidebarWrapper />
        </div>
      </div>
    </div>
  );
};

export default Template;
