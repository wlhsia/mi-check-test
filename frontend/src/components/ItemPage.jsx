import React, { useState } from "react";

import Table from "./item/Table";
import Modal from "./item/Modal";

const tabs = [
  {
    id: 1,
    label: "電儀",
    content: (
      <Table
        data={[
          { id: 1, itemNo: "John Doe", item: 28, email: "johndoe@example.com" },
        ]}
      />
    ),
  },
  {
    id: 2,
    label: "轉機",
    content: <div>Content for Tab 2</div>,
  },
  {
    id: 3,
    label: "靜態",
    content: <div>Content for Tab 3</div>,
  },
];

const ItemPage = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
      <div className="container mx-auto py-4">
        {/* Tab Headers */}
        <div className="flex border-b-2 border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`py-2 px-8 text-md font-normal ${
                activeTab === tab.id
                  ? "text-gray-600 border-b-2 border-gray-500"
                  : "text-gray-600 hover:border-b-2 border-gray-300"
              }`}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-4">
          <div className="flex justify-end py-2">
            <button
              className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-500 flex items-center space-x-1"
              onClick={openModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 inline"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <p className="inline">新增查核項目</p>
            </button>
          </div>

          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`${activeTab === tab.id ? "block" : "hidden"}`}
            >
              {tab.content}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default ItemPage;
