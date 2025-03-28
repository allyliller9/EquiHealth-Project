// Import Chart.js components needed for bar charts
import { 
  Chart as ChartJS, 
  CategoryScale,   // For the horizontal axis (categories)
  LinearScale,     // For the vertical axis (numbers)
  BarElement,      // The actual bars in the chart
  Title,           // For chart title
  Tooltip,         // Shows info when hovering
  Legend           // Shows the color key
} from "chart.js";

// Import the Bar component from react-chartjs-2
import { Bar } from "react-chartjs-2";

// We need to register the ChartJS components before using them
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// This is our BarChart component
const BarChart = () => {
  // First, we define our chart data
  const chartData = {
    // These are the labels shown on the x-axis
    labels: ["Cancer", "Cardiovascular", "Autoimmune", "Mental Health", "Reproductive", "Chronic Pain"],
    
    // These are our data sets (the bars in the chart)
    datasets: [
      {
        // First set of bars - male-focused research
        label: "Research Funding (Male-Focused)",
        data: [38, 45, 28, 30, 10, 42],  // The height of each bar (in millions of dollars)
        backgroundColor: "hsl(214, 37%, 46%)", // Blue color
        borderColor: "hsl(214, 37%, 36%)",     // Darker blue for border
        borderWidth: 1                          // Thin border
      },
      {
        // Second set of bars - female-focused research
        label: "Research Funding (Female-Focused)",
        data: [32, 15, 18, 25, 10, 12],  // The height of each bar (in millions of dollars)
        backgroundColor: "hsl(335, 58%, 63%)", // Pink color
        borderColor: "hsl(335, 58%, 53%)",     // Darker pink for border
        borderWidth: 1                          // Thin border
      }
    ]
  };

  // These options control how the chart looks and behaves
  const options = {
    responsive: true,               // Chart will resize with its container
    maintainAspectRatio: false,     // Let height be set independently

    // Configuration for the plugins (legend, tooltip, title)
    plugins: {
      // Settings for the legend (the color key at the bottom)
      legend: {
        position: "bottom" as const,  // Place legend at the bottom
        labels: {
          usePointStyle: true,  // Use dots instead of rectangles
          boxWidth: 10,         // Size of the colored square
          padding: 15           // Space between items
        }
      },
      
      // Settings for tooltips (what appears when you hover)
      tooltip: {
        mode: "index" as const,  // Show all datasets for the same x value
        intersect: false,        // Show tooltip when mouse is anywhere over the x value
        callbacks: {
          // Customize what text shows in the tooltip
          label: function(context: any) {
            return `${context.dataset.label}: $${context.raw} million`;
          }
        }
      },
      
      // We're not showing a title inside the chart
      title: {
        display: false
      }
    },
    
    // Configuration for the axes
    scales: {
      // Y-axis (vertical)
      y: {
        beginAtZero: true,   // Start at zero
        title: {
          display: true,     // Show a title for this axis
          text: "Funding (millions USD)"  // The title text
        }
      },
      // X-axis (horizontal)
      x: {
        title: {
          display: true,    // Show a title for this axis
          text: "Health Condition Category"  // The title text
        }
      }
    }
  };

  // Finally, return the Bar chart with our data and options
  return (
    <div className="w-full h-60">
      <Bar data={chartData} options={options} />
    </div>
  );
};

// Export this component so it can be used elsewhere
export default BarChart;
