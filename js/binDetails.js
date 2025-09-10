export const binDetails = `
  <div class="bin-details">

    <!-- Top Metrics -->
    <div class="metrics">
      <div class="metric-card">
        <h3>Fill Level</h3>
        <p class="value">78%</p>
        <span>This bin</span>
      </div>
      <div class="metric-card">
        <h3>Temperature</h3>
        <p class="value">32°C</p>
        <span>Current</span>
      </div>
      <div class="metric-card">
        <h3>Gas Level</h3>
        <p class="value">120 ppm</p>
        <span>Detected</span>
      </div>
      <div class="metric-card">
        <h3>Alerts</h3>
        <p class="value">3</p>
        <span>Active</span>
      </div>
    </div>

    <!-- Graphs Row -->
    <div class="charts-row">
      <div class="chart-card large">
        <h3>Fill Level Over Time</h3>
        <canvas id="fillLevelChart"></canvas>
      </div>
      <div class="chart-card">
        <h3>Temperature Distribution</h3>
        <canvas id="temperatureChart"></canvas>
      </div>
      <div class="chart-card">
        <h3>Gas Levels by Day</h3>
        <canvas id="gasChart"></canvas>
      </div>
    </div>

    <!-- Maintenance & Logs -->
    <div class="maintenance">
      <h3>Maintenance Actions</h3>
      <ul>
        <li>✔️ Bin emptied (2 days ago)</li>
        <li>⚠️ Gas sensor calibrated (pending)</li>
        <li>✔️ Lid repaired (last week)</li>
      </ul>
    </div>

  </div>
`;

// Function to initialize charts
export function initBinDetailsCharts() {
  // Fill Level Line Chart
  new Chart(document.getElementById("fillLevelChart"), {
    type: "line",
    data: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [{
        label: "Fill Level (%)",
        data: [40, 55, 60, 70, 85, 90, 78],
        borderColor: "#4CAF50",
        backgroundColor: "rgba(76, 175, 80, 0.2)",
        tension: 0.3,
        fill: true
      }]
    },
    options: { responsive: true }
  });

  // Temperature Pie Chart
  new Chart(document.getElementById("temperatureChart"), {
    type: "doughnut",
    data: {
      labels: ["<20°C", "20–30°C", "30–40°C", ">40°C"],
      datasets: [{
        data: [5, 10, 7, 3],
        backgroundColor: ["#03A9F4", "#4CAF50", "#FFC107", "#F44336"]
      }]
    }
  });

  // Gas Bar Chart
  new Chart(document.getElementById("gasChart"), {
    type: "bar",
    data: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [{
        label: "Gas (ppm)",
        data: [80, 95, 120, 100, 90, 70, 110],
        backgroundColor: "#2E7D32"
      }]
    }
  });
}
