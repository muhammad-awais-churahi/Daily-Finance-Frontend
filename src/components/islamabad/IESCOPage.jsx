import React from "react";
import Home from "./Home";
import IESCOLink from "./IESCOLink";

export default function IESCOPage() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20 xl:px-36 mt-6">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left - Home (70%) */}
        <div className="w-full lg:w-[70%]">
          <Home />
        </div>

        {/* Right - Links (30%) */}
        <div className="w-full lg:w-[30%]">
          <IESCOLink />
        </div>
      </div>
    </div>
  );
}
