// import React, { useState } from "react";
// import iesco from "../../assets/iesco.webp";
// import { Link } from "react-router-dom";

// export default function IESCONavbar() {
//   const [menu, setMenu] = useState(false);

//   return (
//     <div className="sticky top-0 bg-white border-b mt-6 ml-36 mr-36 p-6 z-50">
//       <nav className="mx-auto max-w-screen-xl">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16 md:h-20">
//             {/* Logo and Brand */}
//             <div className="flex items-center space-x-3">
//               <Link to="/home" className="flex items-center space-x-3 group">
//                 <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-2 md:p-3 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
//                   <img
//                     src={iesco}
//                     alt="IESCO Logo"
//                     className="h-20 w-16 md:h-8 md:w-8 object-contain"
//                   />
//                 </div>
//                 <div className="text-gray-800">
//                   <h1 className="text-lg md:text-xl font-bold tracking-tight">
//                     IESCO
//                   </h1>
//                   <p className="text-xs md:text-sm text-gray-600 hidden sm:block">
//                     Islamabad Electricity
//                   </p>
//                 </div>
//               </Link>
//             </div>

//             {/* Desktop Menu */}
//             <div className="hidden lg:block">
//               <div className="ml-10 flex items-baseline space-x-1">
//                 <Link
//                   to="/home1"
//                   className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-700 hover:underline transition-all duration-300 transform hover:scale-105"
//                 >
//                   Home
//                 </Link>
//                 <Link
//                   to="/checkbill"
//                   className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-700 hover:underline transition-all duration-300 transform hover:scale-105"
//                 >
//                   Check Electricity Bill
//                 </Link>
//                 <Link
//                   to="/bill-cal"
//                   className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-700 hover:underline transition-all duration-300 transform hover:scale-105"
//                 >
//                   Bill Calculator
//                 </Link>
//                 <Link
//                   to="#hredf"
//                   className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-700 hover:underline transition-all duration-300 transform hover:scale-105"
//                 >
//                   IESCO Bill Payment
//                 </Link>
//                 <Link
//                   to="/bill-subs"
//                   className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-700 hover:underline transition-all duration-300 transform hover:scale-105"
//                 >
//                   Monthly Bill Subscription
//                 </Link>
//                 <a
//                   href="#history"
//                   className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-700 hover:underline transition-all duration-300 transform hover:scale-105"
//                 >
//                   Old Bill History
//                 </a>
//               </div>
//             </div>

//             {/* Mobile Menu Toggle Button */}
//             <div className="lg:hidden">
//               <button
//                 onClick={() => setMenu(!menu)}
//                 className="bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center p-2 rounded-lg text-gray-600 transition-all duration-300"
//               >
//                 <svg
//                   className="h-6 w-6"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   {menu ? (
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M6 18L18 6M6 6l12 12"
//                     />
//                   ) : (
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M4 6h16M4 12h16M4 18h16"
//                     />
//                   )}
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         <div className={`lg:hidden ${menu ? "block" : "hidden"}`}>
//           <div className="px-2 pt-4 pb-6 space-y-1 bg-gray-50 border-t border-gray-200 rounded-xl shadow-md">
//             {[
//               { label: "Home", href: "/home1" },
//               { label: "Check Electricity Bill", href: "/checkbill" },
//               { label: "Bill Calculator", href: "/bill-cal" },
//               { label: "IESCO Bill Payment", href: "" },
//               { label: "Monthly Bill Subscription", href: "/bill-subs" },
//               { label: "Old Bill History", href: "#history" },
//             ].map((item) => (
//               <Link
//                 key={item.label}
//                 to={item.href}
//                 onClick={() => setMenu(false)} // Close menu on link click
//                 className="block px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:bg-white hover:text-blue-700 hover:shadow-md transition-all duration-300"
//               >
//                 <div className="flex items-center space-x-3">
//                   <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
//                   <span>{item.label}</span>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCompany } from "../../context/CompanyContext";
const logo = "https://iescobill.pk/images/logo.webp";

export default function IESCONavbar() {
  const { companyUrl } = useCompany();
  console.log("companyUrl:", companyUrl);
  const [menu, setMenu] = useState(false);

  return (
    <div className=" bg-white  mt-2 sm:mt-4 md:mt-6 mx-4 sm:mx-6 md:mx-10 lg:mx-20 xl:mx-36 px-4 py-4 ">
      {/* <div
      className=" bg-white  mt-2 sm:mt-4 md:mt-6 mx-4 sm:mx-6 md:mx-10 lg:mx-20 xl:mx-36 px-4 py-4 2xl:-mr-[420px]
    2xl:-ml-[-7px]"
    > */}
      <nav className="max-w-screen-xl mx-auto">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            {/* <Link to="/home" className="flex items-center space-x-3 group"> */}
            {companyUrl ? (
              <img
                src={companyUrl}
                alt="Company Logo"
                className="h-20 w-20 sm:h-20 sm:w-20 md:h-20 md:w-20 lg:h-20 lg:w-20 xl:h-24 xl:w-24 2xl:h-[100px] 2xl:w-32 2xl:rounded-[200px]   object-contain transition-all duration-300 cursor-not-allowed"
              />
            ) : (
              <div className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 xl:h-24 xl:w-24 2xl:h-32 2xl:w-32 bg-gray-200 rounded animate-pulse" />
            )}
            {/* <div className="text-gray-800">
                <h1 className="text-base md:text-xl font-bold tracking-tight">
                  IESCO
                </h1>
                <p className="text-xs md:text-sm text-gray-600 hidden sm:block">
                  Islamabad Electricity
                </p>
              </div> */}
            {/* </Link> */}
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <div className="flex items-baseline space-x-1">
              <Link
                to="/home"
                onClick={() => setCompanyUrl(logo)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-700 hover:underline transition-all duration-300 transform hover:scale-105"
              >
                Home
              </Link>
              <Link
                to="/checkbill"
                className="px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-700 hover:underline transition-all duration-300 transform hover:scale-105"
              >
                Check Electricity Bill
              </Link>
              <Link
                to="/bill-cal"
                className="px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-700 hover:underline transition-all duration-300 transform hover:scale-105"
              >
                Bill Calculator
              </Link>
              <Link
                to="#hredf"
                className="px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-700 hover:underline transition-all duration-300 transform hover:scale-105"
              >
                IESCO Bill Payment
              </Link>
              <Link
                to="/bills-subscr"
                className="px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-700 hover:underline transition-all duration-300 transform hover:scale-105"
              >
                Monthly Bill Subscription
              </Link>
              <Link
                to="/bill-history"
                className="px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-700 hover:underline transition-all duration-300 transform hover:scale-105"
              >
                Old Bill History
              </Link>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setMenu(!menu)}
              className="bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center p-2 rounded-lg text-gray-600 transition-all duration-300"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {menu ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden ${menu ? "block" : "hidden"}`}>
          <div className="px-4 pt-4 pb-6 space-y-1 bg-gray-50 border-t border-gray-200 rounded-xl shadow-md mt-2">
            {[
              { label: "Home", href: "/home" },
              { label: "Check Electricity Bill", href: "/home1/:company" },
              { label: "Bill Calculator", href: "/bill-cal" },
              { label: "IESCO Bill Payment", href: "" },
              { label: "Monthly Bill Subscription", href: "/bills-subscr" },
              { label: "Old Bill History", href: "/bill-history" },
            ].map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => {
                  setMenu(false);
                  if (item.label === "Home") setCompanyUrl(logo);
                }}
                className="block px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:bg-white hover:text-blue-700 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>{item.label}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}
