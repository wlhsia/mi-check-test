import React, { useState } from 'react';

import Table from './item/Table';
import Modal from './item/Modal';


const tabs = [
    {
        id: 1,
        label: '電儀',
        content: <Table data={[
            { id: 1, name: 'John Doe', age: 28, email: 'johndoe@example.com' },
            { id: 2, name: 'Jane Smith', age: 32, email: 'janesmith@example.com' },
        ]} />,
    },
    {
        id: 2,
        label: '轉機',
        content: <div>Content for Tab 2</div>,
    },
    {
        id: 3,
        label: '靜態',
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
                            className={`py-2 px-4 text-md font-normal ${activeTab === tab.id
                                ? 'text-gray-600 border-b-2 border-gray-500'
                                : 'text-gray-600 hover:border-b-2 border-gray-300'
                                }`}
                            onClick={() => handleTabClick(tab.id)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="mt-4">
                    <button
                        className="px-4 py-2 bg-blue-500 text-white rounded-md"
                        onClick={openModal}
                    >
                        Open Modal
                    </button>
                    {tabs.map((tab) => (
                        <div
                            key={tab.id}
                            className={`${activeTab === tab.id ? 'block' : 'hidden'}`}
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