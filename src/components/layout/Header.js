import React, { useState } from 'react';

const Header = ({ setSidebarOpen }) => {
  return (
    <div className="relative z-10 flex-shrink-0 flex h-16 bg-white shadow">
      <button
        type="button"
        className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 md:hidden"
        onClick={() => setSidebarOpen(true)}
      >
        <span className="sr-only">فتح القائمة الجانبية</span>
        <i className="fas fa-bars"></i>
      </button>
      <div className="flex-1 px-4 flex justify-between">
        <div className="flex-1 flex">
          <div className="w-full flex md:mr-0">
            <div className="relative w-full text-gray-400 focus-within:text-gray-600">
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <i className="fas fa-search"></i>
              </div>
              <input
                id="search-field"
                className="block w-full h-full pr-8 pl-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm"
                placeholder="بحث..."
                type="search"
                name="search"
              />
            </div>
          </div>
        </div>
        <div className="mr-4 flex items-center md:mr-6">
          <button
            type="button"
            className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            <span className="sr-only">عرض الإشعارات</span>
            <i className="fas fa-bell"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;