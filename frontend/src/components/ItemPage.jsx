import React, { useState, useEffect } from "react";

import Table from "./item/Table";
import Modal from "./item/Modal";

const tabs = [
  {
    id: 1,
    label: "電儀",
    type: "E",
  },
  {
    id: 2,
    label: "轉機",
    type: "R",
  },
  {
    id: 3,
    label: "靜態",
    type: "S",
  },
];

const ItemPage = () => {
  // Data
  const [item, setItem] = useState({
    itemType: "E",
  });
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems();
  }, [item.itemType]);

  // API
  const createItem = () => {
    fetch("/api/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const updateItem = () => {
    fetch(`/api/items/${item.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const deleteItem = (itemId) => {
    fetch(`/api/items/${itemId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const getItems = () => {
    fetch(`/api/items?itemType=${item.itemType}`)
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // Tab
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const handleTabClick = (tabId) => {
    // setItemType(tabs.find((tab) => tab.id == tabId).type);
    setItem((prev) => ({
      ...prev,
      itemType: tabs.find((tab) => tab.id == tabId).type,
    }));
    setActiveTab(tabId);
  };

  // Modal
  const [isNew, setIsNew] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddClick = () => {
    setIsNew(true);
    setItem((prev) => ({ itemType: prev.itemType }));
    setIsModalOpen(true);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        isNew={isNew}
        toggleModal={toggleModal}
        item={item}
        setItem={setItem}
        createItem={createItem}
        updateItem={updateItem}
        getItems={getItems}
      />
      <div className="container mx-auto py-4">
        <div className="flex border-b-2 border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`text-md px-8 py-2 font-normal ${
                activeTab === tab.id
                  ? "border-b-2 border-gray-500 text-gray-600"
                  : "border-gray-300 text-gray-600 hover:border-b-2"
              }`}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="mt-4">
          <div className="flex justify-end py-2">
            <button
              className="flex items-center space-x-1 rounded-md bg-gray-700 px-4 py-2 text-white hover:bg-gray-500"
              onClick={handleAddClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="inline h-5 w-5"
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
          <Table
            toggleModal={toggleModal}
            items={items}
            setItem={setItem}
            deleteItem={deleteItem}
            getItems={getItems}
            setIsNew={setIsNew}
          />
        </div>
      </div>
    </>
  );
};
export default ItemPage;
