import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NewContact = () => {
  return (
    <div className="min-h-screen bg-white py-8 px-4 md:ml-32">
      <div className="w-full mx-auto rounded-lg  p-6 md:p-8">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Contact Us
          </h1>
        </header>

        <p className="text-black text-base mb-6">
          Your request has been submitted successfully!
        </p>

        {/* Contact Form (Commented) */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Fields commented intentionally */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContact;
