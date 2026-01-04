import { StoreContext } from "@/store/StoreContext";
import React from "react";
import MapAllBoundaryList from "../partials/MapAllBoundaryList";
import WebsiteFooter from "../partials/WebsiteFooter";
import WebsiteHeader from "../partials/WebsiteHeader";
import LakeList from "./LakeList";
import WaterQualityDescription from "./WaterQualityDescription";

const Lake = () => {
  const { store, dispatch } = React.useContext(StoreContext);

  // can be use for disabling scroll when modal is shown
  React.useEffect(() => {
    document.body.style.overflow =
      store.isAdd || store.isView ? "hidden" : "unset";
  }, [store.isAdd || store.isView]);

  return (
    <>
      <div className="website " id="dashboard">
        <WebsiteHeader />
        <LakeList />
        <WaterQualityDescription />

        <div id="map">
          <MapAllBoundaryList />
        </div>

        <WebsiteFooter />
      </div>
    </>
  );
};

export default Lake;
