import React from "react";
import { useLocation } from "react-router-dom";

export default function GetBill() {
  const location = useLocation();
  const bill = location.state;

  if (!bill) {
    return (
      <p className="text-center text-red-500 mt-10">No bill data provided.</p>
    );
  }

  return (
    <div className="min-h-screen bg-sky-50 flex items-center justify-center py-10 px-4 mr-12">
      <div className="bg-white  rounded-lg w-full max-w-2xl p-6 md:p-10  mb-80 ">
        <div className="flex justify-between items-center border-b pb-4 mb-4">
          <div>
            <h1 className="text-3xl font-bold text-blue-600">
              LAMBA Electric Co.
            </h1>
            <p className="text-sm text-gray-500">Duplicate Electricity Bill</p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1610028290816-5d937a395a49?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Electric Icon"
              className="w-12 h-12"
            />
          </div>
        </div>

        <div className="space-y-4 text-gray-800">
          <div className="flex justify-between">
            <span className="font-semibold">Customer Name:</span>
            <span>{bill.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Bill Amount:</span>
            <span className="text-red-600 font-semibold">{bill.amount}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Due Date:</span>
            <span>{bill.dueDate}</span>
          </div>
        </div>

        <div className="mt-6 border-t pt-4 text-sm text-gray-600">
          <p>Pay before due date to avoid late payment surcharge.</p>
          <p className="mt-2">
            For queries, contact 051-1234567 or visit your nearest customer
            center.
          </p>
        </div>

        <div className="mt-6 flex justify-center">
          <button
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            onClick={() => window.print()}
          >
            Print Bill
          </button>
        </div>
      </div>
    </div>
  );
}
