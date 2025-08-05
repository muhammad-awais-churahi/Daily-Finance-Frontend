// import React, { useState } from "react";
// import { ChevronDown } from "lucide-react";

// const Subs = () => {
//   const [formData, setFormData] = useState({
//     phoneNumber: "",
//     email: "",
//     company: "",
//     refNumber: "",
//     wasaRefNumber: "",
//     ptclConsumerNumber: "",
//     ptclAccountId: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Submitted:", formData);
//     // Here you'd send formData to your backend
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-4 bg-white rounded-2xl shadow-md mt-10">
//       <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
//         Add Subscription
//       </h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="text"
//           name="phoneNumber"
//           placeholder="Enter Phone Number"
//           className="w-full p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
//           value={formData.phoneNumber}
//           onChange={handleChange}
//         />

//         <input
//           type="email"
//           name="email"
//           placeholder="Enter Email"
//           className="w-full p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
//           value={formData.email}
//           onChange={handleChange}
//         />

//         {/* Dropdown for companies */}
//         <div className="grid gap-4 md:grid-cols-3">
//           <div>
//             <label className="font-semibold mb-1 block">
//               Electric Companies
//             </label>
//             <select
//               name="company"
//               className="w-full p-2 border border-gray-300 rounded-xl"
//               onChange={handleChange}
//             >
//               <option value="">Select Company</option>
//               <option value="IESCO">IESCO</option>
//               <option value="LESCO">LESCO</option>
//               <option value="MEPCO">MEPCO</option>
//               <option value="GEPCO">GEPCO</option>
//               <option value="FESCO">FESCO</option>
//             </select>
//           </div>

//           <div>
//             <label className="font-semibold mb-1 block">WASA Services</label>
//             <select
//               name="company"
//               className="w-full p-2 border border-gray-300 rounded-xl"
//               onChange={handleChange}
//             >
//               <option value="">Select WASA Company</option>
//               <option value="WASA-Lahore">WASA-Lahore</option>
//               <option value="WASA-Rawalpindi">WASA-Rawalpindi</option>
//               <option value="WASA-Karachi">WASA-Karachi</option>
//               <option value="WASA-Gujranwala">WASA-Gujranwala</option>
//             </select>
//           </div>

//           <div>
//             <label className="font-semibold mb-1 block">PTCL</label>
//             <select
//               name="company"
//               className="w-full p-2 border border-gray-300 rounded-xl"
//               onChange={handleChange}
//             >
//               <option value="">Select</option>
//               <option value="PTCL">PTCL</option>
//             </select>
//           </div>
//         </div>

//         <input
//           type="text"
//           name="refNumber"
//           placeholder="Electric Bill Ref Number"
//           className="w-full p-2 border border-gray-300 rounded-xl"
//           value={formData.refNumber}
//           onChange={handleChange}
//         />

//         <input
//           type="text"
//           name="wasaRefNumber"
//           placeholder="WASA Bill Ref Number"
//           className="w-full p-2 border border-gray-300 rounded-xl"
//           value={formData.wasaRefNumber}
//           onChange={handleChange}
//         />

//         <div>
//           <input
//             type="text"
//             name="ptclConsumerNumber"
//             placeholder="PTCL Phone Number"
//             className="w-full p-2 border border-gray-300 rounded-xl"
//             value={formData.ptclConsumerNumber}
//             onChange={handleChange}
//           />
//           <span className="text-xs text-gray-500">
//             Enter PTCL number without area code
//           </span>
//         </div>

//         <input
//           type="text"
//           name="ptclAccountId"
//           placeholder="PTCL Account ID"
//           className="w-full p-2 border border-gray-300 rounded-xl"
//           value={formData.ptclAccountId}
//           onChange={handleChange}
//         />

//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700 transition"
//         >
//           Add
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Subs;

