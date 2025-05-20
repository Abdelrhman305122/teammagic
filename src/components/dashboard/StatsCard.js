import React from 'react';

const StatsCard = ({ title, value, icon, color }) => {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <div className="flex items-center">
          <div className={`flex-shrink-0 ${color} rounded-md p-3`}>
            <i className={`${icon} text-white`}></i>
          </div>
          <div className="mr-5">
            <h3 className="text-lg font-medium text-gray-900">{title}</h3>
            <div className="mt-1 text-3xl font-semibold text-gray-900">{value}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;