export const reports = `
  <div class="reports-page">
    <!-- Header -->
    <h2 class="reports-title">Reports</h2>
    <p class="reports-subtitle">View, analyze, and export waste collection data.</p>

    <!-- Filters -->
    <div class="reports-filters">
      <div class="filter-group">
        <label for="date-range">Date Range:</label>
        <select id="date-range">
          <option>Today</option>
          <option>Last 7 Days</option>
          <option>Last 30 Days</option>
          <option>Custom</option>
        </select>
      </div>
      <div class="filter-group">
        <label for="location">Location:</label>
        <select id="location">
          <option>All</option>
          <option>District 1</option>
          <option>District 2</option>
          <option>District 3</option>
        </select>
      </div>
      <div class="filter-group">
        <label for="bin-type">Bin Type:</label>
        <select id="bin-type">
          <option>All</option>
          <option>Biodegradable</option>
          <option>Non-Biodegradable</option>
          <option>Recyclable</option>
          <option>Hazardous</option>
        </select>
      </div>
      <button class="btn-generate">Generate Report</button>
    </div>

    <!-- Summary Cards -->
    <div class="reports-stats">
      <div class="report-card">
        <h4>Total Waste Collected</h4>
        <p class="value">3,250 kg</p>
      </div>
      <div class="report-card">
        <h4>Number of Pickups</h4>
        <p class="value">128</p>
      </div>
      <div class="report-card">
        <h4>Bins Reached Capacity</h4>
        <p class="value">45</p>
      </div>
      <div class="report-card">
        <h4>Recycling Rate</h4>
        <p class="value">62%</p>
      </div>
    </div>

    <!-- Charts Row -->
    <div class="reports-charts">
      <div class="chart-card">📈 Waste Collection Over Time</div>
      <div class="chart-card">🥧 Waste Breakdown by Type</div>
      <div class="chart-card">📊 Reports by District</div>
    </div>

    <!-- Data Table -->
    <div class="reports-table">
      <h3>Detailed Report</h3>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Bin ID</th>
            <th>Location</th>
            <th>Waste Type</th>
            <th>Weight (kg)</th>
            <th>Status</th>
            <th>Collected By</th>
            <th>Pickup Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2025-09-04</td>
            <td>BIN-101</td>
            <td>District 1</td>
            <td>Biodegradable</td>
            <td>56</td>
            <td>Full</td>
            <td>Team A</td>
            <td>10:32 AM</td>
          </tr>
          <tr>
            <td>2025-09-04</td>
            <td>BIN-203</td>
            <td>District 2</td>
            <td>Recyclable</td>
            <td>32</td>
            <td>Normal</td>
            <td>Team B</td>
            <td>1:15 PM</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Export Section -->
    <div class="reports-export">
      <button class="btn-export">Export PDF</button>
      <button class="btn-export">Export CSV</button>
      <button class="btn-export">Export Excel</button>
    </div>
  </div>
`;

