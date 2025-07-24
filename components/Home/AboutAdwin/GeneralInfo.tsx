import React from "react";

const GeneralInfo = () => {
  return (
    <>
      <div className="flex flex-row gap-5 w-full">
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-orbitron text-3xl ">
            All GEOs, Currencies & Time Zones Supported
          </h4>

          <ul className="flex flex-col gap-2 ">
            <li>Correct IP & GEO matching</li>
            <li>Local currency settings</li>
            <li>Matching time zones</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4"></div>
        <div></div>
      </div>
    </>
  );
};

export default GeneralInfo;
