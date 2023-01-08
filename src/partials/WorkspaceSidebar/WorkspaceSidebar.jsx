import React from "react";
import WorkspaceIcon from "./WorkspaceIcon";
import NewWorksapceBtn from "./NewWorksapceBtn";


const WorkspaceSidebar = () => {
  return (
    <div className="h-screen w-20 bg-white pt-3">
      <WorkspaceIcon active={true} color="bg-green" workspaceName="AB" />
      <WorkspaceIcon color="bg-blue" workspaceName="MA" />
      <WorkspaceIcon color="bg-red" workspaceName="CC" />
      <WorkspaceIcon color="bg-purple" workspaceName="TS" />
      <WorkspaceIcon color="bg-pink" workspaceName="CRA" />
      <NewWorksapceBtn />
    </div>
  );
};

export default WorkspaceSidebar;