import React, { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import axios from "axios";

const SubscriptionForm = () => {
  const [formData, setFormData] = useState({
    phoneNumber: "",
    email: "",
    electricCompany: "",
    wasaCompany: "",
    ptclCompany: "",
    elecRefNumber: "",
    wasaRefNumber: "",
    ptclConsumerNumber: "",
    ptclAccountId: "",
  });

  const [subscriptions, setSubscriptions] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updated = [...subscriptions];
      updated[editIndex] = formData;
      setSubscriptions(updated);
      setEditIndex(null);
    } else {
      setSubscriptions([...subscriptions, formData]);
    }
    setFormData({
      phoneNumber: "",
      email: "",
      electricCompany: "",
      wasaCompany: "",
      ptclCompany: "",
      elecRefNumber: "",
      wasaRefNumber: "",
      ptclConsumerNumber: "",
      ptclAccountId: "",
    });
  };

  const handleDelete = (index) => {
    const updated = subscriptions.filter((_, i) => i !== index);
    setSubscriptions(updated);
  };

  const handleEdit = (index) => {
    setFormData(subscriptions[index]);
    setEditIndex(index);
  };

  const handleSubscribe = async () => {
    if (subscriptions.length === 0) {
      alert("plz enter some data ");
      return;
    }
    try {
      const { email, phoneNumber } = subscriptions[0];
      const clnSubs = subscriptions.map((sub) => {
        const { email, phoneNumber, ...rest } = sub;
        return rest;
      });
      const payload = {
        email,
        phoneNumber,
        clnSubs,
      };
      const response = await axios.post(
        "http://localhost:5000/api/create",
        payload
      );

      console.log("✅ Response:", response.data);
      alert("Data successfully sent to backend!");
    } catch (error) {
      console.error("❌ Error in subscription:", error.message);
      alert("Failed to send data to backend.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white rounded-2xl shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
        Add Subscription
      </h2>
      <form onSubmit={handleAdd} className="space-y-4">
        <input
          type="text"
          name="phoneNumber"
          placeholder="Enter Phone Number"
          className="w-full p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={formData.phoneNumber}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          className="w-full p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={formData.email}
          onChange={handleChange}
        />

        {/* Dropdown for companies */}
        <div className="grid gap-4 md:grid-cols-3">
          <div>
            <label className="font-semibold mb-1 block">
              Electric Companies
            </label>
            <select
              name="electricCompany"
              className="w-full p-2 border border-gray-300 rounded-xl"
              onChange={handleChange}
              value={formData.electricCompany}
            >
              <option value="">Select Company</option>
              <option value="IESCO">IESCO</option>
              <option value="LESCO">LESCO</option>
              <option value="MEPCO">MEPCO</option>
              <option value="GEPCO">GEPCO</option>
              <option value="FESCO">FESCO</option>
            </select>
          </div>

          <div>
            <label className="font-semibold mb-1 block">WASA Services</label>
            <select
              name="wasaCompany"
              className="w-full p-2 border border-gray-300 rounded-xl"
              onChange={handleChange}
              value={formData.wasaCompany}
            >
              <option value="">Select WASA Company</option>
              <option value="WASA-Lahore">WASA-Lahore</option>
              <option value="WASA-Rawalpindi">WASA-Rawalpindi</option>
              <option value="WASA-Karachi">WASA-Karachi</option>
              <option value="WASA-Gujranwala">WASA-Gujranwala</option>
            </select>
          </div>

          <div>
            <label className="font-semibold mb-1 block">PTCL</label>
            <select
              name="ptclCompany"
              className="w-full p-2 border border-gray-300 rounded-xl"
              onChange={handleChange}
              value={formData.ptclCompany}
            >
              <option value="">Select</option>
              <option value="PTCL">PTCL</option>
            </select>
          </div>
        </div>

        <input
          type="text"
          name="elecRefNumber"
          placeholder="Electric Bill Ref Number"
          className="w-full p-2 border border-gray-300 rounded-xl"
          value={formData.elecRefNumber}
          onChange={handleChange}
        />

        <input
          type="text"
          name="wasaRefNumber"
          placeholder="WASA Bill Ref Number"
          className="w-full p-2 border border-gray-300 rounded-xl"
          value={formData.wasaRefNumber}
          onChange={handleChange}
        />

        <div>
          <input
            type="text"
            name="ptclConsumerNumber"
            placeholder="PTCL Phone Number"
            className="w-full p-2 border border-gray-300 rounded-xl"
            value={formData.ptclConsumerNumber}
            onChange={handleChange}
          />
          <span className="text-xs text-red-500">
            Enter PTCL number without area code
          </span>
        </div>

        <input
          type="text"
          name="ptclAccountId"
          placeholder="PTCL Account ID"
          className="w-full p-2 border border-gray-300 rounded-xl"
          value={formData.ptclAccountId}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="w-1/3 ml-64   bg-sky-600 text-white py-2 px-4 rounded-xl hover:bg-sky-700 transition"
        >
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </form>

      {/* Table of subscriptions */}
      {subscriptions.length > 0 && (
        <div className="mt-10 overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr className="bg-blue-100 text-left">
                <th className="p-2">Phone</th>
                <th className="p-2">Email</th>
                <th className="p-2">Electric</th>
                <th className="p-2">WASA</th>
                <th className="p-2">PTCL</th>
                <th className="p-2">Electricity Ref#</th>
                <th className="p-2">WASA Ref#</th>
                <th className="p-2">PTCL No.</th>
                <th className="p-2">PTCL ID</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {subscriptions.map((item, index) => (
                <tr key={index} className="border-t">
                  <td className="p-2">{item.phoneNumber}</td>
                  <td className="p-2">{item.email}</td>
                  <td className="p-2">{item.electricCompany}</td>
                  <td className="p-2">{item.wasaCompany}</td>
                  <td className="p-2">{item.ptclCompany}</td>
                  <td className="p-2">{item.elecRefNumber}</td>
                  <td className="p-2">{item.wasaRefNumber}</td>
                  <td className="p-2">{item.ptclConsumerNumber}</td>
                  <td className="p-2">{item.ptclAccountId}</td>
                  <td className="p-2 space-x-2">
                    <button
                      onClick={() => handleEdit(index)}
                      className="text-blue-500 hover:underline cursor-pointer"
                    >
                      <Pencil size={16} />
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      className="text-red-500 hover:underline  cursor-pointer"
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            onClick={handleSubscribe}
            className="mt-6 w-1/3 ml-64 bg-green-600 text-white py-2 px-4 rounded-xl hover:bg-green-700 transition"
          >
            Subscribe
          </button>
        </div>
      )}
    </div>
  );
};

export default SubscriptionForm;
