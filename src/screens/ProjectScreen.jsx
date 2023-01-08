import React from "react";
import {
  AlertTriangle,
  FileText,
  FolderPlus,
  MoreHorizontal,
  Share,
  UploadCloud,
} from "react-feather";

const ProjectScreen = () => {
  return (
    <>
      <div className="header my-8 flex justify-between flex-nowrap">
        <h1 className="text-xl font-bold">My first project</h1>
        <div className="actions flex justify-between flex-nowrap">
          <button className="btn btn-primary btn-sm gap-2 mr-3 text-white normal-case">
            <UploadCloud color="#fff" size={15} />
            New file
          </button>
          <button className="btn bg-white btn-sm gap-2 mr-3 text-slate-600 normal-case hover:bg-slate-50">
            <FolderPlus color="#4b5565" size={15} />
            New folder
          </button>
          <button className="btn bg-white btn-sm gap-2 mr-3 text-slate-600 normal-case hover:bg-slate-50">
            <Share color="#4b5565" size={15} />
            Share
          </button>
          <button className="btn bg-white btn-sm gap-2 text-slate-600 normal-case hover:bg-slate-50">
            <MoreHorizontal color="#4b5565" size={15} />
          </button>
        </div>
      </div>

      {/* Alert */}

      <div className="alert bg-white shadow-md">
        <div>
          <div className="w-12 h-12 flex justify-center items-center bg-yellow-100 mask mask-circle">
            <AlertTriangle color="#f79009" size={25} />
          </div>
          <div className="content">
            <h3 className="font-bold">Buy more credits</h3>
            <div className="text-xs">
              To continue uploading files & access locked transcripts
            </div>
          </div>
        </div>
        <div className="flex-none">
          <button className="btn btn-sm btn-primary text-white normal-case">
            Buy credits
          </button>
        </div>
      </div>

      {/* Table */}

      <div className="overflow-x-auto w-full pt-8">
        <table className="table w-full">
          <thead>
            <tr>
              <th className="bg-blue-300">
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th className="bg-blue-300 text-white">Name</th>
              <th className="bg-blue-300 text-white">Lenght</th>
              <th className="bg-blue-300 text-white">Language</th>
              <th className="bg-blue-300 text-white">Service</th>
              <th className="bg-blue-300 text-white">Uploaded</th>
              <th className="bg-blue-300 text-white"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 flex justify-center items-center bg-blue-100 mask mask-circle">
                    <FileText color="#0064df" size={20} />
                  </div>
                  <div>
                    <div className="font-normal text-sm">Muse - Madness</div>
                  </div>
                </div>
              </td>
              <td className="font-normal text-sm text-gray-400">6m</td>
              <td className="font-normal text-sm text-gray-400">en-GB</td>
              <td className="font-normal text-sm text-gray-400">Automatic</td>
              <td className="font-normal text-sm text-gray-400">07/01/2023</td>
              <th>
                <button className="btn btn-ghost btn-xs">
                  <MoreHorizontal color="#4b5565" size={15} />
                </button>
              </th>
            </tr>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 flex justify-center items-center bg-blue-100 mask mask-circle">
                    <FileText color="#0064df" size={20} />
                  </div>
                  <div>
                    <div className="font-normal text-sm">
                      Metallica - King Nothing
                    </div>
                  </div>
                </div>
              </td>
              <td className="font-normal text-sm text-gray-400">5m</td>
              <td className="font-normal text-sm text-gray-400">en-US</td>
              <td className="font-normal text-sm text-gray-400">Automatic</td>
              <td className="font-normal text-sm text-gray-400">07/01/2023</td>
              <th>
                <button className="btn btn-ghost btn-xs">
                  <MoreHorizontal color="#4b5565" size={15} />
                </button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProjectScreen;
