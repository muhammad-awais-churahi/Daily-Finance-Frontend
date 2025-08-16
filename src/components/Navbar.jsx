// import React, { useState } from "react";
// import { Menu, X, Zap } from "lucide-react";
// import { Link, useNavigate } from "react-router-dom";
// import { useCompany } from "../context/CompanyContext";

// const divisions = [
//   {
//     code: "IESCO",
//     name: "Islamabad Electric Supply Company",
//     path: "/",
//     url: "https://iescobill.pk/images/logo.webp",
//     img: "https://iescobill.pk/images/reference-gif.gif",
//   },
//   {
//     code: "LESCO",
//     name: "Lahore Electric Supply Company",
//     // path: "/home1/:company",
//     url: "https://iescobill.pk/images/lesco-logo.jpg",
//     img: "https://iescobill.pk/images/lesco-logo.jpg",
//   },
//   {
//     code: "MEPCO",
//     name: "Multan Electric Power Company",
//     url: "https://iescobill.pk/images/companies/mepco/mepcoLogo.png",
//     img: "https://iescobill.pk/images/companies/mepco/mepcoLogo.png",
//   },
//   {
//     code: "FESCO",
//     name: "Faisalabad Electric Supply Company",
//     url: "https://iescobill.pk/images/companies/fesco/fescoLogo.png",
//     img: "https://iescobill.pk/images/fesco-reference-number.gif",
//   },
//   {
//     code: "PESCO",
//     name: "Peshawar Electric Supply Company",
//     url: "https://iescobill.pk/images/companies/pesco/pescoLogo.png",
//     img: "https://iescosite.s3.amazonaws.com/pesco-bill-reference.jpg",
//   },
//   {
//     code: "GEPCO",
//     name: "Gujranwala Electric Power Company",
//     url: "https://iescobill.pk/images/companies/gepco/gepcoLogo.png",
//     img: "https://iescosite.s3.amazonaws.com/gepco-bill-reference.jpg",
//   },
//   {
//     code: "SEPCO",
//     name: "Sukkur Electric Power Company",
//     url: "https://iescobill.pk/images/companies/sepco/sepcoLogo.png",
//     img: "https://iescobill.pk/images/sepco-reference-number.gif",
//   },
//   {
//     code: "HESCO",
//     name: "Hyderabad Electric Supply Company",
//     url: "https://iescobill.pk/images/companies/hesco/hescoLogo.png",
//     img: "https://iescobill.pk/images/hesco-online-bill.jpg",
//   },
//   {
//     code: "QESCO",
//     name: "Quetta Electric Supply Company",
//     url: "https://iescobill.pk/images/companies/qesco/qescoLogo.png",
//     img: "https://iescobill.pk/images/companies/qesco/qescoLogo.png",

//     // path: "/quetta",
//   },
//   {
//     code: "TESCO",
//     name: "Tribal Electric Supply Company",
//     url: "https://iescobill.pk/images/companies/tesco/tescoLogo.png",
//     img: "https://iescobill.pk/images/companies/tesco/tescoLogo.png",
//   },
// ];

// export default function Navbar() {
//   const { setCompanyUrl } = useCompany();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeItem, setActiveItem] = useState("");
//   //   const [activeItem, setActiveItem] = useState("");

//   const handleSelect = (code, url) => {
//     setCompanyUrl(url);
//     setActiveItem(code);
//     setIsMenuOpen(false);
//   };

