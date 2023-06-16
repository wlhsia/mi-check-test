import React from 'react';

const Drawer = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-y-0 right-0 w-64 bg-white shadow-lg transform transition duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex items-center justify-between p-4">
        <h1 className="text-xl font-bold">App Drawer</h1>
        <button
          className="text-gray-500 hover:text-gray-700 focus:outline-none"
          onClick={onClose}
        >
          <svg
            className="w-6 h-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>
      <nav className="p-4">
        {/* 在此放置抽屜的連結或內容 */}
      </nav>
    </div>
  );
};

export default Drawer;