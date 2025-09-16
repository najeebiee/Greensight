// js/pages/binDetails.js

// 1. New, more detailed Mock Database for all Bins
const binDatabase = {
  "bin-101": {
    id: "bin-101",
    title: "eWaste Bin #101",
    location: "People's Park, Davao City",
    coords: [7.0673, 125.6081],
    metrics: { fillLevel: 68, temperature: 31, lastCollection: "3 days ago", status: { text: "Operational", class: "status-operational" } },
    charts: { fillHistory: [20, 35, 40, 45, 55, 60, 68] },
    sensors: { gas: 80, humidity: 72, lid: "Closed", ping: "5m ago" },
    log: [
        { text: "<strong>System:</strong> Sensor check normal.", time: "1h ago" },
        { text: "<strong>Collection:</strong> Bin emptied.", time: "3 days ago" }
    ]
  },
  "bin-102": {
    id: "bin-102",
    title: "eWaste Bin #102",
    location: "SM Lanang Premier, J.P. Laurel Ave",
    coords: [7.0983, 125.6315],
    metrics: { fillLevel: 85, temperature: 34, lastCollection: "2 days ago", status: { text: "Full", class: "status-full" } },
    charts: { fillHistory: [35, 45, 50, 65, 70, 80, 85] },
    sensors: { gas: 110, humidity: 75, lid: "Closed", ping: "2m ago" },
    log: [
        { text: "<strong>Status:</strong> Marked as 'Full' by system.", time: "Today" },
        { text: "<strong>Alert:</strong> Fill level reached 80%.", time: "1 day ago" },
        { text: "<strong>Collection:</strong> Bin emptied successfully.", time: "2 days ago" }
    ]
  },
  "bin-103": {
    id: "bin-103",
    title: "eWaste Bin #103",
    location: "Gaisano Mall, J.P. Laurel Ave, Bajada",
    coords: [7.0609, 125.6053],
    metrics: { fillLevel: 40, temperature: 30, lastCollection: "yesterday", status: { text: "Operational", class: "status-operational" } },
    charts: { fillHistory: [70, 65, 55, 50, 45, 42, 40] },
    sensors: { gas: 65, humidity: 70, lid: "Closed", ping: "12m ago" },
    log: [
        { text: "<strong>Collection:</strong> Bin emptied.", time: "yesterday" },
        { text: "<strong>System:</strong> Sensor check normal.", time: "2 days ago" }
    ]
  },
  "bin-104": {
    id: "bin-104",
    title: "eWaste Bin #104",
    location: "Ateneo de Davao, E. Jacinto Street",
    coords: [7.0722, 125.6128],
    metrics: { fillLevel: 25, temperature: 29, lastCollection: "4 days ago", status: { text: "Operational", class: "status-operational" } },
    charts: { fillHistory: [10, 12, 15, 18, 20, 22, 25] },
    sensors: { gas: 50, humidity: 68, lid: "Closed", ping: "8m ago" },
    log: [
        { text: "<strong>System:</strong> Sensor check normal.", time: "1 day ago" },
        { text: "<strong>Collection:</strong> Bin emptied.", time: "4 days ago" }
    ]
  },
  "bin-105": {
    id: "bin-105",
    title: "eWaste Bin #105",
    location: "Damosa IT Park, Buhangin",
    coords: [7.1158, 125.6472],
    metrics: { fillLevel: 95, temperature: 42, lastCollection: "3 days ago", status: { text: "Critical", class: "status-critical" } },
    charts: { fillHistory: [60, 65, 70, 78, 85, 90, 95] },
    sensors: { gas: 150, humidity: 80, lid: "Closed", ping: "1m ago" },
    log: [
        { text: "<strong>Alert:</strong> Temperature alert triggered.", time: "5m ago" },
        { text: "<strong>Status:</strong> Marked as 'Critical' by system.", time: "1h ago" },
        { text: "<strong>Collection:</strong> Bin emptied successfully.", time: "3 days ago" }
    ]
  },
  "bin-106": {
    id: "bin-106",
    title: "eWaste Bin #106",
    location: "Abreeza Mall, J.P. Laurel Ave",
    coords: [7.0863, 125.6119],
    metrics: { fillLevel: 75, temperature: 32, lastCollection: "5 days ago", status: { text: "Operational", class: "status-operational" } },
    charts: { fillHistory: [25, 30, 40, 50, 60, 70, 75] },
    sensors: { gas: 90, humidity: 73, lid: "Closed", ping: "20m ago" },
    log: [
        { text: "<strong>Alert:</strong> Fill level reached 70%.", time: "1 day ago" },
        { text: "<strong>Collection:</strong> Bin emptied.", time: "5 days ago" }
    ]
  },
  "bin-107": {
    id: "bin-107",
    title: "eWaste Bin #107",
    location: "SM City Ecoland, Quimpo Blvd",
    coords: [7.0515, 125.5915],
    metrics: { fillLevel: 90, temperature: 35, lastCollection: "6 days ago", status: { text: "Full", class: "status-full" } },
    charts: { fillHistory: [40, 50, 65, 75, 80, 88, 90] },
    sensors: { gas: 120, humidity: 76, lid: "Closed", ping: "3m ago" },
    log: [
        { text: "<strong>Status:</strong> Marked as 'Full' by system.", time: "4h ago" },
        { text: "<strong>Alert:</strong> Fill level reached 80%.", time: "2 days ago" }
    ]
  },
  "bin-108": {
    id: "bin-108",
    title: "eWaste Bin #108",
    location: "UP Mindanao, Mintal, Tugbok District",
    coords: [7.1136, 125.5714],
    metrics: { fillLevel: 15, temperature: 28, lastCollection: "1 day ago", status: { text: "Operational", class: "status-operational" } },
    charts: { fillHistory: [50, 45, 40, 30, 25, 20, 15] },
    sensors: { gas: 40, humidity: 60, lid: "Closed", ping: "10m ago" },
    log: [
        { text: "<strong>Collection:</strong> Bin emptied successfully.", time: "1 day ago" },
        { text: "<strong>System:</strong> Bin installed.", time: "1 week ago" }
    ]
  },
  "bin-109": {
    id: "bin-109",
    title: "eWaste Bin #109",
    location: "Davao City Hall, San Pedro St",
    coords: [7.0683, 125.6091],
    metrics: { fillLevel: 55, temperature: 33, lastCollection: "2 days ago", status: { text: "Operational", class: "status-operational" } },
    charts: { fillHistory: [15, 20, 25, 30, 40, 50, 55] },
    sensors: { gas: 75, humidity: 71, lid: "Closed", ping: "15m ago" },
    log: [
        { text: "<strong>System:</strong> Sensor check normal.", time: "yesterday" },
        { text: "<strong>Collection:</strong> Bin emptied.", time: "2 days ago" }
    ]
  },
  "bin-110": {
    id: "bin-110",
    title: "eWaste Bin #110",
    location: "Davao Airport, Buhangin",
    coords: [7.1256, 125.6456],
    metrics: { fillLevel: 88, temperature: 36, lastCollection: "4 days ago", status: { text: "Full", class: "status-full" } },
    charts: { fillHistory: [30, 40, 50, 65, 75, 80, 88] },
    sensors: { gas: 115, humidity: 78, lid: "Closed", ping: "6m ago" },
    log: [
        { text: "<strong>Status:</strong> Marked as 'Full' by system.", time: "today" },
        { text: "<strong>Alert:</strong> Fill level reached 80%.", time: "1 day ago" }
    ]
  }
};

