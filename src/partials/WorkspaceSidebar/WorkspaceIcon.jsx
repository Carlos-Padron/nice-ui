import React from "react";

import PropTypes from "prop-types";

const WorkspaceIcon = ({ active = false, color, workspaceName }) => {
  return (
    <div className="flex items-center my-4">
      <div
        className={`w-1 h-7 bg-primary rounded-tr-md rounded-br-md   ${
          active  ? "block" : "invisible"
        }`}
      ></div>
      <div
        className={`w-10 h-10 ${color} mask mask-squircle flex justify-center items-center mx-auto cursor-pointer hover:drop-shadow-lg`}
      >
        <p className="prose text-white font-normal font-sans text-sm">
          {workspaceName}
        </p>
      </div>
    </div>
  );
};

WorkspaceIcon.propTypes = {
  active: PropTypes.bool,
  color: PropTypes.string.isRequired,
  workspaceName: PropTypes.string.isRequired,
};

export default WorkspaceIcon;
