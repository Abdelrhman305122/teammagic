import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  
  const navigation = [
    { name: 'الرئيسية', href: '/dashboard', icon: 'fas fa-home' },
    { name: 'الوكالات', href: '/agencies', icon: 'fas fa-users' },
    { name: 'التقارير', href: '/reports', icon: 'fas fa-chart-bar' },
    { name: 'الإعدادات', href: '/settings', icon: 'fas fa-cog' },
  ];

  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64">
        <div className="flex flex-col flex-grow bg-primary-500 pt-5 pb-4 overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-4">
            <h1 className="text-xl font-bold text-white">لوحة إدارة الوكالات</h1>
          </div>
          <div className="mt-5 flex-grow flex flex-col">
            <nav className="flex-1 px-2 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`${
                    location.pathname === item.href
                      ? 'bg-primary-700 text-white'
                      : 'text-white hover:bg-primary-600'
                  } group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
                >
                  <i className={`${item.icon} ml-3`}></i>
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex-shrink-0 flex border-t border-primary-700 p-4">
            <Link to="/profile" className="flex-shrink-0 group block">
              <div className="flex items-center">
                <div>
                  <img
                    className="inline-block h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="mr-3">
                  <p className="text-base font-medium text-white">أحمد محمد</p>
                  <button 
                    onClick={() => {
                      localStorage.removeItem('isAuthenticated');
                      window.location.href = '/';
                    }}
                    className="text-sm font-medium text-primary-200 hover:text-white"
                  >
                    تسجيل الخروج
                  </button>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;