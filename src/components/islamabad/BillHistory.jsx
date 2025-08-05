import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BillHistory = () => {
  const navigate = useNavigate();
  const [record, setRecords] = useState({
    refNumber: "",
    company: "",
  });
  const handleChange = (e) => {
    e.preventDefault();
    let name = e.target.name;
    let value = e.target.value;
    setRecords((pre) => ({
      ...pre,
      [name]: value,
    }));
  };
  //sending values as parameters

  const sendValues = () => {
    const { refNumber, company } = record;
    if (!refNumber && !company) {
      alert("Please enter reference number and select company ");
      return;
    }
    if (!refNumber) {
      alert("Please enter reference number ");
      return;
    }
    if (!company) {
      alert("Please  select company");
      return;
    }
    navigate(`/old-data/${refNumber}/${company}`);
  };
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-10 sm:ml-2 sm:mr-2 md:ml-6 md:h-[1020px]  lg:ml-[63px] lg:mr-8 xl:ml-[127px] xl:mr-24 2xl:ml-1.5 2xl:-mr-1.5  ">
      <div className="w-full max-w-xl -mt-48 md:-mt-[500px] lg:-mt-[500px] 2xl:-ml-16 2xl:-mt-96">
        <h1 className="text-xl  sm:text-3xl font-bold mb-4 2xl:-ml-16">
          Old Bill History
        </h1>
        <p className="text-sm sm:text-base text-gray-700 mb-6 2xl:-ml-13">
          For the first time, we are maintaining old bills for all WAPDA
          consumers. IESCOBILL.PK is an unofficial website where you can check
          your latest WAPDA bills from all distribution companies, and every
          time you check your bill, we store it on our local server so you can
          access your old bills anytime.
        </p>

        <div className="border-2 border-dashed border-gray-300 p-6 sm:p-8 rounded-md 2xl:px-28 2xl:py-20">
          <input
            type="text"
            placeholder="Reference Number"
            name="refNumber"
            value={record.refNumber}
            onChange={handleChange}
            className="w-full mb-4 px-4 py-3 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 2xl:w-full 2xl:text-center"
            required
          />
          <select
            name="company"
            value={record.company}
            onChange={handleChange}
            required
            className="w-full mb-4 px-4 py-3 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500  2xl:mt-3 2xl:w-2/3 2xl:ml-16"
          >
            <option value="">Select Company</option>
            <option value="iesco">IESCO</option>
            <option value="lesco">LESCO</option>
            <option value="gepco">GEPCO</option>
            <option value="faisalabad">FESCO</option>
            <option value="hesco">HESCO</option>
            <option value="pesco">PESCO</option>
            <option value="qesco">QESCO</option>
            <option value="mepco">MEPCO</option>
          </select>

          <button
            className="w-full bg-sky-600 hover:bg-sky-700 text-white py-3 rounded-md transition 2xl:w-2/3 2xl:ml-16 2xl:mt-3"
            onClick={sendValues}
          >
            CHECK RECORDS
          </button>
        </div>
      </div>
    </div>
  );
};

export default BillHistory;
