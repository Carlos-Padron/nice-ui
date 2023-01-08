import React from "react";
import {
  AlertTriangle,
  CornerUpRight,
  Link,
  Edit3,
  ExternalLink,
  FileText,
  FolderPlus,
  MoreHorizontal,
  Share,
  Trash,
  UploadCloud,
} from "react-feather";
import { Link as RouterLink } from "react-router-dom";

const records = [
  {
    name: "Muse - Madness",
    length: "6m",
    language: "en-GB",
    service: "Automatic",
    uploaded: "07/01/2023",
  },
  {
    name: "Metallica - King Nothing",
    length: "5m",
    language: "en-US",
    service: "Automatic",
    uploaded: "07/01/2023",
  },
];

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
          <RouterLink
            to={"/buy-credits"}
            className="btn btn-sm btn-primary text-white normal-case"
          >
            Buy credits
          </RouterLink>
        </div>
      </div>

      {/* Table */}

      <div className="w-full pt-8">
        <table className="table w-full">
          <thead>
            <tr>
              <th className="bg-blue-300">
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th className="bg-blue-300 text-white">Name</th>
              <th className="bg-blue-300 text-white">Length</th>
              <th className="bg-blue-300 text-white">Language</th>
              <th className="bg-blue-300 text-white">Service</th>
              <th className="bg-blue-300 text-white">Uploaded</th>
              <th className="bg-blue-300 text-white"></th>
            </tr>
          </thead>
          <tbody>
            {records.map((record, index) => {
              return (
                <tr key={index}>
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
                        <div className="font-normal text-sm">{record.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="font-normal text-sm text-gray-400">
                    {record.length}
                  </td>
                  <td className="font-normal text-sm text-gray-400">
                    {record.language}
                  </td>
                  <td className="font-normal text-sm text-gray-400">
                    {record.service}
                  </td>
                  <td className="font-normal text-sm text-gray-400">
                    {record.uploaded}
                  </td>
                  <th>
                    <div className="dropdown dropdown-bottom  dropdown-end btn btn-ghost btn-xs w-full h-10 flex items-center cursor-pointer hover:bg-gray-100">
                      <div tabIndex="0" className="flex flex-col w-full">
                        <MoreHorizontal color="#4b5565" size={15} />
                      </div>
                      <ul
                        tabIndex="0"
                        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-48"
                      >
                        <li>
                          <div className="flex items-center">
                            <ExternalLink
                              size={15}
                              className="mr-3"
                              color="#748ba7"
                            />
                            <p className="text-sm font-normal normal-case text-slate-500">
                              View
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="flex items-center">
                            <Link size={15} className="mr-3" color="#748ba7" />
                            <p className="text-sm font-normal normal-case text-slate-500">
                              Copy link
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="flex items-center">
                            <Edit3 size={15} className="mr-3" color="#748ba7" />
                            <p className="text-sm font-normal normal-case text-slate-500">
                              Rename
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="flex items-center">
                            <CornerUpRight
                              size={15}
                              className="mr-3"
                              color="#748ba7"
                            />
                            <p className="text-sm font-normal normal-case text-slate-500">
                              Move
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="flex items-center">
                            <Trash color="#f86e72" size={15} className="mr-3" />
                            <p className="text-sm font-normal text-red-400 normal-case">
                              Delete
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProjectScreen;
