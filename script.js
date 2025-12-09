lucide.createIcons();

// Chart.js for Spending Tracker
const ctx = document.getElementById("spendingChart").getContext("2d");
const spendingChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Spending (₦)",
        data: [5000, 7500, 3200, 6000, 11000, 4500, 2000],
        backgroundColor: [
          "rgba(59, 130, 246, 0.5)",
          "rgba(59, 130, 246, 0.5)",
          "rgba(59, 130, 246, 0.5)",
          "rgba(59, 130, 246, 0.5)",
          "rgba(59, 130, 246, 1)",
          "rgba(59, 130, 246, 0.5)",
          "rgba(59, 130, 246, 0.5)",
        ],
        borderColor: "rgba(59, 130, 246, 1)",
        borderWidth: 1,
        borderRadius: 8,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value, index, values) {
            return "₦" + value / 1000 + "k";
          },
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  },
});