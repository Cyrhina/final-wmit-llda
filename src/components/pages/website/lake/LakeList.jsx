import React from "react";
import StationList from "../partials/json-files/StationList.json";
import LargeMapBoundaryList from "../partials/LargeMapBoundaryList";
import LineGraph from "../partials/LineGraph";

const LakeList = () => {
  const [currentIndex, setCurrentIndex] = React.useState(1);

  return (
    <>
      <div className="mb-5">
        <div className="website_container">
          <div className="flex flex-col items-center justify-center my-10">
            <h2 className="font-open-sans-regular text-[clamp(36px,6vw,40px)] leading-[1.1]">
              Laguna Lake
            </h2>
            <p className="font-open-sans-regular sm:text-center text-justify leading-6 pt-6 text-sm">
              The Laguna Lake Water Quality System is an interactive web-based
              platform designed to visualize environmental data from Laguna de
              Bay and its tributaries. Developed in support of the Laguna Lake
              Development Authority (LLDA), the system provides public access to
              water quality information through dynamic maps, charts, and
              station-specific summaries.
            </p>
          </div>
          <div className="relative lg:grid grid-cols-[200px_1fr] h-full  ">
            <div className="relative mr-3 lg:block hidden">
              <p className="text-base font-bold text-center bg-gray-100 py-1">
                Station
              </p>
              <ul className=" bg-gray-100">
                {StationList.map((item, index) => (
                  <li
                    key={index}
                    className={`flex relative group ${
                      Number(item.id) === currentIndex ? "bg-white" : ""
                    }`}
                  >
                    <button
                      onClick={() => setCurrentIndex(item.id)}
                      className={`w-full !text-left p-[9px] group-hover:bg-gray-300  ${
                        Number(item.id) === Number(currentIndex)
                          ? " rounded-bl-2xl rounded-tl-2xl bg-[#355874] text-white group-hover:!bg-[#355874]"
                          : ""
                      }`}
                    >
                      {item.name}
                    </button>
                    {Number(item.id) === Number(currentIndex) ? (
                      <button className="arrow-right"></button>
                    ) : (
                      ""
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative mt-4 sm:w-44 w-full lg:hidden block  ">
              <label>Station</label>
              <select
                value={currentIndex}
                onChange={(e) => setCurrentIndex(e.target.value)}
              >
                <optgroup label="Select a station">
                  {StationList.map((item, index) => {
                    return (
                      <option key={index} value={item.id}>
                        {item.name}
                      </option>
                    );
                  })}
                </optgroup>
              </select>
            </div>
            <div className="md:h-[38rem] lg:h-[37rem] sm:h-[75rem] h-[74rem] ">
              <div className="relative mb-5">
                {StationList.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                        Number(item.id) === Number(currentIndex)
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                    >
                      <div className="max-w-[1430px] w-full m-auto">
                        <div className="md:grid md:grid-cols-2 w-full items-center md:gap-5 px-[2rem] lg:px-0 ">
                          <h1 className="font-open-sans-regular text-center text-xl leading-[1.5] mb-5 md:hidden  ">
                            Water Quality Status
                            <br />
                            <span>{item.name}</span>
                          </h1>{" "}
                          <LargeMapBoundaryList item={item} />
                          <div className=" ">
                            <div className="flex flex-col justify-center md:ml-5 ">
                              <h2 className="font-open-sans-regular text-center text-xl leading-[1.1] md:block hidden  ">
                                Water Quality Status
                              </h2>
                              <ul className="text-white bg-[#75c3f3] grid grid-cols-[1fr_6rem] font-open-sans-regular max-w-170 leading-6 rounded-md py-1 pl-2 pr-3 mt-5 text-sm">
                                <li>Disolved Oxygen (DO): </li>
                                <li className="text-right">{item.do} mg/L</li>
                              </ul>
                              <ul className="text-white bg-[#64A78C] grid grid-cols-[1fr_6rem] font-open-sans-regular max-w-170 leading-6 rounded-md py-1 pl-2 pr-3 mt-1 text-sm">
                                <li>pH Level (pH): </li>
                                <li className="text-right">{item.ph}</li>
                              </ul>
                              <ul className="text-white bg-[#6EB7CA] grid grid-cols-[1fr_6rem] font-open-sans-regular max-w-170 leading-6 rounded-md py-1 pl-2 pr-3 mt-1 text-sm">
                                <li>Biochemical Oxygen Demand (BOD): </li>
                                <li className="text-right">{item.bod}</li>
                              </ul>
                              <ul className="text-white bg-[#355874] grid grid-cols-[1fr_6rem] font-open-sans-regular max-w-170 leading-6 rounded-md py-1 pl-2 pr-3 mt-1 text-sm">
                                <li>Chemical Oxygen Demand (COD): </li>
                                <li className="text-right">{item.cod}</li>
                              </ul>
                              <ul className="text-white bg-[#84A6BF] grid grid-cols-[1fr_6rem] font-open-sans-regular max-w-170 leading-6 rounded-md py-1 pl-2 pr-3 mt-1 text-sm">
                                <li>Turbidity : </li>
                                <li className="text-right">{item.turbidity}</li>
                              </ul>
                              <ul className="text-white bg-[#F19727] grid grid-cols-[1fr_6rem] font-open-sans-regular max-w-170 leading-6 rounded-md py-1 pl-2 pr-3 mt-1 text-sm">
                                <li>Temperature (Temp): </li>
                                <li className="text-right">
                                  {item.temperature} °C
                                </li>
                              </ul>
                              <ul className="text-white bg-[#23504B] grid grid-cols-[1fr_6rem] font-open-sans-regular max-w-170 leading-6 rounded-md py-1 pl-2 pr-3 mt-1 text-sm">
                                <li>Nitrate Phosphate Levels (NPL): </li>
                                <li className="text-right">
                                  {item.nitrate_phosphate_levels}
                                </li>
                              </ul>

                              <div className="w-full md:!h-[15rem] h-[20rem]  mt-2">
                                <LineGraph station={item} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LakeList;
