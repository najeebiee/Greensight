// js/reports.js

// --- 1. Mock Database for Report Data ---
const reportData = [
    { date: '2025-09-16', binId: '#102', location: 'Poblacion', wasteType: 'Gadgets', weight: 25, collectedBy: 'Team A' },
    { date: '2025-09-16', binId: '#105', location: 'Buhangin', wasteType: 'Batteries', weight: 18, collectedBy: 'Team B' },
    { date: '2025-09-15', binId: '#107', location: 'Talomo', wasteType: 'Mixed', weight: 35, collectedBy: 'Team A' },
    { date: '2025-09-15', binId: '#101', location: 'Poblacion', wasteType: 'Gadgets', weight: 22, collectedBy: 'Team B' },
    { date: '2025-09-14', binId: '#110', location: 'Buhangin', wasteType: 'Cables', weight: 15, collectedBy: 'Team A' },
    { date: '2025-09-13', binId: '#108', location: 'Tugbok', wasteType: 'Mixed', weight: 28, collectedBy: 'Team C' },
    { date: '2025-09-12', binId: '#103', location: 'Poblacion', wasteType: 'Batteries', weight: 12, collectedBy: 'Team B' },
];

// --- Instances for charts to manage re-rendering ---
let collectionTrendChart, wasteTypeChart;

// --- 2. HTML Structure for the Page ---
export const reports = `
  <div class="reports-page">
    <div class="page-header-reports">
      <h2>Reports & Analytics</h2>
      <p>Analyze e-waste collection data and export detailed reports.</p>
    </div>

    <div class="reports-filters">
      <div class="filter-group">
        <label for="date-range"><i class="fas fa-calendar-alt"></i> Date Range:</label>
        <select id="date-range" class="custom-select">
          <option value="7">Last 7 Days</option>
          <option value="30">Last 30 Days</option>
          <option value="all">All Time</option>
        </select>
      </div>
      <div class="filter-group">
        <label for="location-filter"><i class="fas fa-map-marker-alt"></i> Location:</label>
        <select id="location-filter" class="custom-select">
          <option value="all">All Districts</option>
          <option value="Poblacion">Poblacion</option>
          <option value="Buhangin">Buhangin</option>
          <option value="Talomo">Talomo</option>
          <option value="Tugbok">Tugbok</option>
        </select>
      </div>
      <button id="generateReportBtn" class="btn-primary">Generate Report</button>
    </div>

    <div class="reports-stats">
      <div class="report-card">
        <div class="report-card-icon"><i class="fas fa-weight-hanging"></i></div>
        <div class="report-card-info">
            <h4>Total Waste Collected</h4>
            <p id="totalWeight" class="value">-- kg</p>
        </div>
      </div>
      <div class="report-card">
        <div class="report-card-icon"><i class="fas fa-truck"></i></div>
        <div class="report-card-info">
            <h4>Total Collections</h4>
            <p id="totalPickups" class="value">--</p>
        </div>
      </div>
      <div class="report-card">
        <div class="report-card-icon"><i class="fas fa-recycle"></i></div>
        <div class="report-card-info">
            <h4>Top Waste Type</h4>
            <p id="topWasteType" class="value">--</p>
        </div>
      </div>
       <div class="report-card">
        <div class="report-card-icon"><i class="fas fa-map-marked-alt"></i></div>
        <div class="report-card-info">
            <h4>Busiest District</h4>
            <p id="busiestDistrict" class="value">--</p>
        </div>
      </div>
    </div>

    <div class="reports-charts">
      <div class="chart-card">
        <h3>Waste Collection Over Time</h3>
        <div class="chart-container"><canvas id="collectionTrendChart"></canvas></div>
      </div>
      <div class="chart-card">
        <h3>Waste Breakdown by Type</h3>
        <div class="chart-container"><canvas id="wasteTypeChart"></canvas></div>
      </div>
    </div>

    <div class="reports-table-card">
      <div class="table-header">
        <h3>Detailed Collection Log</h3>
         <div class="reports-export">
            <button class="btn-export"><i class="fas fa-file-pdf"></i> PDF</button>
            <button class="btn-export"><i class="fas fa-file-csv"></i> CSV</button>
        </div>
      </div>
      <table class="reports-table">
        <thead>
          <tr>
            <th>Date</th><th>Bin ID</th><th>Location</th><th>Waste Type</th><th>Weight (kg)</th><th>Collected By</th>
          </tr>
        </thead>
        <tbody id="report-table-body"></tbody>
      </table>
    </div>
  </div>
`;

