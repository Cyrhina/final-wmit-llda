import LagunaPhoto from "@/svg/LagunaPhoto";
import React from "react";

const WebsiteFooter = () => {
  return (
    <>
      <footer className=" ">
        <div className="website_container">
          <div className="website_footer_container">
            <div className="col-span-full md:col-span-1">
              <div className="flex">
                <LagunaPhoto height={52} textClassName="text-base" />
              </div>
              <div className="text-gray-500 leading-7 tracking-wide max-w-130  text-base">
                <p className="pt-10 font-open-sans-regular">
                  #524862 LAGUNA Provincial Government of Laguna Provincial
                  Capitol Compound, P. Guevarra St., Santa Cruz, Laguna
                </p>
                <a href="mailto:someone@example.com">lagunalakes@gmail.com</a>
                <p className="mt-2 font-open-sans-regular">
                  +63900-000-0000 / +63900-000-0000
                </p>
              </div>
            </div>

            <ul className="website_footer_items ">
              <li className="text-center">
                <h4>Connect</h4>
              </li>
              <li> Facebook</li>
              <li> Instagram</li>
              <li> Youtube</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 font-open-sans-regular">
          <span className="inline-block w-full text-black/35 py-2.5 text-center text-xs tracking-wide">
            <span className="inline-block tracking-tight">Copyright</span> 2025.
            All Right Reserved
          </span>
        </div>
      </footer>
    </>
  );
};

export default WebsiteFooter;
