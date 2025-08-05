import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function ViewBill() {
  const location = useLocation();
  const navigate = useNavigate();
  const value = location.state;

  const handleOpenBill = () => {
    if (value?.refNumber && value?.refNumber.trim() !== "") {
      const ref = value?.refNumber.trim();
      //create a hidden form with post request b/c IESCO website not accepts ref-number in code url(that use get request)
      const form = document.createElement("form");
      form.method = "POST";
      form.action = `https:////bill.pitc.com.pk/gbill.aspx?refno=${ref}`;
      form.target = "_blank";

      //Add hidden input to form
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = "refno";
      input.value = ref;
      form.appendChild(input);
      document.body.appendChild(form);
      form.submit();
      document.body.removeChild(form);
    } else {
      alert(" Please enter a valid Reference Number.");
    }
  };

  return (
    // <div className="min-h-screen w-full flex items-center justify-center md:ml-5 md:mr-96 md:-mt-[69px] ">
    //   {/* Background decorative elements */}
    //   <div className="absolute inset-0 overflow-hidden pointer-events-none">
    //     <div className="absolute -top-40 -right-40 w-80 h-80   mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
    //     <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
    //     <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80  rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
    //   </div>

    //   {/* Main content card */}
    //   {/* hover:-translate-y-1 */}
    //   <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-xl xl:max-w-2xl">
    //     <div className="bg-white/90 backdrop-blur-sm   p-6 sm:p-8 lg:p-12 border border-white/20  transition-all duration-300 transform ">
    //       {/* Success icon with animation */}
    //       <div className="flex justify-center mb-6">
    //         <div className="relative">
    //           <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
    //             <svg
    //               className="w-10 h-10 sm:w-12 sm:h-12 text-white"
    //               fill="none"
    //               stroke="currentColor"
    //               viewBox="0 0 24 24"
    //             >
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 strokeWidth={2}
    //                 d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    //               />
    //             </svg>
    //           </div>
    //           <div className="absolute inset-0 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-ping opacity-20"></div>
    //         </div>
    //       </div>

    //       {/* Title */}
    //       <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text ">
    //         Your Bill is Ready
    //       </h1>

    //       {/* Reference/Customer ID Display */}
    //       <div className="mb-8">
    //         {value?.refNumber && value?.refNumber.trim() !== "" && (
    //           <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 sm:p-6 rounded-2xl border border-blue-100 shadow-inner">
    //             <p className="text-sm sm:text-base text-gray-600 mb-2 font-medium">
    //               Reference Number
    //             </p>
    //             <p className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-700 tracking-wider font-mono bg-white px-4 py-2 rounded-lg border-2 border-blue-200 break-all">
    //               {value.refNumber}
    //             </p>
    //           </div>
    //         )}

    //         {!value?.refNumber &&
    //           value?.custId &&
    //           value?.custId.trim() !== "" && (
    //             <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 sm:p-6 rounded-2xl border border-green-100 shadow-inner">
    //               <p className="text-sm sm:text-base text-gray-600 mb-2 font-medium">
    //                 Customer ID
    //               </p>
    //               <p className="text-lg sm:text-xl lg:text-2xl font-bold text-green-700 tracking-wider font-mono bg-white px-4 py-2 rounded-lg border-2 border-green-200 break-all">
    //                 {value.custId}
    //               </p>
    //             </div>
    //           )}
    //       </div>

    //       {/* Description */}
    //       <p className="text-gray-600 text-center mb-8 text-sm sm:text-base lg:text-lg leading-relaxed">
    //         You can now view or download your{" "}
    //         <span className="font-semibold text-blue-600">IESCO</span> bill.
    //       </p>

    //       {/* Action button */}
    //       <div className="flex justify-center">
    //         <button
    //           onClick={handleOpenBill}
    //           className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 sm:px-10 lg:px-12 py-3 sm:py-4 rounded-2xl font-bold text-sm sm:text-base lg:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl active:scale-95 min-w-[200px]"
    //         >
    //           {/* Button background animation */}
    //           <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

    //           {/* Button content */}
    //           <span className="relative flex items-center justify-center gap-2">
    //             <svg
    //               className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform duration-300"
    //               fill="none"
    //               stroke="currentColor"
    //               viewBox="0 0 24 24"
    //             >
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 strokeWidth={2}
    //                 d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    //               />
    //             </svg>
    //             Open Bill
    //           </span>

    //           {/* Button shine effect */}
    //           <div className="absolute inset-0 -top-2 -left-2 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform skew-x-12 group-hover:animate-pulse"></div>
    //         </button>
    //       </div>

    //       {/* Additional info */}
    //       <div className="mt-8 pt-6 border-t border-gray-200">
    //         <p className="text-xs sm:text-sm text-gray-500 text-center">
    //           🔒 Secure connection to IESCO billing system
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // <div className="min-h-screen w-full px-4 sm:px-6 py-8 bg-white">
    //   <div className="flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto">
    //     {/* Left: Bill Ready Card */}
    //     <div className="w-full lg:w-2/3 relative flex items-center justify-center">
    //       {/* Background Effects */}
    //       <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    //         <div className="absolute -top-40 -right-40 w-80 h-80 mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
    //         <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
    //         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
    //       </div>

    //       {/* Main Content */}
    //       <div className="relative z-10 w-full max-w-md sm:max-w-lg lg:max-w-xl">
    //         <div className="bg-white/90 backdrop-blur-sm p-6 sm:p-8 lg:p-12 border border-white/20 rounded-xl ">
    //           {/* Success Icon */}
    //           <div className="flex justify-center mb-6">
    //             <div className="relative">
    //               <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center animate-bounce">
    //                 <svg
    //                   className="w-10 h-10 sm:w-12 sm:h-12 text-white"
    //                   fill="none"
    //                   stroke="currentColor"
    //                   viewBox="0 0 24 24"
    //                 >
    //                   <path
    //                     strokeLinecap="round"
    //                     strokeLinejoin="round"
    //                     strokeWidth={2}
    //                     d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    //                   />
    //                 </svg>
    //               </div>
    //               <div className="absolute inset-0 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-ping opacity-20"></div>
    //             </div>
    //           </div>

    //           {/* Title */}
    //           <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
    //             Your Bill is Ready
    //           </h1>

    //           {/* Reference / Customer ID */}
    //           <div className="mb-8">
    //             {value?.refNumber?.trim() && (
    //               <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 sm:p-6 rounded-2xl border border-blue-100 shadow-inner">
    //                 <p className="text-sm sm:text-base text-gray-600 mb-2 font-medium">
    //                   Reference Number
    //                 </p>
    //                 <p className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-700 tracking-wider font-mono bg-white px-4 py-2 rounded-lg border-2 border-blue-200 break-all">
    //                   {value.refNumber}
    //                 </p>
    //               </div>
    //             )}

    //             {!value?.refNumber?.trim() && value?.custId?.trim() && (
    //               <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 sm:p-6 rounded-2xl border border-green-100 shadow-inner">
    //                 <p className="text-sm sm:text-base text-gray-600 mb-2 font-medium">
    //                   Customer ID
    //                 </p>
    //                 <p className="text-lg sm:text-xl lg:text-2xl font-bold text-green-700 tracking-wider font-mono bg-white px-4 py-2 rounded-lg border-2 border-green-200 break-all">
    //                   {value.custId}
    //                 </p>
    //               </div>
    //             )}
    //           </div>

    //           {/* Description */}
    //           <p className="text-gray-600 text-center mb-8 text-sm sm:text-base lg:text-lg leading-relaxed">
    //             You can now view or download your{" "}
    //             <span className="font-semibold text-blue-600">IESCO</span> bill.
    //           </p>

    //           {/* Action Button */}
    //           <div className="flex justify-center">
    //             <button
    //               onClick={handleOpenBill}
    //               className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 sm:px-10 lg:px-12 py-3 sm:py-4 rounded-2xl font-bold text-sm sm:text-base lg:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl active:scale-95 min-w-[200px]"
    //             >
    //               <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    //               <span className="relative flex items-center justify-center gap-2">
    //                 <svg
    //                   className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform duration-300"
    //                   fill="none"
    //                   stroke="currentColor"
    //                   viewBox="0 0 24 24"
    //                 >
    //                   <path
    //                     strokeLinecap="round"
    //                     strokeLinejoin="round"
    //                     strokeWidth={2}
    //                     d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    //                   />
    //                 </svg>
    //                 Open Bill
    //               </span>
    //               <div className="absolute inset-0 -top-2 -left-2 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform skew-x-12 group-hover:animate-pulse"></div>
    //             </button>
    //           </div>

    //           {/* Footer Note */}
    //           <div className="mt-8 pt-6 border-t border-gray-200">
    //             <p className="text-xs sm:text-sm text-gray-500 text-center">
    //               🔒 Secure connection to IESCO billing system
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     {/* Right: Sidebar (IESCO Links, Ads, Logos) */}
    //     <div className="w-full lg:w-1/3">
    //       {/* You can keep this exactly how it is in your original layout */}
    //       {/* Example: <SidebarComponent /> */}
    //     </div>
    //   </div>
    // </div>

    <div className="min-h-screen bg-white flex items-center justify-center  sm:ml-2 sm:mr-2 md:ml-5.5  lg:ml-16 md:mr-2 lg:mr-[32px] xl:ml-32 xl:mr-24 2xl:-ml-[-7px] 2xl:w-[100%] 2xl:h-[1260px]   ">
      <div className="bg-white/90 backdrop-blur-sm p-6 sm:p-8 lg:p-12 border border-white/20 w-full max-w-3xl 2xl:-mt-[600px]">
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center animate-bounce">
              <svg
                className="w-10 h-10 sm:w-12 sm:h-12 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="absolute inset-0 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-ping opacity-20"></div>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Your Bill is Ready
        </h1>

        {/* Reference / Customer ID */}
        <div className="mb-8">
          {value?.refNumber?.trim() && (
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 sm:p-6 rounded-2xl border border-blue-100 shadow-inner">
              <p className="text-sm sm:text-base text-gray-600 mb-2 font-medium">
                Reference Number
              </p>
              <p className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-700 tracking-wider font-mono bg-white px-4 py-2 rounded-lg border-2 border-blue-200 break-all">
                {value.refNumber}
              </p>
            </div>
          )}

          {!value?.refNumber?.trim() && value?.custId?.trim() && (
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 sm:p-6 rounded-2xl border border-green-100 shadow-inner">
              <p className="text-sm sm:text-base text-gray-600 mb-2 font-medium">
                Customer ID
              </p>
              <p className="text-lg sm:text-xl lg:text-2xl font-bold text-green-700 tracking-wider font-mono bg-white px-4 py-2 rounded-lg border-2 border-green-200 break-all">
                {value.custId}
              </p>
            </div>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-600 text-center mb-8 text-sm sm:text-base lg:text-lg leading-relaxed">
          You can now view or download your{" "}
          <span className="font-semibold text-blue-600">IESCO</span> bill.
        </p>

        {/* Action Button */}
        <div className="flex justify-center">
          <button
            onClick={handleOpenBill}
            className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 sm:px-10 lg:px-12 py-3 sm:py-4 rounded-2xl font-bold text-sm sm:text-base lg:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl active:scale-95 min-w-[200px]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative flex items-center justify-center gap-2">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              Open Bill
            </span>
            <div className="absolute inset-0 -top-2 -left-2 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform skew-x-12 group-hover:animate-pulse"></div>
          </button>
        </div>

        {/* Footer Note */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-xs sm:text-sm text-gray-500 text-center">
            🔒 Secure connection to IESCO billing system
          </p>
        </div>
      </div>
    </div>
  );
}
