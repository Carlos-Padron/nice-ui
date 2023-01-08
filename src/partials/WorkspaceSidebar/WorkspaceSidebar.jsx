import React from "react";
import WorkspaceIcon from "./WorkspaceIcon";
import NewWorksapceBtn from "./NewWorksapceBtn";


const WorkspaceSidebar = () => {
  return (
    <div className="h-screen w-20 bg-white pt-3">
      <WorkspaceIcon active={true} color="bg-green-400" workspaceName="AB" />
      <WorkspaceIcon color="bg-blue-400" workspaceName="MA" />
      <WorkspaceIcon color="bg-red-400" workspaceName="CC" />
      <WorkspaceIcon color="bg-purple-400" workspaceName="TS" />
      <WorkspaceIcon color="bg-pink-400" workspaceName="CRA" />
      <NewWorksapceBtn />
    </div>
  );
};

export default WorkspaceSidebar;
