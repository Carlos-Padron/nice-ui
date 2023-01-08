import React from "react";

const SearchModal = () => {
  return (
    <>
      <input type="checkbox" id="search-modal" className="modal-toggle" />
      <label htmlFor="search-modal" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h3 className="text-xl font-bold">
            Search for any file or folder name
          </h3>
            <input
              type="text"
              placeholder="Awesome file"
              className="input input-primary input-bordered w-full input-sm mt-3"
            />
        </label>
      </label>
    </>
  );
};

export default SearchModal;
