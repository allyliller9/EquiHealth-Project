import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
  const chartData = {
    labels: ["Cancer", "Cardiovascular", "Autoimmune", "Mental Health", "Reproductive", "Chronic Pain"],
    datasets: [
      {
        label: "Research Funding (Male-Focused)",
        data: [38, 45, 28, 30, 10, 42],
        backgroundColor: "hsl(214, 37%, 46%)", // #4a6fa1
        borderColor: "hsl(214, 37%, 36%)",
        borderWidth: 1
      },
      {
        label: "Research Funding (Female-Focused)",
        data: [32, 15, 18, 25, 10, 12],
        backgroundColor: "hsl(335, 58%, 63%)", // #d66ba0
        borderColor: "hsl(335, 58%, 53%)",
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
        mode: "index" as const,
        intersect: false,
        callbacks: {
          label: function(context: any) {
            return `${context.dataset.label}: $${context.raw} million`;
          }
        }
      },
      title: {
        display: false
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Funding (millions USD)"
        }
      },
      x: {
        title: {
          display: true,
          text: "Health Condition Category"
        }
      }
    }
  };

  return (
    <div className="w-full h-60">
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default BarChart;
