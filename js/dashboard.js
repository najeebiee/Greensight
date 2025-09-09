export const dashboard = `
  <div class="dashboard">

    <!-- 🔹 Top Stat Cards -->
    <div class="stats-cards">
      <div class="card">
        <h3>New Orders</h3>
        <p class="value">1456</p>
        <span class="trend up">+11% from previous period</span>
      </div>
      <div class="card">
        <h3>New Users</h3>
        <p class="value">3567</p>
        <span class="trend up">+22% from previous period</span>
      </div>
      <div class="card">
        <h3>Average Price</h3>
        <p class="value">14.5</p>
        <span class="trend down">-2% from previous period</span>
      </div>
      <div class="card">
        <h3>Total Sales</h3>
        <p class="value">15234</p>
        <span class="trend up">+10% from previous period</span>
      </div>
    </div>

    <!-- 🔹 Charts Row -->
    <div class="charts-row">
      <div class="chart-card">
        <h3>Email Sent</h3>
        <canvas id="emailChart"></canvas>
      </div>
      <div class="chart-card">
        <h3>Revenue</h3>
        <canvas id="revenueChart"></canvas>
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
  const ctxEmail = document.getElementById('emailChart');
  if (ctxEmail) {
    new Chart(ctxEmail, {
      type: 'line',
      data: {
        labels: ["2012", "2013", "2014", "2015", "2016", "2017"],
        datasets: [{
          label: 'Emails Sent',
          data: [100, 200, 300, 250, 400, 350],
          borderColor: '#4caf50',
          backgroundColor: 'rgba(76, 175, 80, 0.2)',
          fill: true,
        }]
      }
    });
  }

  const ctxRevenue = document.getElementById('revenueChart');
  if (ctxRevenue) {
    new Chart(ctxRevenue, {
      type: 'bar',
      data: {
        labels: ["2014", "2015", "2016", "2017"],
        datasets: [{
          label: 'Marketplace',
          data: [50, 75, 60, 90],
          backgroundColor: '#03a9f4'
        }, {
          label: 'Last Week',
          data: [40, 55, 45, 80],
          backgroundColor: '#4caf50'
        }]
      }
    });
  }
}