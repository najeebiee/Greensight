export const dashboard = `
  <div class="dashboard">

    <!-- 🔹 Top Stat Cards -->
    <div class="stats-cards">
      <div class="card">
        <div class="card-header">
          <h3>TOTAL BINS</h3>
          <i class="fas fa-trash-alt"></i>
        </div>
        <div class="card-content">
          <div class="trend-indicator up">
            +2 Bins this week
          </div>
          <div class="value-row">
            <span class="value">2,450</span>
            <span class="last-value">Total Network</span>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <h3>BINS FULL</h3>
          <i class="fas fa-fill-drip"></i>
        </div>
        <div class="card-content">
          <div class="trend-indicator up">
            +5% from yesterday
          </div>
          <div class="value-row">
            <span class="value">112</span> <i class="fas fa-arrow-up"></i>
            <span class="last-value">Last: 107</span>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <h3>ALERTS ACTIVE</h3>
          <i class="fas fa-exclamation-triangle"></i>
        </div>
        <div class="card-content">
          <div class="trend-indicator down">
            -3% from yesterday
          </div>
          <div class="value-row">
            <span class="value">14</span> <i class="fas fa-arrow-down"></i>
            <span class="last-value">Last: 18</span>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <h3>AVG. FILL RATE</h3>
          <i class="fas fa-percentage"></i>
        </div>
        <div class="card-content">
          <div class="trend-indicator up">
            +1.5% from yesterday
          </div>
          <div class="value-row">
            <span class="value">68%</span> <i class="fas fa-arrow-up"></i>
            <span class="last-value">Last: 66.5%</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 🔹 Charts Row -->
    <div class="charts-row">
      <div class="chart-card">
        <h3>Bin Usage Trends</h3>
        <p class="chart-subtitle">Number of bins reported full in the last 7 days</p>
        <div class="chart-container">
          <canvas id="binUsageChart"></canvas>
        </div>
      </div>
      <div class="chart-card">
        <h3>Fill Levels by District</h3>
        <p class="chart-subtitle">Average fill percentage across major zones</p>
        <div class="chart-container">
          <canvas id="fillLevelsChart"></canvas>
        </div>
      </div>
    </div>

    <!-- 🔹 Bottom Row -->
    <div class="bottom-row">
      <div class="widget-card">
        <h3>Monthly Earning</h3>
        <p class="value">$6451</p>
        <canvas id="earningChart"></canvas>
      </div>
      <div class="widget-card">
        <h3>Recent Activity</h3>
        <ul class="activity-feed">
          <li><strong>12 Oct:</strong> Responded to "Volunteer Activities"</li>
          <li><strong>13 Oct:</strong> Uploaded Images</li>
          <li><strong>14 Oct:</strong> Uploaded File</li>
        </ul>
      </div>
      <div class="widget-card weather">
        <h3>New York</h3>
        <p>🌧️ 28°C Heavy Rain</p>
      </div>
      <div class="widget-card weather">
        <h3>California</h3>
        <p>☀️ 32°C Partly Cloudy</p>
      </div>
    </div>

  </div>
`;

export function initDashboardCharts() {
  // 1. Bin Usage Trends (Line Chart)
  const ctxUsage = document.getElementById('binUsageChart');
  if (ctxUsage) {
    new Chart(ctxUsage, {
      type: 'line',
      data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [{
          label: 'Bins Reported Full',
          data: [112, 125, 110, 135, 145, 130, 150],
          borderColor: 'var(--eco-green)', // Using your CSS variable
          backgroundColor: 'rgba(84, 196, 88, 0.2)',
          fill: true,
          tension: 0.4 // Makes the line smooth
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }

  // 2. Fill Levels by District (Bar Chart)
  const ctxFillLevels = document.getElementById('fillLevelsChart');
  if (ctxFillLevels) {
    new Chart(ctxFillLevels, {
      type: 'bar',
      data: {
        labels: ["Downtown", "Uptown", "Midtown", "Industrial", "Suburbs"],
        datasets: [{
          label: 'Average Fill Rate (%)',
          data: [85, 62, 70, 91, 55],
          backgroundColor: [ // Different colors for each bar
            'rgba(84, 196, 88, 0.7)',
            'rgba(3, 169, 244, 0.7)',
            'rgba(255, 152, 0, 0.7)',
            'rgba(244, 67, 54, 0.7)',
            'rgba(156, 39, 176, 0.7)'
          ],
          borderColor: 'rgba(255, 255, 255, 0)', // No border
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false // Hiding the legend as it's self-explanatory
          }
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 100 // Set max to 100 for percentage
            }
        }
      }
    });
  }
}