// --- Instances for chart and map to manage re-rendering ---
let fillLevelChartInstance;
let binLocationMapInstance;


// 2. Updated HTML with a top-level selector bar
export const binDetails = `
  <div class="bin-details-page">
    
    <!-- NEW: Selector bar at the top -->
    <div class="page-selector-bar">
      <div class="bin-selector-container">
        <label for="binSelector">Select Bin to View Details:</label>
        <select id="binSelector" class="custom-select"></select>
      </div>
    </div>

    <div class="bin-header">
      <div class="bin-title">
        <h2 id="binTitle"></h2>
        <p><i class="fas fa-map-marker-alt"></i> <span id="binLocation"></span></p>
      </div>
      <div class="bin-actions">
        <button class="btn-secondary"><i class="fas fa-tools"></i> Schedule Maintenance</button>
        <button class="btn-primary"><i class="fas fa-truck"></i> Dispatch Collection</button>
      </div>
    </div>

    <div class="metrics-row">
        <div class="metric-card">
            <div class="metric-icon fill-level"><i class="fas fa-percentage"></i></div>
            <div class="metric-info">
                <span class="metric-value" id="fillLevelValue"></span>
                <span class="metric-label">Current Fill Level</span>
            </div>
        </div>
        <div class="metric-card">
            <div class="metric-icon temperature"><i class="fas fa-thermometer-half"></i></div>
            <div class="metric-info">
                <span class="metric-value" id="temperatureValue"></span>
                <span class="metric-label">Internal Temperature</span>
            </div>
        </div>
        <div class="metric-card">
            <div class="metric-icon collection"><i class="fas fa-calendar-alt"></i></div>
            <div class="metric-info">
                <span class="metric-value" id="lastCollectionValue"></span>
                <span class="metric-label">Last Collection</span>
            </div>
        </div>
        <div class="metric-card">
            <div class="metric-icon status"><i class="fas fa-check-circle"></i></div>
            <div class="metric-info">
                <span class="metric-value" id="statusTag"></span>
                <span class="metric-label">Current Status</span>
            </div>
        </div>
    </div>

    <!-- Main Content Grid -->
    <div class="main-content-grid">
      <!-- Left Column -->
      <div class="left-column">
        <div class="widget-card">
          <h3>Bin Location</h3>
          <div id="binLocationMap" class="mini-map-container"></div>
        </div>
        <div class="widget-card">
          <h3>Fill Level Over Time (Last 7 Days)</h3>
          <div class="chart-container">
            <canvas id="fillLevelChart"></canvas>
          </div>
        </div>
      </div>
      <!-- Right Column -->
      <div class="right-column">
        <div class="widget-card">
          <h3>Detailed Sensor Data</h3>
          <ul class="sensor-list">
            <li><span>Gas Level (Methane)</span><span class="sensor-value" id="gasValue"></span></li>
            <li><span>Humidity</span><span class="sensor-value" id="humidityValue"></span></li>
            <li><span>Lid Status</span><span class="sensor-value" id="lidValue"></span></li>
            <li><span>Last Ping</span><span class="sensor-value" id="pingValue"></span></li>
          </ul>
        </div>
        <div class="widget-card">
          <h3>Event Log</h3>
          <ul class="event-log" id="eventLogList">
          </ul>
        </div>
      </div>
    </div>

  </div>
`;

