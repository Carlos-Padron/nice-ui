import React from "react";

const InviteModal = () => {
  return (
    <>
      <input type="checkbox" id="invite-modal" className="modal-toggle" />
      <label htmlFor="invite-modal" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <label
            htmlFor="invite-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-xl font-bold">Add members</h3>
          <h4 className="text-sm font-medium text-slate-400">
            Invite to your workspace
          </h4>
          <h4 className="text-sm font-medium text-slate-500 mt-4">
            Enter email address and select a role
          </h4>
          <div className="flex justify-between">
            <input
              type="text"
              placeholder="Type multiple emails separated by comma"
              className="input input-primary input-bordered w-8/12 input-sm mt-1"
            />
            <select className="select select-primary input-bordered w-3/12 select-sm mt-1">
              <option>Admin</option>
              <option>Member</option>
            </select>
          </div>
          <div className="flex justify-end mt-3">
            <button className="btn btn-sm text-white btn-primary normal-case">
              Invite
            </button>
          </div>
        </label>
      </label>
    </>
  );
};

export default InviteModal;
