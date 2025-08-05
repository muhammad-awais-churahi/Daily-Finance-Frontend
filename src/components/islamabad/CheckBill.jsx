import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCompany } from "../../context/CompanyContext";

const CheckBill = () => {
  const { setCompanyUrl } = useCompany();

  const companies = [
    {
      name: "IESCo",

      logo: "https://iescobill.pk/images/iesco-logo.jpg",
      // url: "/home",
    },
    {
      name: "MEPCO",
      logo: "https://iescobill.pk/images/mepco-logo.jpg",
      // url: "/mltn",
    },
    {
      name: "LESCO",
      logo: "https://iescobill.pk/images/lesco-logo.jpg",
      // url: "/lhr",
    },
    {
      name: "PESCO",
      logo: "https://iescobill.pk/images/pesco-logo.jpg",
      // url: "/pshwr",
    },
    {
      name: "FESCO",
      logo: "https://iescobill.pk/images/fesco-logo.jpg",
      // url: "/faslbd",
    },
    {
      name: "GEPCO",
      logo: "https://iescobill.pk/images/gepco-logo.jpg",
      // url: "/gjrwla",
    },
    {
      name: "HESCO",
      logo: "https://iescobill.pk/images/hesco-logo.jpg",
      // url: "/hydrbd",
    },
    {
      name: "SEPCO",
      logo: "https://iescobill.pk/images/sepco-logo.jpg",
      // url: "/skhr",
    },
    {
      name: "QESCO",
      logo: "https://iescobill.pk/images/companies/qesco/qescoLogo.png",
      // url: "/skhr",
    },
    {
      name: "TESCO",
      logo: "https://iescobill.pk/images/companies/tesco/tescoLogo.png",
      // url: "/skhr",
    },
  ];

  const cities = [
    "Karachi",
    "Lahore",
    "Islamabad",
    "Rawalpindi",
    "Faisalabad",
    "Multan",
    "Peshawar",
    "Quetta",
    "Sialkot",
    "Gujranwala",
  ];

  //   const handleCityChange = (e) => {
  //     setSelectedCity(e.target.value);
  //   };

  return (
    <div className="min-h-screen ">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Main Content */}
        <div className=" max-w-6xl mx-auto px-4 py-8 ml-10 md:ml-8">
          {/* Header */}
          <header className="mb-8">
            <h1 className=" text-center text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Check Electricity Bill
            </h1>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Looking for electricity bill duplicate copy? Let us help you!
              Please choose your electric supply company below, then enter
              reference number, and you will get your electricity bill within
              seconds.
            </p>
          </header>

          {/* Company Logos Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
            {companies.map((company, index) => (
              <div
                key={index}
                className="flex flex-col items-center cursor-pointer h-32 w-32 md:h-36 md:w-36 rounded-full mb-3 hover:underline"
              >
                <Link
                  to={`/home1/${company.name}`}
                  onClick={() => setCompanyUrl(company.logo)}
                  className="flex flex-col items-center w-full h-full"
                >
                  <img
                    src={company.logo}
                    alt={`${company.name} logo`}
                    className="object-contain w-full h-full mix-blend-multiply transition duration-300 ease-in-out transform hover:scale-105"
                  />
                  {/* <h3 className="text-sm md:text-sm font-semibold text-center text-blue-500 mt-2 ">
          {company.name}
          {console.log("compnay name", company.name)}
        </h3> */}
                </Link>
              </div>
            ))}
          </div>

          {/* City Selection Section */}
          {/* <div className="bg-gray-100 rounded-lg p-6 mb-6">
            <p className="text-gray-700 text-sm md:text-base mb-4">
              Not sure about your electricity company? Let us find it for you.
              Please choose your city below and we will take you to the relevant
              billing web page.
            </p>

            <div className="space-y-4">
              <div>
                <label
                  htmlFor="city-select"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Choose Your City:
                </label>
                <select
                  id="city-select"
                  value={selectedCity}
                  onChange={handleCityChange}
                  className="w-full md:w-64 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                >
                  <option value="">Select City</option>
                  {cities.map((city, index) => (
                    <option key={index} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>

              <p className="text-xs md:text-sm text-gray-600">
                Choose city to detect your electric supply company
              </p>
            </div>
          </div> */}

          {/* Information Text */}
          <div className="text-xs md:text-sm text-gray-600 leading-relaxed">
            <p>
              So, select your city to detect electricity distribution company,
              and then click on the company link to view your bill. Iescobill.pk
              is the best app/website where you can check electric
              <span className="text-blue-600 hover:underline cursor-pointer">
                monthly bill
              </span>{" "}
              email service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckBill;