// --- 3. JavaScript Logic ---

function renderReport() {
    const locationFilter = document.getElementById('location-filter').value;
    let filteredData = reportData.filter(item => locationFilter === 'all' || item.location === locationFilter);

    const totalWeight = filteredData.reduce((sum, item) => sum + item.weight, 0);
    const topWasteType = getTopItem(filteredData, 'wasteType');
    const busiestDistrict = getTopItem(filteredData, 'location');
    
    document.getElementById('totalWeight').textContent = `${totalWeight} kg`;
    document.getElementById('totalPickups').textContent = filteredData.length;
    document.getElementById('topWasteType').textContent = topWasteType;
    document.getElementById('busiestDistrict').textContent = busiestDistrict;

    updateCollectionTrendChart(filteredData);
    updateWasteTypeChart(filteredData);

    const tableBody = document.getElementById('report-table-body');
    if (filteredData.length > 0) {
        tableBody.innerHTML = filteredData.map(item => `
            <tr>
                <td>${item.date}</td>
                <td>${item.binId}</td>
                <td>${item.location}</td>
                <td>${item.wasteType}</td>
                <td>${item.weight}</td>
                <td>${item.collectedBy}</td>
            </tr>
        `).join('');
    } else {
        tableBody.innerHTML = '<tr><td colspan="6">No data available for the selected filters.</td></tr>';
    }
}

function getTopItem(data, key) {
    if (data.length === 0) return 'N/A';
    const counts = data.reduce((acc, item) => {
        acc[item[key]] = (acc[item[key]] || 0) + 1;
        return acc;
    }, {});
    return Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
}

function updateCollectionTrendChart(data) {
    const labels = [...new Set(data.map(item => item.date))].sort();
    const chartData = labels.map(label => 
        data.filter(item => item.date === label).reduce((sum, item) => sum + item.weight, 0)
    );
    
    if (collectionTrendChart) collectionTrendChart.destroy();
    const ctx = document.getElementById('collectionTrendChart');
    if(!ctx) return;
    collectionTrendChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels,
            datasets: [{
                label: 'Weight (kg)',
                data: chartData,
                borderColor: 'var(--eco-green)',
                backgroundColor: 'rgba(84, 196, 88, 0.1)',
                fill: true,
                tension: 0.4
            }]
        },
        options: { responsive: true, maintainAspectRatio: false }
    });
}

function updateWasteTypeChart(data) {
    const typeCounts = data.reduce((acc, item) => {
        acc[item.wasteType] = (acc[item.wasteType] || 0) + item.weight;
        return acc;
    }, {});

    if (wasteTypeChart) wasteTypeChart.destroy();
    const ctx = document.getElementById('wasteTypeChart');
    if(!ctx) return;
    wasteTypeChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: Object.keys(typeCounts),
            datasets: [{
                data: Object.values(typeCounts),
                backgroundColor: ['#54c458', '#03a9f4', '#ff9800', '#f44336'],
            }]
        },
        options: { responsive: true, maintainAspectRatio: false }
    });
}

// --- 4. Initialization Function ---
export function initReportsPage() {
  const generateBtn = document.getElementById('generateReportBtn');
  if(generateBtn) {
    generateBtn.addEventListener('click', renderReport);
  }
  renderReport(); // Initial render on page load
}

