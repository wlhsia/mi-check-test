import React, { useState, useEffect } from "react";
import Drawer from "./project/Drawer";

const ProjectPage = () => {
  // Drawer
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const toggleDrawerOpen = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  // Tab
  const [tabId, setTabId] = useState(1);

  return (
    <div className="fixed h-screen w-screen bg-gray-300 ">
      <Drawer isOpen={isDrawerOpen} toggleOpen={toggleDrawerOpen} />
      <main
        className={`relative h-full duration-300 ${
          isDrawerOpen ? "ml-72 px-0" : "px-16"
        }`}
      >
        {isDrawerOpen ? null : (
          <button
            className="absolute left-2 top-2 rounded border border-gray-600 p-2 hover:bg-gray-200"
            onClick={toggleDrawerOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        )}
        <div className="flex border-b-2 border-gray-200">
          <button
            className={`px-8 py-2 text-sm font-normal text-gray-600 ${
              tabId === 1 ? "border-b-2 border-gray-500 bg-white" : null
            }`}
            onClick={() => {
              setTabId(1);
            }}
          >
            查核案件基本資料
          </button>
          <button
            className={`px-8 py-2 text-sm font-normal text-gray-600 ${
              tabId === 2 ? "border-b-2 border-gray-500 bg-white" : null
            }`}
            onClick={() => {
              setTabId(2);
            }}
          >
            查核項目排訂
          </button>
          <button
            className={`px-8 py-2 text-sm font-normal text-gray-600 ${
              tabId === 3 ? "border-b-2 border-gray-500 bg-white" : null
            }`}
            onClick={() => {
              setTabId(3);
            }}
          >
            查核&改善
          </button>
        </div>
        <div className="h-full p-10">
          {tabId === 1 ? (
            <div className="h-full rounded-md bg-white">Tab1</div>
          ) : null}
          {tabId === 2 ? <h1>Tab2</h1> : null}
          {tabId === 3 ? <h1>Tab3</h1> : null}
        </div>
      </main>
    </div>
  );
};

export default ProjectPage;
