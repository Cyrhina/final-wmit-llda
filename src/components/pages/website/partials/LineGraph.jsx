import { StoreContext } from "@/store/StoreContext";
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from "chart.js";
import React from "react";
import { Line } from "react-chartjs-2";

const LineGraph = ({ station }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement, // ✅ REQUIRED
    LineElement,
    Tooltip,
    Legend
  );
  const data = {
    labels: ["DO", "pH", "BOD", "COD", "Turbidity", "Temp", "NPL"],
    datasets: [
      {
        label: station.name,
        data: [
          station.do,
          station.ph,
          station.bod,
          station.cod,
          station.turbidity,
          station.temperature,
          station.nitrate_phosphate_levels,
        ],
        backgroundColor: [
          "#75c3f3",
          "#64A78C",
          "#6EB7CA",
          "#355874",
          "#84A6BF",
          "#F19727",
          "#23504B",
        ],
      },
    ],
  };
  return (
    <>
      <Line data={data} className="!w-full" />
    </>
  );
};

export default LineGraph;
