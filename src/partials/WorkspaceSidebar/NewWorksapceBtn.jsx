import React from "react";
import { Plus } from "react-feather";

const NewWorksapceBtn = () => {
  return (
    <div className="flex items-center">
      <div className="w-1 h-6 invisible"></div>
      <div className="w-10 h-10 bg-gray-100 mask mask-squircle flex justify-center items-center mx-auto cursor-pointer hover:bg-gray-200">
        <Plus color="#9aa4b2" />
      </div>
    </div>
  );
};

export default NewWorksapceBtn;
