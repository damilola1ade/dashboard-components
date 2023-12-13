import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { tableData } from "../../../dummyData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};
  
  const captions = tableData.map((data) => data.state);
  
  const data = {
    labels: captions,
    datasets: [
      {
        label: "Men",
        data: tableData.map((data) => parseFloat(data.men.replace(/,/g, ""))),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "Women",
        data: tableData.map((data) => parseFloat(data.women.replace(/,/g, ""))),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
   
      },
    ],
  };

export const BarChart = () => {
  return <Bar options={options} data={data}  />;
};
