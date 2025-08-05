import React, { useEffect, useState } from "react";
// import React from "react";
import { useParams } from "react-router-dom";
// import { useLocation } from "react-router-dom";

const FetchData = () => {
  const { refNumber, company } = useParams();
  const newCompany = company.toUpperCase();
  console.log("company:", newCompany);
  console.log("refNumber:", refNumber);
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchBills = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/api/get/${newCompany}/${refNumber}`
        );
        const Data = await res.json();
        console.log("Data:", Data);
        setRecords(Data.getData || []);
        console.log(records);
      } catch (err) {
        console.error("Error fetching records:", err);
      }
    };

    fetchBills();
  }, []);

  return (
    <div className="min-h-screen bg-white p-4 sm:p-6">
      <h1 className="text-xl sm:text-2xl font-bold mb-4 text-center">
        Electricity Bill Records
      </h1>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-100 bg-white rounded-md overflow-hidden text-sm sm:text-base">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-3 py-2 text-left">Company</th>
              <th className="px-3 py-2 text-left">Ref Number</th>
              <th className="px-3 py-2 text-left">Bill PDF</th>
              <th className="px-3 py-2 text-left">Month</th>
              <th className="px-3 py-2 text-left">Downloaded At</th>
            </tr>
          </thead>
          <tbody>
            {records.length === 0 ? (
              <tr>
                <td colSpan="5" className="px-3 py-3 text-center text-gray-500">
                  No records found.
                </td>
              </tr>
            ) : (
              records.map((user, userIndex) =>
                user.bills.map((bill, billIndex) => (
                  <tr
                    key={`${userIndex}-${billIndex}`}
                    className="border-t border-gray-200"
                  >
                    <td className="px-3 py-2">{user.company}</td>
                    <td className="px-3 py-2">{user.refNumber}</td>
                    <td className="px-3 py-2">
                      <a
                        href={bill.pdfLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline"
                      >
                        View PDF
                      </a>
                    </td>
                    <td className="px-3 py-2">{bill.month}</td>
                    <td className="px-3 py-2">{bill.downloadedAt}</td>
                  </tr>
                ))
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FetchData;
