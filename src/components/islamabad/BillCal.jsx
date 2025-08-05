import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function BillCal() {
  const { company } = useParams();
  const companySelected = company?.toUpperCase() || "Electric";
  const companyPath = company?.toLowerCase() + "bill" || "Electric";
  console.log(companyPath);
  const [units, setUnits] = useState("");
  const [billDetails, setBillDetails] = useState(null);
  //calculating  bill

  const billCall = () => {
    const unit = parseFloat(units);
    if (isNaN(unit) || unit <= 0) {
      alert("plz enter valid number of units");
    }
    //units b/w 1 &100;
    else if (unit >= 1 && unit <= 100) {
      const costOfElectricity = unit * 16;
      const gst = costOfElectricity * (17 / 100);
      const electricityDuty = costOfElectricity * (1.5 / 100);
      const fcSurcharge = unit * 0.43;
      const meterFee = 140;
      const tvFee = 35;
      const njSurcharge = unit * 0.43;
      const total =
        costOfElectricity +
        electricityDuty +
        fcSurcharge +
        meterFee +
        tvFee +
        njSurcharge;
      setBillDetails({
        costOfElectricity: costOfElectricity.toFixed(2),
        gst: gst.toFixed(2),
        electricityDuty: electricityDuty.toFixed(2),
        fcSurcharge: fcSurcharge.toFixed(2),
        meterFee: meterFee.toFixed(2),
        tvFee: tvFee.toFixed(2),
        njSurcharge: njSurcharge.toFixed(2),
        total: total.toFixed(2),
      });
    }
    //units b/w 201 or above;
    else if (unit >= 101 && unit <= 200) {
      const costOfElectricity = unit * 22;
      const gst = costOfElectricity * (17 / 100);
      const electricityDuty = costOfElectricity * (1.5 / 100);
      const fcSurcharge = unit * 0.43;
      const meterFee = 140;
      const tvFee = 35;
      const njSurcharge = unit * 0.43;
      const total =
        costOfElectricity +
        electricityDuty +
        fcSurcharge +
        meterFee +
        tvFee +
        njSurcharge;
      setBillDetails({
        costOfElectricity: costOfElectricity.toFixed(2),
        gst: gst.toFixed(2),
        electricityDuty: electricityDuty.toFixed(2),
        fcSurcharge: fcSurcharge.toFixed(2),
        meterFee: meterFee.toFixed(2),
        tvFee: tvFee.toFixed(2),
        njSurcharge: njSurcharge.toFixed(2),
        total: total.toFixed(2),
      });
    }
    //units b/w 101 &200;
    else if (unit >= 201) {
      const costOfElectricity = unit * 27;
      const gst = costOfElectricity * (17 / 100);
      const electricityDuty = costOfElectricity * (1.5 / 100);
      const fcSurcharge = unit * 0.43;
      const meterFee = 140;
      const tvFee = 35;
      const njSurcharge = unit * 0.43;
      const total =
        costOfElectricity +
        electricityDuty +
        fcSurcharge +
        meterFee +
        tvFee +
        njSurcharge;
      setBillDetails({
        costOfElectricity: costOfElectricity.toFixed(2),
        gst: gst.toFixed(2),
        electricityDuty: electricityDuty.toFixed(2),
        fcSurcharge: fcSurcharge.toFixed(2),
        meterFee: meterFee.toFixed(2),
        tvFee: tvFee.toFixed(2),
        njSurcharge: njSurcharge.toFixed(2),
        total: total.toFixed(2),
      });
    }
  };
  return (
    // <div className="min-h-screen bg-white p-4 ml-0 sm:ml-10 lg:ml-32">
    //   <div className="max-w-4xl bg-white rounded-lg overflow-hidden">
    //     {/* Header */}
    //     <div className="bg-white border-b border-gray-200 p-6">
    <div className="min-h-screen bg-white flex items-center justify-center  sm:ml-2 sm:mr-2 md:ml-5.5  lg:ml-16 md:mr-2 lg:mr-[32px] xl:ml-32 xl:mr-24 2xl:-ml-[-7px] 2xl:w-[100%] ">
      <div className="w-full lg:px-2   sm:px-4">
        <div className="w-full max-w-3xl bg-white px-8 py-10">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            {companySelected} Bill Calculator 2025
          </h1>
          <p className="text-sm text-gray-600 mb-4">
            Updated: January 06, 2024
          </p>

          <div className="text-sm text-gray-700 leading-relaxed mb-6">
            <p className="mb-3">
              If you want to calculate an estimate {companySelected} bill amount
              online based on units consumed for your residential connection,
              we've built a simple{" "}
              <span className="font-semibold text-blue-600">
                {companySelected} bill calculator
              </span>{" "}
              for you. We have implemented {companySelected} 's tariff updated
              on October 01, 2022 to generate estimated electricity cost for
              you. This calculator is only built for the 'Residential'
              connections. If you are a Commercial or Industry subscriber, we
              recommend you to view{" "}
              <span className="text-blue-600 ">{companySelected} tariff</span>{" "}
              and calculate your bill based on unit rates of your related
              consumer type.
            </p>
          </div>
        </div>

        {/* Calculator Section */}
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Enter Units and Calculate your bill:
          </h2>

          <div className="bg-blue-200 p-6 rounded-lg border border-blue-200">
            <div className="bg-white p-6 rounded-lg border border-blue-200">
              <div className="mb-4">
                <input
                  type="number"
                  placeholder="Enter Units"
                  value={units}
                  onChange={(e) => setUnits(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>

              {/* Centered Checkbox Label */}
              <div className="mb-4 flex justify-center">
                <label className="flex items-center text-sm text-gray-700">
                  <input type="checkbox" className="mr-2" />I am consuming 200
                  or less units for last 6 months ?
                </label>
              </div>

              {/* Centered Button */}
              <div className="flex justify-center mb-4 ">
                <button
                  className=" bg-sky-500 text-white py-2 px-4 rounded-md "
                  onClick={billCall}
                >
                  Calculate
                </button>
              </div>

              {/* Results shown separately below */}
              {billDetails && (
                <div className="mt-6 border-t pt-4 space-y-2 text-center">
                  <div>
                    Cost of Electricity: Rs. {billDetails.costOfElectricity}
                  </div>
                  <div>F.C Surcharge: Rs. {billDetails.fcSurcharge}</div>
                  <div>Electricity Duty: Rs. {billDetails.electricityDuty}</div>
                  <div>Meter Rent: Rs. {billDetails.meterFee}</div>
                  <div>TV Fee: Rs. {billDetails.tvFee}</div>
                  <div>GST: Rs. {billDetails.gst}</div>
                  <div>N.J Surcharge: Rs. {billDetails.njSurcharge}</div>
                  <hr />
                  <div className="font-bold text-lg">
                    Total Bill: Rs. {billDetails.total}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bill Info Section - Separate */}
        <div className="p-6 pt-0">
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <img
              src="https://iescosite.s3.amazonaws.com/iesco-bill-calculator.jpg"
              alt="IESCO Bill"
              className="w-full h-auto mb-4 rounded"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {companySelected} Bill Unit Rates:
            </h3>
            <p className="text-sm text-gray-700 mb-2">
              You can find{" "}
              <Link to={`/home/${companySelected}`}>
                <span className="text-blue-600 underline cursor-pointer">
                  {companySelected}
                </span>{" "}
              </Link>
              unit rates for residential in this{" "}
              <a
                href="https://iescobill.pk/tariff-october-01-2022/"
                //   target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-blue-600 underline cursor-pointer">
                  tariff
                </span>
              </a>
              .
            </p>
            <a
              href={`https://bill.pitc.com.pk/${companyPath}`}
              //   target="_blank"
              rel="noopener noreferrer"
            >
              <p className="text-blue-600 font-semibold underline cursor-pointer">
                {companySelected} Online Bill
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
