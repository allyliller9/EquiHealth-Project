import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

// Register ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const chartData = {
    labels: ["Men", "Women"],
    datasets: [
      {
        data: [67, 33],
        backgroundColor: [
          "hsl(214, 37%, 46%)", // #4a6fa1
          "hsl(335, 58%, 63%)" // #d66ba0
        ],
        borderColor: ["hsl(214, 37%, 36%)", "hsl(335, 58%, 53%)"],
        borderWidth: 1
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          usePointStyle: true,
          boxWidth: 10,
          padding: 15
        }
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            return `${context.label}: ${context.raw}% of participants`;
          }
        }
      }
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-48 h-48">
        <Pie data={chartData} options={options} />
      </div>
    </div>
  );
};

export default PieChart;