//   return (
//     <nav className=" bg-sky-500 shadow-2xl sticky top-0 z-50">
//       {/* Top Bar */}
//       <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
//         {/* Logo */}
//         <div className="flex items-center space-x-2 text-white">
//           <div className="bg-white/20 p-2 rounded-full">
//             <Zap className="h-6 w-6" />
//           </div>
//           <div>
//             <h1 className="text-lg font-bold">Pakistan Electricity</h1>
//             <p className="text-xs text-white/80 hidden sm:block">
//               Bill Management System
//             </p>
//           </div>
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden lg:flex space-x-2">
//           {divisions.map(({ code, name, url, img }) => (
//             <Link to={`/home1/${code}`} state={{ img }} key={code}>
//               <button
//                 onClick={() => handleSelect(code, url)}
//                 title={name}
//                 className={`px-3 py-2 rounded text-sm transition-all ${
//                   activeItem === code
//                     ? "bg-white/20 text-white shadow"
//                     : "text-white/90 hover:bg-white/10"
//                 }`}
//               >
//                 {code}
//               </button>
//             </Link>
//           ))}
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="lg:hidden">
//           {/* {divisions.map(({ code, name }) => ( */}

//           {/* <Link to={`/home1/${code}`} key={code}> */}
//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="p-2 rounded bg-white/10 text-white hover:bg-white/20"
//           >
//             {isMenuOpen ? (
//               <X className="h-6 w-6" />
//             ) : (
//               <Menu className="h-6 w-6" />
//             )}
//           </button>
//           {/* </Link> */}
//         </div>
//       </div>

//       {/* Mobile Dropdown */}
//       {isMenuOpen && (
//         <div className="lg:hidden bg-teal-700 px-4 py-3 space-y-2">
//           {divisions.map(({ code, name, url, img }) => (
//             <Link to={`/home1/${code}`} state={{ img }} key={code}>
//               <button
//                 key={code}
//                 onClick={() => handleSelect(code, url)}
//                 className={`block w-full text-left text-white px-4 py-2 rounded ${
//                   activeItem === code ? "bg-white/20" : "hover:bg-white/10"
//                 }`}
//               >
//                 <div className="font-bold">{code}</div>
//                 <div className="text-sm text-white/70">{name}</div>
//               </button>
//             </Link>
//           ))}
//         </div>
//       )}

//       {/* Active Division */}
//       {activeItem && (
//         <div className="bg-white/10 text-white text-sm px-4 py-2">
//           <span className="font-semibold">{activeItem}</span> -{" "}
//           {divisions.find((d) => d.code === activeItem)?.name}
//         </div>
//       )}
//     </nav>
//   );
// }

//new navbar
import React, { useState } from "react";
import {
  Menu,
  X,
  Zap,
  Droplets,
  Phone,
  Flame,
  ChevronDown,
} from "lucide-react";
import { Link } from "react-router-dom";
import IESCONavbar from "./islamabad/IESCONavbar";
import { useCompany } from "../context/CompanyContext";

