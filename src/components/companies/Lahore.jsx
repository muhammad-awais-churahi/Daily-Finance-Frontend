import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export default function Lahore() {
  const navigate = useNavigate();
  const [refNum, setRefNum] = useState({
    refNumber: "",
    custId: "",
  });
  const appliances = [
    {
      name: "Fan",
      detail: "On average, an 80W fan consumes 4 units of electricity/day.",
    },
    {
      name: "TV",
      detail: "TV consumes around 3 units a day.",
    },
    {
      name: "24W energy saver",
      detail: "uses 1–2 units a day.",
    },
    {
      name: "AC (1-ton)",
      detail: "Consumes around 18 units if it runs for 24 hours straight.",
    },
    {
      name: "Refrigerator",
      detail: "Consumes around 4–6 units, depending on size and age.",
    },
  ];
  //divsions and circles
  const data = [
    {
      title: "Islamabad Circle",
      divisions: [
        "Islamabad Division 1",
        "Islamabad Division 2",
        "Barakahu Division",
      ],
    },
    {
      title: "Rawalpindi Circle",
      divisions: [
        "Rawat Division",
        "City Division",
        "Cantt Division (Rawalpindi)",
        "Satellite Town Division",
        "Westridge Division",
        "Tariqabad Division",
      ],
    },
    {
      title: "Attock Circle",
      divisions: ["Taxila Division", "Pindigheb Division", "Attock Division"],
    },
    {
      title: "Jhelum Circle",
      divisions: [
        "Jhelum Division 1",
        "Jhelum Division 2",
        "Gujar Khan Division",
      ],
    },
    {
      title: "Chakwal Circle",
      divisions: [
        "Chakwal Division",
        "Talagang Division",
        "Dhudial Division",
        "Pind Dadan Khan Division",
      ],
    },
  ];
  const questions = [
    {
      question: "How to check IESCO online bill?",
      answer:
        "You can check iesco online bill at iescobill.pk by entering 14 digit reference number.",
    },
    {
      question: "How to calculate IESCO estimate bill?",
      answer:
        "You can calculate iesco electricity cost of your residential connection by entering consumed units here.",
    },
    {
      question: "Can I check bill by meter number?",
      answer:
        "IESCO subscribers can only check bill by 14 digit reference number, not by meter number.",
    },
    {
      question: "Can I check IESCO bill by name or address?",
      answer:
        "Sorry, you can not check your bill by name or address but only using reference number. If you have 14 digit reference number, you can see your bill here.",
    },
    {
      question: "How to get previous month bill?",
      answer:
        "If you did not receive your bill, you can get a duplicate copy of your last month bill here.",
    },
    {
      question: "What is unit rate for IESCO residential connection?",
      answer: "You can check iesco's residential units rates here.",
    },
    {
      question: "How to change consumer name in IESCO electricity bill?",
      answer:
        "The procedure to change consumer name on iesco bill is same like applying for new connection. You can visit the iesco office and apply for the name change request.",
    },
    {
      question: "How can I apply for a new connection?",
      answer:
        'If you want a new iesco connection, you will have to fill and submit "Application and Agreement" form which is also known as A&A form.',
    },
    {
      question: "Can I check IESCO bill by ID card (CNIC) number?",
      answer:
        "Currently you can only check the bill by 14 digit reference number.",
    },
  ];
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setRefNum({
      ...refNum,
      [name]: value,
    });
  };
  //show bill
  const showBill = () => {
    const { refNumber, custId } = refNum;
    if (!refNumber && !custId) {
      alert("Please enter either Reference Number or Customer ID.");
      return;
    } else if (refNumber && refNumber.trim() !== "") {
      navigate("/view-bill", {
        state: {
          refNumber,
        },
      });
    } else if (custId && custId.trim() !== "") {
      window.open("https://bill.pitc.com.pk/lescobill", "_blank");
    }
  };

  return (
    // <div className="min-h-screen bg-white flex items-center justify-center ml-32">
    //   <div className="w-full max-w-3xl bg-white rounded-lg p-6">
    <div className="min-h-screen bg-white flex items-center justify-center lg:ml-2">
      <div className="w-full lg:px-2   sm:px-4">
        <div className="w-full max-w-3xl bg-white px-8 py-10">
          <h2 className="text-xl md:text-2xl font-bold text-center mb-4">
            LESCO Bill Online June 2025
          </h2>
          <p className="text-gray-700 text-sm text-center mb-6">
            LESCOBILL.PK is a free website where you can check your IESCO bill
            and download a duplicate copy of the bill quite easily. Here you can
            view your current electricity bill (bijli bill), find all
            information about previous bill, check consumer name and all other
            history about the bill.
          </p>
          {/* Form */}
          <div className="text-center space-y-4 border border-dashed border-gray-400 p-4 rounded-md">
            <input
              type="text"
              placeholder="Enter Reference Number"
              onChange={handleChange}
              name="refNumber"
              value={refNum.refNumber}
              className="w-full md:w-2/3 px-2 py-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-center border-2 border-blue-500 mt-5"
            />
            <div className="text-center text-gray-600">or</div>
            <input
              type="text"
              placeholder="10 Digit Customer ID"
              onChange={handleChange}
              name="custId"
              value={refNum.custId}
              className="w-full md:w-2/3 px-2 py-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-center border-2 border-blue-500"
            />
            <div className="text-center">
              <input type="checkbox" id="save" className="mr-2" />
              <label htmlFor="save" className="text-sm text-gray-700">
                Save this number
              </label>
            </div>
            <button
              className="bg-gray-500 text-white py-2 rounded-md font-semibold transition duration-300 w-full md:w-1/3 cursor-pointer"
              onClick={showBill}
            >
              CHECK BILL
            </button>
          </div>
          {/* Notice */}
          <p className="text-[17px] italic text-center text-gray-500 mt-4">
            -- New IESCO bills for due date up to June-22-2025 are available to
            download
          </p>
          {/* Bottom text */}
          <p className="text-lg text-gray-700 mt-4 text-justify">
            Either you want to check <strong>iesco bill online</strong> for your
            home, office or shop, you can search your bill by Reference Number
            or Customer ID and then download or print a copy of your bill for
            free. IESCOBILL.PK is the first website where you can save your
            reference numbers, and then check your latest bills with single
            click every month.
            <br />
            <br />
            If you don’t know where to find reference number or customer id,
            please read Reference Number section below. For further assistance
            about checking your electricity bill, you can read steps to check
            iesco bill. If you are looking for Lahore wapda bill, then please
            visit 'lescobill.pk' website. IESCO customers can generate and
            download their e bill either it is their first bill or a latest bill
            for an old meter connection. With most consumers from Islamabad, and
            Rawalpindi, customers from Attok to Jhelum can find their bill
            information by entering 14 digit reference number or 10 digit
            customer id. Consumers can also find out registration record, bill
            status, bill slabs etc. So enter reference number above to check
            your iesco duplicate bill and also check if your previous bill was
            paid or not in the bill history.
          </p>
          <img
            src="https://iescobill.pk/images/lesco-logo.jpg"
            alt="IESCO Bill"
            className="mt-4 w-1/3 h-auto object-contain mx-auto"
          />
          <p className="text-lg text-gray-700 mt-4 text-justify">
            Islamabad Electric Supply Company (IESCO) is a division of WAPDA. It
            was started in 1998 to handle the responsibilities and functions of
            Islamabad area. IESCO supplies electricity to the region from Attock
            to Jhelum. So if you are an IESCO subscriber, and looking for a
            duplicate online bill, you are on the right place.
          </p>
          <br />
          <p className="text-lg text-gray-700 mt-4 text-justify">
            Islamabad Electric Supply Company (IESCO) is a division of WAPDA. It
            was started in 1998 to handle the responsibilities and functions of
            Islamabad area. IESCO supplies electricity to the region from Attock
            to Jhelum. So if you are an IESCO subscriber, and looking for a
            duplicate online bill, you are on the right place.
          </p>
          <p className="text-lg text-gray-700 mt-4 text-justify">
            Islamabad Electric Supply Company (IESCO) is a division of WAPDA. It
            was started in 1998 to handle the responsibilities and functions of
            Islamabad area. IESCO supplies electricity to the region from Attock
            to Jhelum. So if you are an IESCO subscriber, and looking for a
            duplicate online bill, you are on the right place.
          </p>
          <h1 className="text-5xl md:text-2xl font-bold mt-5">
            Tips to reduce the IESCO bill
          </h1>
          <p className="text-lg text-gray-700 mt-4 text-justify">
            Lets take a quick overview on how many units your day-to-day
            appliances consume and how you can reduce electricity bill by
            turning off unnecessary devices. Here is the list of items with
            estimate units of electricity it consumed if used for 24 hours
          </p>
          <div className="bg-white p-4 rounded w-full">
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {appliances.map((item, index) => (
                <li key={index}>
                  <span className="font-semibold text-black">{item.name}</span>:{" "}
                  {item.detail}
                </li>
              ))}
            </ul>
          </div>
          {/* ✅ START IESCO PEAK HOURS SECTION */}
          {/* <div className="bg-sky-50 min-h-screen p-4 md:p-8 mt-6"> */}
          {/* <div className="max-w-4xl mx-auto bg-white shadow rounded-lg p-6"> */}
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            IESCO Peak Hours:
          </h2>
          <p className="mb-4 text-gray-700">
            Here are the IESCO peak hours in 2025:
          </p>
          {/* Table */}
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border border-gray-200">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="py-2 px-4 font-semibold border-b">Month</th>
                  <th className="py-2 px-4 font-semibold border-b">
                    Peak Hours Timing
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="py-2 px-4 border-b">December to February</td>
                  <td className="py-2 px-4 border-b">5PM to 9PM</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-2 px-4 border-b">March to May</td>
                  <td className="py-2 px-4 border-b">6PM to 10PM</td>
                </tr>
                <tr className="bg-white">
                  <td className="py-2 px-4 border-b">June to August</td>
                  <td className="py-2 px-4 border-b">7PM to 11PM</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-2 px-4 border-b">September to November</td>
                  <td className="py-2 px-4 border-b">6PM to 10PM</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* Tips List */}
          <p className="text-gray-700 mb-4">
            So if you want to reduce your electricity bill amount, you must
            watch out how many appliances are being used at a time. Here are
            some tips to reduce electricity bill amount:
          </p>
          <ul className="list-decimal list-inside text-gray-700 space-y-2 mb-6">
            <li>Switch off unnecessary appliances.</li>
            <li>
              Instead of turning on five energy savers, try to manage with four
              or even less.
            </li>
            <li>
              Utilize daylight to lighten your rooms instead of electric bulbs
              where possible.
            </li>
            <li>Don’t use ACs during the peak hours.</li>
            <li>Use your ACs at 26 degrees.</li>
            <li>
              Keep your rooms ventilated with fresh air to reduce use of ACs.
            </li>
          </ul>
          {/* Understanding Bill Section */}
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Understanding IESCO Bill:
          </h3>
          <p className="text-gray-700 mb-2">
            There are numerous parameters in the bill, we have explained some of
            them below:
          </p>
          <p className="text-gray-700">
            <strong>Connection Date:</strong>
            <br />
            It is the date when you initially registered yourself in IESCO’s
            database for electricity connection.
          </p>
          <br />
          <p className="text-gray-700">
            <strong>Reference Number:</strong>
            <br />
            <br />
            It is the date when you initially registered yourself in IESCO’s
            database for electricity connection. It is the date when you
            initially registered yourself in IESCO’s database for electricity
            connection. It is the date when you initially registered yourself in
            IESCO’s database for electricity connection.
          </p>
          <img src="https://iescobill.pk/images/reference-gif.gif" alt="" />
          <br />
          <p className="text-gray-700">
            <strong className="text-xl block mb-2">Dates:</strong>
            <br />
            <p>
              It is the date when you initially registered yourself in IESCO’s
              database for electricity connection. It is the date when you
              initially registered yourself in IESCO’s database
            </p>
          </p>
          <br />
          <p className="text-gray-700">
            <strong className="text-xl block mb-2">FPA:</strong>
            <br />
            It is the date when you initially registered yourself in IESCO’s
            database for electricity connection. It is the date when you
            initially registered yourself in IESCO’s database
          </p>
          <br />
          <p className="text-gray-700">
            <strong className="text-xl  block mb-2">TR Surcharge:</strong>
            <br />
            It is the date when you initially registered yourself in IESCO’s
            database for electricity connection. It is the date when you
            initially registered yourself in IESCO’s database.It is the date
            when you initially registered yourself in IESCO’s database
          </p>
          <br />
          <p className="text-gray-700">
            <strong className="text-xl block mb-2">
              QTR Tariff Adj / DMC:
            </strong>
            <br />
            It is the date when you initially registered yourself in IESCO’s
            database for electricity connection. It is the date when you
            initially registered yourself in IESCO’s database
          </p>
          <br />
          <p className="text-gray-700">
            <strong className="text-xl block mb-2">FC Surcharge:</strong>
            <br />
            It is the date when you initially registered yourself in IESCO’s
            database for electricity connection. It is the date when you
            initially registered yourself in IESCO’s database
          </p>
          <br />
          <p className="text-gray-700">
            <strong className="text-xl block mb-2">Bill Timing:</strong>
            <br />
            It is the date when you initially registered yourself in IESCO’s
            database for electricity connection. It is the date when you
            initially registered yourself in IESCO’s database
          </p>
          <br />
          <p className="text-gray-700">
            <h2 className="text-black text-2xl font-bold">IESCO Structure</h2>
            <br />
            <p>
              {" "}
              To keep the electric supply uninterrupted and maintain customer
              satisfaction, IESCO is divided into 4 circles, 19 divisions and
              104 subdivisions. Superintending Engineers (SEs) are head of
              Circles whereas Divisions are supervised by Executive Engineers
              (XENs). All Subdivisions are managed by Sub Divisional Officers
              (SDOs) and also each division has a Customer Services Officer
              which is called CSO.
            </p>{" "}
            <br />
            <p>
              The company takes care of the electricity distribution network in
              the administrative districts of Rawalpindi, Chakwal, Attock,
              Jhelum and Federal Capital Islamabad.
            </p>{" "}
            <br />
            <p>
              {" "}
              The company takes care of the electricity distribution network in
              the administrative districts of Rawalpindi, Chakwal, Attock,
              Jhelum and Federal Capital Islamabad.
            </p>
          </p>{" "}
          <br />
          <h2 className="text-black text-2xl font-bold">
            Circles and Divisions:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((circle, index) => (
              <div key={index} className="bg-white  rounded-lg p-5">
                <h3 className="text-[18px] font-bold text-gray-600 mb-2">
                  {circle.title}
                </h3>
                <ul className="list-disc list-inside text-gray-700">
                  {circle.divisions.map((division, i) => (
                    <li key={i}>{division}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-gray-700">
            <h2 className="text-black text-xl font-bold mt-2.5">
              How to contact IESCO (Complaints & Helpline)
            </h2>
          </p>
          <br />
          <p>
            {" "}
            For complains, you can visit the billing complaint resolution desk
            at IESCO Head Office located Street # 40 Sector G-7/4 Islamabad. You
            can visit that address and submit your complaints. You can also
            submit your complaintto the IESCO CEO by sending your complaint
            email to{" "}
            <a
              href="ce@iesco.com.pk."
              className="text-blue-400 hover:text-blue-600  hover:underline"
            >
              ce@iesco.com.pk.
            </a>
          </p>{" "}
          <br />
          <p>
            Here is IESCO helpline number to:{" "}
            <a
              href="ce@iesco.com.pk."
              className="text-blue-400 hover:text-blue-600  hover:underline"
            >
              051-9252937.
            </a>
          </p>{" "}
          <br />
          <p>
            If you are looking for nearest customer services center, you can
            check this complete list of{" "}
            <a
              href="ce@iesco.com.pk."
              className="text-blue-400 hover:text-blue-600 hover:underline"
            >
              customer services centers.
            </a>
          </p>{" "}
          <p className="text-gray-700">
            <h2 className="text-black text-3xl font-bold mt-2.5">FAQs</h2>
          </p>
          {/* <div className="bg-white p-6 rounded shadow-md max-w-3xl mx-auto mt-8"> */}
          <Accordion type="single" collapsible className="w-full mt-4">
            {questions.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <p className="text-gray-600 mt-2">
            For further inquiries related to your bill, you can{" "}
            <Link
              to="/contact"
              className="text-blue-400 hover:text-blue-600 hover:underline"
            >
              contact us.
            </Link>
          </p>
          {/* </div> */}
        </div>
        {/* </div> */}
        {/* ✅ END IESCO PEAK HOURS SECTION */}
      </div>
      //{" "}
    </div>
  );
}
