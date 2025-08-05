import React, { useState } from "react";
import axios from "axios";

const companies = [
  "IESCO",
  "LESCO",
  "GEPCO",
  "FESCO",
  "MEPCO",
  "HESCO",
  "QESCO",
  "SEPCO",
  "KESCO",
];

export default function BillSubs() {
  const [record, setRecord] = useState({
    company: "",
    refNumber: "",
    wasaRefNumber: "",
    email: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecord((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post(
        "http://localhost:5000/api/create",
        record,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(resp);
      alert(
        `Subscribed:\nCompany: ${record.company}\nRef #: ${record.refNumber}\nEmail: ${record.email}\nPhone: ${record.phoneNumber}`
      );
      setRecord({
        company: "",
        refNumber: "",
        wasaRefNumber: "",
        email: "",
        phoneNumber: "",
      });
    } catch (err) {
      console.log("err:", err);
    }
  };

  return (
    // <div className="min-h-screen bg-blue-50 flex  pl-32 ">
    //   <div className="w-full min-h-[1000px]  bg-white p-6">
    <div className="min-h-screen bg-white  sm:ml-2 sm:mr-2 md:ml-6 md:h-[1000px] lg:ml-16 lg:mr-7 lg:h-[1055px]  xl:ml-32 xl:mr-24 xl:h-[1105px] 2xl:-ml-[-7px] 2xl:w-3/3 2xl:h-[1100px] ">
      <div className="w-full lg:px-2   sm:px-4">
        <div className="w-full max-w-3xl bg-white px-8 py-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Monthly Bill Subscription
          </h2>
          <p className="text-gray-700 mb-6">
            If you want to receive your IESCO bill via email and WhatsApp every
            month, subscribe here. Enter your 14-digit reference number, email
            address, and WhatsApp number.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <select
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="company"
              value={record.company}
              onChange={handleChange}
              required
            >
              <option value="">Choose Company</option>
              {companies.map((comp) => (
                <option key={comp} value={comp}>
                  {comp}
                </option>
              ))}
            </select>

            <input
              type="text"
              name="refNumber"
              placeholder="14 Digit Reference Number"
              value={record.refNumber}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              name="wasaRefNumber"
              placeholder="8 Digit WASA  Reference Number"
              value={record.wasaRefNumber}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              // required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={record.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <input
              type="text"
              name="phoneNumber"
              placeholder="WhatsApp Number (e.g., 923001234567)"
              value={record.phoneNumber}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <button
              type="submit"
              className="w-full sm:w-1/2 bg-sky-600 text-white py-2 rounded hover:bg-sky-700 transition duration-200 mx-auto block"
            >
              SUBSCRIBE
            </button>
          </form>

          <p className="text-sm text-gray-600 mt-6">
            From January to December, you will receive your bill through email
            and WhatsApp every month. Whether you’re looking for your June 2025
            bill or upcoming July 2025, our auto system will fetch and deliver
            it for you.
          </p>

          <a
            href="https://bill.pitc.com.pk/iescobill"
            className="block mt-4 text-blue-600 font-semibold underline hover:text-blue-800"
          >
            Download or Print IESCO Bill
          </a>
        </div>
      </div>
    </div>
  );
}