const services = {
  electricity: {
    icon: <Zap className="h-5 w-5 text-red-300" />,
    items: [
      {
        code: "IESCO",
        name: "Islamabad Electric Supply Company",
        url: "https://iescobill.pk/images/logo.webp",
        img: "https://iescobill.pk/images/reference-gif.gif",
      },
      {
        code: "LESCO",
        name: "Lahore Electric Supply Company",
        url: "https://iescobill.pk/images/lesco-logo.jpg",
        img: "https://iescobill.pk/images/lesco-logo.jpg",
      },
      {
        code: "MEPCO",
        name: "Multan Electric Power Company",
        url: "https://iescobill.pk/images/companies/mepco/mepcoLogo.png",
        img: "https://iescobill.pk/images/companies/mepco/mepcoLogo.png",
      },
      {
        code: "FESCO",
        name: "Faisalabad Electric Supply Company",
        url: "https://iescobill.pk/images/companies/fesco/fescoLogo.png",
        img: "https://iescobill.pk/images/fesco-reference-number.gif",
      },
      {
        code: "PESCO",
        name: "Peshawar Electric Supply Company",
        url: "https://iescobill.pk/images/companies/pesco/pescoLogo.png",
        img: "https://iescosite.s3.amazonaws.com/pesco-bill-reference.jpg",
      },
      {
        code: "GEPCO",
        name: "Gujranwala Electric Power Company",
        url: "https://iescobill.pk/images/companies/gepco/gepcoLogo.png",
        img: "https://iescosite.s3.amazonaws.com/gepco-bill-reference.jpg",
      },
      {
        code: "SEPCO",
        name: "Sukkur Electric Power Company",
        url: "https://iescobill.pk/images/companies/sepco/sepcoLogo.png",
        img: "https://iescobill.pk/images/sepco-reference-number.gif",
      },
      {
        code: "HESCO",
        name: "Hyderabad Electric Supply Company",
        url: "https://iescobill.pk/images/companies/hesco/hescoLogo.png",
        img: "https://iescobill.pk/images/hesco-online-bill.jpg",
      },
      {
        code: "QESCO",
        name: "Quetta Electric Supply Company",
        url: "https://iescobill.pk/images/companies/qesco/qescoLogo.png",
        img: "https://iescobill.pk/images/companies/qesco/qescoLogo.png",
      },
      {
        code: "TESCO",
        name: "Tribal Electric Supply Company",
        url: "https://iescobill.pk/images/companies/tesco/tescoLogo.png",
        img: "https://iescobill.pk/images/companies/tesco/tescoLogo.png",
      },
    ],
  },

  water: {
    icon: <Droplets className="h-5 w-5 text-blue-200" />,
    items: [
      {
        code: "ISL-WASA",
        name: "Islamabad Water & Sewerage Agency",
        route: "https://owo.cda.gov.pk/duplicatewaterbill.aspx",
        img: "/images/wasa/islamabad-reference.jpg",
      },
      {
        code: "RWLPND-WASA",
        name: "Rawalpindi Water & Sewerage Agency",
        img: "/images/wasa/lahore-reference.jpg",
        route: "https://wasarwp.gop.pk",
      },
      {
        code: "LHR-WASA",
        name: "Lahore Water & Sewerage Agency",
        img: "/images/wasa/lahore-reference.jpg",
        route: "https://wasa.punjab.gov.pk/",
      },
      {
        code: "KHR-KWSB",
        name: "Karachi Water & Sewerage Board",
        img: "/images/wasa/lahore-reference.jpg",
        route: "https://www.kwsc.gos.pk/e-bill",
      },
      {
        code: "FSB-WASA",
        name: "Faislabad Water & Sewerage Agency",
        img: "/images/wasa/lahore-reference.jpg",
        route: "https://wasafaisalabad.gop.pk/duplicate-bill/",
      },
      {
        code: "GUJRWLA-WASA",
        name: "Gujranwala Water & Sewerage Agency",
        img: "/images/wasa/lahore-reference.jpg",
        route: "https://onlinebill.wasagujranwala.gop.pk/",
      },
      {
        code: "MUL-WASA",
        name: "Multan Water & Sewerage Agency",
        img: "/images/wasa/lahore-reference.jpg",
        route: "http://dashboards.urbanunit.gov.pk/wssm_public/",
      },
    ],
  },

  telecom: {
    icon: <Phone className="h-5 w-5" />,
    items: [
      {
        code: "PTCL",
        name: "Pakistan Telecommunication Company Limited",
        img: "/images/telecom/ptcl-reference.jpg",
        route: "https://dbill.ptcl.net.pk/PTCLSearchInvoice.aspx",
      },
    ],
  },

  gas: {
    icon: <Flame className="h-5 w-5 text-yellow-200" />,
    items: [
      {
        code: "SNGPL",
        name: "Sui Northern Gas Pipelines Limited",
        img: "/images/gas/sngpl-reference.jpg",
        route: "https://www.sngpl.com.pk/login.jsp?mdids=85",
      },
      {
        code: "SSGC",
        name: "Sui Southern Gas Company",
        img: "/images/gas/ssgc-reference.jpg",
        route: "https://viewbill.ssgc.com.pk/web/",
      },
    ],
  },
};

