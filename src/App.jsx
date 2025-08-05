import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
//islamabad bill files
import IESCONavbar from "./components/islamabad/IESCONavbar";
// home files
import Home from "./components/islamabad/Home";
import Home1 from "./components/islamabad/Home1";
import IESCOLink from "./components/islamabad/IESCOLink";
import Footer from "./components/Footer";
import Contact from "./components/islamabad/Contact";
import NewContact from "./components/islamabad/NewContact";

// check bill,calculate-bill,bill-subscription files
import CheckBill from "./components/islamabad/CheckBill";
import ViewBill from "./components/islamabad/ViewBill";
import BillCal from "./components/islamabad/BillCal";
// import BillSubs from "./components/islamabad/BillSubs";
import BillHistory from "./components/islamabad/BillHistory";
import FetchData from "./components/islamabad/FetchData";
import Subs from "./components/islamabad/Subs";

//  companies bill files
// import Lahore from "./components/companies/Lahore";
// import Faisalabad from "./components/companies/Faisalabad";
// import Multan from "./components/companies/Multan";
// import Hyderabad from "./components/companies/Hyderabad";
// import Sukkhur from "./components/companies/Sukkhur";
// import Gujranwala from "./components/companies/Gujranwala";
// import Peshawar from "./components/companies/Peshawar";
// import Quetta from "./components/companies/Quetta";
// import Tribal from "./components/companies/Tribal";

export default function App() {
  return (
    <div className="min-h-screen bg-sky-50">
      {/* bg-sky-200 */}
      <Navbar />

      {/* <IESCONavbar /> */}

      <div className="max-w-screen-xl gap-3  mx-auto flex flex-col sm:gap-4 md:flex-row   md:gap-3 lg:gap-3 xl:gap-3 2xl:gap-0 px-4 mt-6 ">
        <div className="flex-1">
          <Routes>
            {/* home file */}
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            {/* <Route path="/home1" element={<Home1 />} /> */}
            <Route path="/home1/:company" element={<Home1 />} />
            {/* <Route path="/home1" element={<Home1 />} /> */}
            <Route path="/home/:companySelection" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
            <Route path="/newcontact" element={<NewContact />} />
            {/* check bill ,bill-Subsand cal-Bill files */}
            <Route path="/view-bill" element={<ViewBill />} />
            <Route path="/checkbill" element={<CheckBill />} />
            <Route path="/bill-cal/:company" element={<BillCal />} />
            <Route path="/bill-cal" element={<BillCal />} />
            {/* <Route path="/bill-cal" element={<BillCal />} /> */}
            {/* <Route path="/bill-subs" element={<BillSubs />} /> */}
            <Route path="/bills-subscr" element={<Subs />} />
            <Route path="/bill-history" element={<BillHistory />} />
            {/* companies files */}
            <Route path="/home1/:company" element={<Home1 />} />
            {/* <Route path="/faslbd" element={<Faisalabad />} />
            <Route path="/mltn" element={<Multan />} />
            <Route path="/hydrbd" element={<Hyderabad />} />
            <Route path="/skhr" element={<Sukkhur />} />
            <Route path="/gjrwla" element={<Gujranwala />} />
            <Route path="/pshwr" element={<Peshawar />} />
            <Route path="/quetta" element={<Quetta />} />
            <Route path="/tribal" element={<Tribal />} /> */}
            {/* <Route path="/home1/:company" element={<Home1 />} />
            <Route path="/home1/:company" element={<Home1 />} />
            <Route path="/home1/:company" element={<Home1 />} />
            <Route path="/home1/:company" element={<Home1 />} />
            <Route path="/home1/:company" element={<Home1 />} />
            <Route path="/home1/:company" element={<Home1 />} />
            <Route path="/home1/:company" element={<Home1 />} />
            <Route path="/home1/:company" element={<Home1 />} /> */}
            <Route
              path="/old-data/:refNumber/:company"
              element={<FetchData />}
            />
          </Routes>
        </div>
        <div className="w-full md:w-1/3 ">
          <IESCOLink />
        </div>
      </div>
      <Footer />
    </div>
  );
}