// Function to Render All Page Content Dynamically
function renderBinDetails(binId) {
  const binData = binDatabase[binId];
  if (!binData) return;

  // Update header
  document.getElementById('binTitle').textContent = binData.title;
  document.getElementById('binLocation').textContent = binData.location;

  // Update metrics
  document.getElementById('fillLevelValue').textContent = `${binData.metrics.fillLevel}%`;
  document.getElementById('temperatureValue').textContent = `${binData.metrics.temperature}°C`;
  document.getElementById('lastCollectionValue').textContent = binData.metrics.lastCollection;
  const statusTag = document.getElementById('statusTag');
  statusTag.textContent = binData.metrics.status.text;
  statusTag.className = `metric-value ${binData.metrics.status.class}`;

  // Update Sensor Data
  document.getElementById('gasValue').textContent = `${binData.sensors.gas} ppm`;
  document.getElementById('humidityValue').textContent = `${binData.sensors.humidity}%`;
  document.getElementById('lidValue').textContent = binData.sensors.lid;
  document.getElementById('pingValue').textContent = binData.sensors.ping;

  // Update Event Log
  const eventLogList = document.getElementById('eventLogList');
  eventLogList.innerHTML = binData.log.map(item => `<li class="${item.class}">${item.text} <span>(${item.time})</span></li>`).join('');

  // Re-initialize Fill Level Chart
  if (fillLevelChartInstance) fillLevelChartInstance.destroy();
  fillLevelChartInstance = new Chart(document.getElementById('fillLevelChart'), {
    type: 'line',
    data: {
      labels: ["-6d", "-5d", "-4d", "-3d", "-2d", "yest", "today"],
      datasets: [{
        label: 'Fill Level (%)',
        data: binData.charts.fillHistory,
        borderColor: 'var(--eco-green)',
        backgroundColor: 'rgba(84, 196, 88, 0.1)',
        fill: true,
        tension: 0.4
      }]
    },
    options: { responsive: true, maintainAspectRatio: false }
  });

  // Re-initialize Map
  if (binLocationMapInstance) binLocationMapInstance.remove();
  const mapElement = document.getElementById('binLocationMap');
  if (mapElement) {
    binLocationMapInstance = L.map('binLocationMap').setView(binData.coords, 16);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(binLocationMapInstance);
    L.marker(binData.coords, {
        icon: L.icon({
            iconUrl: 'assets/Pin.svg', iconSize: [40, 40],
            iconAnchor: [20, 40], popupAnchor: [0, -40]
        })
    })
    .addTo(binLocationMapInstance)
    .bindPopup(`<strong>${binData.title}</strong><br>${binData.location}`).openPopup();


    setTimeout(() => binLocationMapInstance.invalidateSize(), 0);
  }
}

// Initialization Logic
export function initBinDetailsPage() {
  const selector = document.getElementById('binSelector');
  if (!selector) return;

  // Populate the dropdown if it's empty
  if(selector.options.length === 0) {
    Object.keys(binDatabase).forEach(binId => {
        const option = document.createElement('option');
        option.value = binId;
        option.textContent = binDatabase[binId].title;
        selector.appendChild(option);
    });
  }

  // Add event listener for changes
  selector.addEventListener('change', (e) => {
    renderBinDetails(e.target.value);
  });

  // Initial render for the first bin in the database
  const initialBinId = Object.keys(binDatabase)[0];
  selector.value = initialBinId;
  renderBinDetails(initialBinId);
}

