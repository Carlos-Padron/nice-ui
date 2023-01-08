import React, { useState } from "react";
import { UserPlus } from "react-feather";

const records = [
  {
    name: "Carlos Padron",
    accessLevel: "Owner",
    email: "carlos@example.com",
  },
  {
    name: "Joe Rogers",
    accessLevel: "Owner",
    email: "joe@example.com",
  },
  {
    name: "Frank Dalton",
    accessLevel: "Owner",
    email: "frank@example.com",
  },
];

const SettAndMembersScreen = () => {
  const [activeSection, setActiveSection] = useState(1);
  const [activeMemberSection, setActiveMemberSection] = useState(1);

  const changeActiveSection = (sectionID) => {
    setActiveSection(sectionID);
  };
  const changeActiveMemberSection = (sectionID) => {
    setActiveMemberSection(sectionID);
  };

  return (
    <>
      <div className="action-buttons my-8">
        <div className="btn-group">
          <button
            className={`btn btn-sm bg-white text-blue-500 btn-primary   ${
              activeSection === 1
                ? "active bg-blue-200 hover:bg-blue-100"
                : "hover:bg-blue-100"
            }`}
            onClick={() => changeActiveSection(1)}
          >
            Members
          </button>
          <button
            className={`btn btn-sm bg-white text-blue-500 btn-primary ${
              activeSection === 2
                ? "active bg-blue-200 hover:bg-blue-100"
                : "hover:bg-blue-100"
            }`}
            onClick={() => changeActiveSection(2)}
          >
            Workspace
          </button>
          <button
            className={`btn btn-sm bg-white text-blue-500 btn-primary ${
              activeSection === 3
                ? "active bg-blue-200 hover:bg-blue-100"
                : "hover:bg-blue-100"
            }`}
            onClick={() => changeActiveSection(3)}
          >
            Billing
          </button>
        </div>
      </div>
      {/*  */}

      <div className="header-options my-8">
        <div className="title">
          <h2 className="text-xl font-bold">Members</h2>
          <h2 className="text-md font-normal text-slate-400">
            Add, remove, or change permission
          </h2>
        </div>
        <div className="actions mt-6 flex flex-nowrap justify-between items-center">
          <div className="flex flex-nowrap justify-between items-center">
            <label
              htmlFor="invite-modal"
              className="btn btn-primary btn-sm gap-2 mr-3 text-white normal-case"
            >
              <UserPlus color="#fff" size={15} />
              Add member
            </label>
            <input
              type="text"
              placeholder="Search by email or name"
              class="input input-bordered input-sm input-primary w-full max-w-xs"
            />
          </div>
          <div className="flex flex-nowrap justify-between items-center">
            <div className="btn-group">
              <button
                className={`btn btn-sm bg-white text-blue-500 btn-primary   ${
                  activeMemberSection === 1
                    ? "active bg-blue-200 hover:bg-blue-100"
                    : "hover:bg-blue-100"
                }`}
                onClick={() => changeActiveMemberSection(1)}
              >
                All
              </button>
              <button
                className={`btn btn-sm bg-white text-blue-500 btn-primary   ${
                  activeMemberSection === 2
                    ? "active bg-blue-200 hover:bg-blue-100"
                    : "hover:bg-blue-100"
                }`}
                onClick={() => changeActiveMemberSection(2)}
              >
                Admin
              </button>
              <button
                className={`btn btn-sm bg-white text-blue-500 btn-primary   ${
                  activeMemberSection === 3
                    ? "active bg-blue-200 hover:bg-blue-100"
                    : "hover:bg-blue-100"
                }`}
                onClick={() => changeActiveMemberSection(3)}
              >
                Members
              </button>
              <button
                className={`btn btn-sm bg-white text-blue-500 btn-primary   ${
                  activeMemberSection === 4
                    ? "active bg-blue-200 hover:bg-blue-100"
                    : "hover:bg-blue-100"
                }`}
                onClick={() => changeActiveMemberSection(4)}
              >
                Guests
              </button>
            </div>
          </div>
        </div>
      </div>
      {/*  */}

      <div className="w-full pt-8">
        <table className="table w-full">
          <thead>
            <tr>
              <th className="bg-blue-300 text-white">Name</th>
              <th className="bg-blue-300 text-white w-1/4">Access Level</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record, index) => {
              return (
                <tr key={index}>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div>
                        <div className="font-normal text-sm">{record.name}</div>
                        <div className="font-normal text-xs text-gray-400">
                          {record.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="font-normal text-sm text-gray-400">
                    {record.accessLevel}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>

    /*  */
  );
};

export default SettAndMembersScreen;
