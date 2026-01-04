import { StoreContext } from "@/store/StoreContext";
import LagunaPhoto from "@/svg/LagunaPhoto";
import React from "react";

const WebsiteHeader = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [navVal, setNavVal] = React.useState(1);

  return (
    <>
      <header className="website_header sticky top-0 bg-white shadow-2xl z-[99999999999]">
        <div className="website_container">
          <div className="website_header_wrapper">
            <div className="flex">
              <LagunaPhoto textClassName="text-base" />
            </div>
            <ul className={`website_header_nav `}>
              <li
                className={` cursor-pointer hover:text-green-800 hover:font-bold ${
                  Number(navVal) === 1 ? "text-green-800 font-bold" : ""
                }`}
                onClick={() => setNavVal(1)}
              >
                <a href="#dashboard">Dashboard</a>
              </li>
              <li
                className={` cursor-pointer hover:text-green-800 hover:font-bold  ${
                  Number(navVal) === 2 ? "text-green-800 font-bold" : ""
                }`}
                onClick={() => setNavVal(2)}
              >
                <a href="#description">Description</a>
              </li>
              <li
                className={` cursor-pointer hover:text-green-800 hover:font-bold   ${
                  Number(navVal) === 3 ? "text-green-800 font-bold" : ""
                }`}
                onClick={() => setNavVal(3)}
              >
                <a href="#map">Map</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default WebsiteHeader;
