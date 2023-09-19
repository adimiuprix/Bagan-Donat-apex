import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const Index = ({ chartData, labels, data, chartRef, onClickHandler }) => {
  const graphData = {
    data: {
      labels: labels,
      datasets: [
        {
          data: data,
          backgroundColor: "rgba(255, 99, 132, 0.8)",
        },
      ],
    },
    options: {
      indexAxis: "x",
      onHover: (event, chartELement) => {
        event.native.target.style.cursor = chartELement[0]
          ? "pointer"
          : "default";
      },
      response: true,
      maintainAspectRation: false,
      plugins: {
        tooltip: {
          callbacks: {
            title: (context) => {
              let labelText = chartData.find(
                (el) => el.label === context[context.length - 1].label
              );
              return `${labelText.label} - ${labelText.value}`;
            },
          },
        },
        legend: {
          display: false,
        },
      },
    },
  };

  return (
    <Bar
      data-testid='favGraph'
      ref={chartRef}
      onClick={onClickHandler}
      data={graphData.data}
      options={graphData.options}
    />
  );
};

export default Index;
