import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useBankingSystem } from '../Context/UserContext';
import axios from '../Utills/AxiosWithJWT.js';
import { BsBank, BsBoxArrowRight, BsPeople, BsCreditCard, BsClipboardData } from 'react-icons/bs';

const AdminPage = () => {
  const navigateTo = useNavigate();
  const { BASE_URL, userDetails } = useBankingSystem();
  const [requests, setRequests] = useState([]);
  const [accounts, setAccounts] = useState([]);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    if (!sessionStorage.getItem("jwtToken")) {
      navigateTo("/auth");
    }
    if (userDetails?.role !== "ADMIN") {
      navigateTo("/dashboard");
    }
  }, [userDetails]);

  const handleSignOut = () => {
    sessionStorage.clear();
    navigateTo("/auth");
    toast.success("Signed Out Successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <BsBank className="text-2xl text-indigo-600" />
          <h1 className="text-xl font-bold text-gray-800">Admin Panel</h1>
        </div>
        <button
          onClick={handleSignOut}
          className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg transition-colors"
        >
          <BsBoxArrowRight />
          <span>Sign Out</span>
        </button>
      </nav>

      {/* Main Content */}
      <div className="p-6">
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Welcome, Admin</h2>
          <p className="text-gray-600">Manage the banking system</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <BsPeople className="text-4xl text-indigo-600 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-800">Account Requests</h3>
            <p className="text-sm text-gray-600">View pending account opening requests</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <BsCreditCard className="text-4xl text-green-600 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-800">All Accounts</h3>
            <p className="text-sm text-gray-600">View all bank accounts</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <BsClipboardData className="text-4xl text-blue-600 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-800">Transactions</h3>
            <p className="text-sm text-gray-600">View all transactions</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Admin Dashboard</h3>
          <p className="text-gray-600">This is a simplified admin panel. The full admin functionality can be restored if needed.</p>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;