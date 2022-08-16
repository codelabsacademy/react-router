import React, { useState } from "react";
import Sidebar from "./Sidebar";

export default function Nav() {
  const [sideBarActive, setSideBarActive] = useState(false);

  const toggleSidebar = () => {
    setSideBarActive(!sideBarActive);
  };

  return (
    <section className="z-20">
      <nav className="flex justify-between p-2 items-center dark:bg-indigo-900 bg-primary text-white">
        <div className="flex gap-2">
          <div
            onClick={toggleSidebar}
            className="hover:bg-purple-400 dark:hover:bg-indigo-700 p-2 rounded-[4px] cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
          <div className="hover:bg-purple-400 dark:hover:bg-indigo-700 p-2 rounded-[4px] cursor-pointer uppercase font-bold">
            Keeper
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <div className="hover:bg-purple-400 dark:hover:bg-indigo-700 p-2 rounded-[4px] cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-plus-square"
              viewBox="0 0 16 16"
            >
              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
          </div>
          <div className="hover:bg-purple-400 dark:hover:bg-indigo-700 p-2 rounded-[4px] cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-person"
              viewBox="0 0 16 16"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
            </svg>
          </div>
          <div className="hover:bg-purple-400 dark:hover:bg-indigo-700 p-2 rounded-[4px] cursor-pointer">
          </div>
        </div>
      </nav>
      <Sidebar show={sideBarActive} toggleSidebar={toggleSidebar} />
    </section>
  );
}
