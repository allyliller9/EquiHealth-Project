// Import Chart.js components needed for pie charts
import { 
  Chart as ChartJS, // Main Chart object
  ArcElement,       // For the pie slices
  Tooltip,          // Shows info when hovering
  Legend            // Shows the color key
} from "chart.js";

// Import the Pie component from react-chartjs-2
import { Pie } from "react-chartjs-2";

// We need to register the ChartJS components before using them
ChartJS.register(ArcElement, Tooltip, Legend);

// This is our PieChart component
const PieChart = () => {
  // This is the data for our pie chart
  const chartData = {
    // Names for each slice of the pie
    labels: ["Men", "Women"],
    
    // The actual data and styling
    datasets: [
      {
        // The percentages for each slice (must add up to 100)
        data: [67, 33],
        
        // Colors for each slice
        backgroundColor: [
          "hsl(214, 37%, 46%)", // Blue color for Men
          "hsl(335, 58%, 63%)"  // Pink color for Women
        ],
        
        // Border colors for each slice (slightly darker)
        borderColor: ["hsl(214, 37%, 36%)", "hsl(335, 58%, 53%)"],
        
        // Width of the border around each slice
        borderWidth: 1
      }
    ]
  };

  // These options control how the chart looks and behaves
  const options = {
    responsive: true,           // Chart will resize with its container
    maintainAspectRatio: false, // Let height be set independently
    
    // Configuration for the plugins (legend, tooltip)
    plugins: {
      // Settings for the legend (the color key)
      legend: {
        position: "bottom" as const, // Place legend at the bottom
        labels: {
          usePointStyle: true, // Use dots instead of rectangles
          boxWidth: 10,        // Size of the colored square
          padding: 15          // Space between items
        }
      },
      
      // Settings for tooltips (what appears when you hover)
      tooltip: {
        callbacks: {
          // Customize what text shows in the tooltip
          label: function(context: any) {
            return `${context.label}: ${context.raw}% of participants`;
          }
        }
      }
    }
  };

  // Return the Pie chart with our data and options
  // We wrap it in containers to control the size and centering
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-48 h-48">
        <Pie data={chartData} options={options} />
      </div>
    </div>
  );
};

// Export this component so it can be used elsewhere
export default PieChart;
