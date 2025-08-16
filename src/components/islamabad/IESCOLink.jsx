import React from "react";
import { Link } from "react-router-dom";
import { useCompany } from "../../context/CompanyContext";

const iescoLinks = [
  { name: "IESCO Duplicate Bill", url: "https://bill.pitc.com.pk/iescobill" },
  { name: "IESCO Bill Calculator", url: "/bill-calculator" },
  { name: "Bill Payment Methods", url: "/payment-methods" },
  { name: "How it works?", url: "/how-it-works" },
];

const companies = [
  {
    id: 1,
    name: "IESCO",
    fullName: "Islamabad Electric Supply Company",
    image: "https://iescobill.pk/images/logo.webp",
    img: "https://iescobill.pk/images/reference-gif.gif",

    // url: "/home1",
  },
  {
    id: 2,
    name: "LESCO",
    fullName: "Lahore Electric Supply Company",
    image: "https://iescobill.pk/images/lesco-logo.jpg",
    img: "https://iescobill.pk/images/lesco-logo.jpg",

    // url: "",
  },
  {
    id: 3,
    name: "GEPCO",
    fullName: "Gujranwala Electric Power Company",
    image: "https://iescobill.pk/images/gepco-logo.jpg",
    img: "https://iescosite.s3.amazonaws.com/gepco-bill-reference.jpg",

    // url: "/gjrwla",
  },
  {
    id: 4,
    name: "HESCO",
    fullName: "Hyderabad Electric Supply Company",
    image: "https://iescobill.pk/images/hesco-logo.jpg",
    img: "https://iescobill.pk/images/hesco-online-bill.jpg",

    // url: "/hydrbd",
  },
  {
    id: 5,
    name: "MEPCO",
    fullName: "Multan Electric Power Company",
    image: "https://iescobill.pk/images/mepco-logo.jpg",
    img: "https://iescobill.pk/images/mepco-logo.jpg",

    // url: "/mltn",
  },
  {
    id: 6,
    name: "PESCO",
    fullName: "Peshawar Electric Supply Company",
    image: "https://iescobill.pk/images/pesco-logo.jpg",
    img: "https://iescosite.s3.amazonaws.com/pesco-bill-reference.jpg",

    // url: "/pshwr",
  },
  {
    id: 7,
    name: "SEPCO",
    fullName: "Sukkhar Electric Supply Company",
    image: "https://iescobill.pk/images/sepco-logo.jpg",
    img: "https://iescobill.pk/images/sepco-reference-number.gif",

    // url: "/skhr",
  },
  {
    id: 8,
    name: "FESCO",
    fullName: "Faisalabad Electric Supply Company",
    image: "https://iescobill.pk/images/fesco-logo.jpg",
    img: "https://iescobill.pk/images/fesco-reference-number.gif",

    // url: "/faslbd",
  },

  {
    id: 9,
    name: "QESCO",
    fullName: "Quetta Electric Supply Company",
    image: "https://iescobill.pk/images/companies/qesco/qescoLogo.png",
    img: "https://iescobill.pk/images/companies/qesco/qescoLogo.png",
    // url: "/quetta",
  },
  {
    id: 10,
    name: "TESCO",
    fullName: "Quetta Electric Supply Company",
    image: "https://iescobill.pk/images/companies/tesco/tescoLogo.png",
    img: "https://iescobill.pk/images/companies/tesco/tescoLogo.png",
    // url: "/tribal",
  },
];

export default function IESCOLink() {
  const { setCompanyUrl } = useCompany();

  return (
    <div className="w-full  sm:px-2   md:-ml-4 lg:px-4  lg:-ml-12 xl:-ml-28 2xl:ml-2 2xl:w-3/3">
      {/* <div className="w-full  sm:px-2   md:-ml-4 lg:px-4  lg:-ml-12 xl:-ml-28 2xl:ml-2 2xl:w-3/3 2xl:mt-[163px]"> */}
      <div className="p-2 bg-white  w-full ">
        <h2 className="text-blue-700 font-semibold mb-2 text-base sm:text-lg">
          IESCO Links
        </h2>
        <ul className="space-y-2">
          {iescoLinks.map((link, index) => (
            <li
              key={index}
              className="group transition duration-200 cursor-pointer"
            >
              <Link
                to={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 group-hover:text-blue-700 group-hover:underline text-sm sm:text-base"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Advertisement section */}
        <div className="mt-6 h-48 ">
          <h2 className="text-blue-700 font-semibold text-base sm:text-lg">
            Advertisement
          </h2>
          <div className="h-40 sm:h-28 bg-gray-100 border mt-2 flex items-center justify-center text-gray-400 text-sm">
            Ad Space
          </div>
        </div>

        {/* Company Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 mt-6 border-t-2 border-l-2 border-r-2 border-sky-200 p-2">
          {companies.map((company) => (
            <div
              key={company.id}
              className="relative group cursor-pointer transition-all duration-300 hover:scale-105"
            >
              <Link to={`/home1/${company.name}`} state={{ img: company.img }}>
                <div className="bg-white rounded-xl overflow-hidden aspect-square p-2">
                  <button
                    className="w-full h-full flex items-center justify-center relative "
                    onClick={() => setCompanyUrl(company.image)}
                  >
                    <img
                      src={company.image}
                      alt={company.fullName}
                      className=" object-contain rounded-lg md:w-[180px] h-[180px] cursor-pointer"
                    />
                  </button>
                </div>
                <div className="xl:mt-1 xl:ml-4 md:ml-[5px] sm:ml-16 ml-28">
                  <span className="hidden md:inline  font-semibold text-black group-hover:underline decoration-blue-600  md:text-[11px] lg:text-[14px]">
                    {company.name}
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Calculators Section */}
        <div className="mt-8 bg-white border-t-2 border-l-2 border-r-2 border-sky-200 p-4 w-full">
          <h2 className="text-blue-700 font-semibold mb-3 border-b pb-1 text-base sm:text-lg">
            Calculators
          </h2>
          <ul className="space-y-2">
            {[
              "IESCO",
              "LESCO",
              "FESCO",
              "MEPCO",
              "GEPCO",
              "SEPCO",
              "HESCO",
              "QESCO",
              "TESCO",
              "PESCO",
            ].map((comp1) => (
              <li key={comp1}>
                <Link
                  to={`/bill-cal/${comp1.toLowerCase()}`}
                  className="block bg-blue-300 hover:bg-blue-400 text-white font-medium py-2 px-3 text-xs sm:text-sm text-center rounded transition duration-150"
                >
                  {comp1} Bill Calculator
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
