import React, { useState } from 'react';
import StatsCard from '../components/dashboard/StatsCard';
import AgencyTable from '../components/dashboard/AgencyTable';
import Pagination from '../components/dashboard/Pagination';

const Dashboard = () => {
  // Mock data
  const stats = [
    { title: 'إجمالي الوكالات', value: 24, icon: 'fas fa-users', color: 'bg-blue-500' },
    { title: 'وكالات نشطة', value: 18, icon: 'fas fa-check-circle', color: 'bg-green-500' },
    { title: 'وكالات متوقفة', value: 6, icon: 'fas fa-exclamation-circle', color: 'bg-red-500' },
  ];

  const mockAgencies = [
    { id: 'AG-001', name: 'وكالة الرياض', memberCount: 12, status: 'active' },
    { id: 'AG-002', name: 'وكالة جدة', memberCount: 8, status: 'active' },
    { id: 'AG-003', name: 'وكالة الدمام', memberCount: 5, status: 'inactive' },
    { id: 'AG-004', name: 'وكالة المدينة', memberCount: 7, status: 'active' },
    { id: 'AG-005', name: 'وكالة تبوك', memberCount: 3, status: 'inactive' },
  ];

  const [agencies, setAgencies] = useState(mockAgencies);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3; // Mock total pages

  const handleManage = (id) => {
    alert(`إدارة الوكالة ${id}`);
  };

  const handleClear = (id) => {
    if (window.confirm(`هل أنت متأكد من مسح بيانات الوكالة ${id}؟`)) {
      // In a real app, you would call an API to clear the agency data
      alert(`تم مسح بيانات الوكالة ${id}`);
    }
  };

  const handleRefill = (id) => {
    // In a real app, you would call an API to refill the agency data
    alert(`تم تعبئة بيانات الوكالة ${id}`);
  };

  const handleAddAgency = () => {
    // In a real app, you would open a modal or navigate to a form
    alert('إضافة وكالة جديدة');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
      <h1 className="text-2xl font-semibold text-gray-900">لوحة التحكم</h1>

      {/* Stats cards */}
      <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat, index) => (
          <StatsCard
            key={index}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            color={stat.color}
          />
        ))}
      </div>

      {/* Agency Table */}
      <div className="mt-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-900">قائمة الوكالات</h2>
          <button
            onClick={handleAddAgency}
            className="px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <i className="fas fa-plus ml-2"></i>إضافة وكالة جديدة
          </button>
        </div>
        
        <AgencyTable
          agencies={agencies}
          onManage={handleManage}
          onClear={handleClear}
          onRefill={handleRefill}
        />
        
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default Dashboard;