export default function Navbar() {
  const { setCompanyUrl } = useCompany();
  const [activeService, setActiveService] = useState("electricity");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCompanyCode, setSelectedCompanyCode] = useState(null);

  const toggleService = (service) => {
    setActiveService(service);
    setIsDropdownOpen((prev) =>
      prev && activeService === service ? false : true
    );
  };

  const currentItems = services[activeService].items;

  return (
    <>
      <nav className="bg-green-500 text-white sticky top-0 z-50 shadow-lg">
        {/* Top Bar */}
        <div className="flex justify-between items-center px-4 py-3 max-w-7xl mx-auto">
          <div className="flex items-center space-x-2">
            <Zap className="w-6 h-6 cursor-text" />
            <h1 className="font-bold text-[30px]"> Utility Hub</h1>
          </div>

          {/* Desktop Tabs */}
          <div className="hidden lg:flex items-center space-x-1">
            {Object.keys(services).map((service) => (
              <button
                key={service}
                onClick={() => toggleService(service)}
                className={`flex items-center space-x-2 px-3 py-1 rounded ${
                  activeService === service && isDropdownOpen
                    ? "bg-white text-blue-600"
                    : "hover:bg-white/20"
                }`}
              >
                {services[service].icon}
                <span className="capitalize">{service}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    activeService === service && isDropdownOpen
                      ? "rotate-180"
                      : ""
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 bg-white/20 rounded"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Desktop Dropdown */}
        {isDropdownOpen && (
          <div className="hidden lg:block bg-blue-100 text-gray-800">
            <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 p-4">
              {currentItems.map((item) =>
                activeService === "electricity" ? (
                  <Link
                    key={item.code}
                    to={`/home1/${item.code}`}
                    state={{ img: item.img }}
                    onClick={() => {
                      setCompanyUrl(item.url);
                      setSelectedCompanyCode(item.code);
                    }}
                  >
                    <div className="bg-blue-200 hover:bg-blue-100 p-2 rounded shadow text-sm">
                      <div className="font-bold">{item.code}</div>
                      <div className="text-xs">{item.name}</div>
                    </div>
                  </Link>
                ) : (
                  <a
                    key={item.code}
                    href={item.route}
                    className="block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="bg-blue-200 hover:bg-blue-100 p-2 rounded shadow text-sm">
                      <div className="font-bold">{item.code}</div>
                      <div className="text-xs">{item.name}</div>
                    </div>
                  </a>
                )
              )}
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-blue-700">
            <div className="flex">
              {Object.keys(services).map((service) => (
                <button
                  key={service}
                  onClick={() => toggleService(service)}
                  className={`flex-1 py-2 ${
                    activeService === service ? "bg-blue-800" : "bg-blue-600"
                  }`}
                >
                  {service.toUpperCase()}
                </button>
              ))}
            </div>

            <div className="p-3 space-y-2">
              {currentItems.map((item) => (
                <Link
                  key={item.code}
                  to={`/home1/${item.code}`}
                  state={{ img: item.img }}
                  onClick={() => {
                    setCompanyUrl(item.url);
                    setSelectedCompanyCode(item.code);
                  }}
                >
                  <div className="bg-white/10 text-white p-2 rounded hover:bg-white/20">
                    <div className="font-semibold">{item.code}</div>
                    <div className="text-xs">{item.name}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
      {/* <marquee
        scrollamount="8"
        className="w-full  text-purple-400 font-medium text-[20px] py-2 px-4 "
      >
        For monthly receiving electrcity bills on your whatsApp, click on
        "Monthly subscription" link in navbar
      </marquee> */}
      {/* 👇 Conditional Rendering of IESCONavbar */}
      {/* {(activeService === "electricity" ||
        activeService === "water" ||
        activeService === "gas" ||
        activeService === "telecom") && <IESCONavbar />} */}
      {/* {activeService === "electricity" && <IESCONavbar />} */}
    </>
  );
}
