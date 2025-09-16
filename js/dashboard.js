// js/dashboard.js

// --- Data source for bin locations (shared with map page) ---
const binLocations = [
    { coords: [7.0673, 125.6081], title: "eWaste Bin #101 - People's Park", desc: "Status: 68% full (Batteries, Phones)" },
    { coords: [7.0983, 125.6315], title: "eWaste Bin #102 - SM Lanang", desc: "Status: 85% full (Laptops, Chargers)" },
    { coords: [7.0609, 125.6053], title: "eWaste Bin #103 - Gaisano Mall", desc: "Status: 40% full (Mixed Small Electronics)" },
    { coords: [7.0722, 125.6128], title: "eWaste Bin #104 - Ateneo de Davao", desc: "Status: 25% full (Circuit Boards, Cables)" },
    { coords: [7.1158, 125.6472], title: "eWaste Bin #105 - Damosa IT Park", desc: "Status: 95% full (Office Electronics) - CRITICAL" },
    { coords: [7.0863, 125.6119], title: "eWaste Bin #106 - Abreeza Mall", desc: "Status: 75% full (Mixed Electronics)" },
    { coords: [7.0515, 125.5915], title: "eWaste Bin #107 - SM City Ecoland", desc: "Status: 90% full (Power Banks, Phones) - High" },
    { coords: [7.1136, 125.5714], title: "eWaste Bin #108 - UP Mindanao", desc: "Status: 15% full (Lab Equipment, Wires)" },
    { coords: [7.0683, 125.6091], title: "eWaste Bin #109 - Davao City Hall", desc: "Status: 55% full (Keyboards, Mice)" },
    { coords: [7.1256, 125.6456], title: "eWaste Bin #110 - Davao Airport", desc: "Status: 88% full (Confiscated Electronics)" }
];

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
                <div class="trend-indicator up">+2 Bins this week</div>
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
                <div class="trend-indicator up">+5% from yesterday</div>
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
                <div class="trend-indicator down">-3% from yesterday</div>
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
                <div class="trend-indicator up">+1.5% from yesterday</div>
                <div class="value-row">
                    <span class="value">68%</span> <i class="fas fa-arrow-up"></i>
                    <span class="last-value">Last: 66.5%</span>
                </div>
            </div>
        </div>
    </div>

    <!-- 🔹 Mini Map Widget -->
    <div class="map-widget-card">
      <div class="widget-header">
        <h3>Live Bin Locations</h3>
        <a href="#" class="view-all-link" data-page-link="map">View Full Map</a>
      </div>
      <div id="dashboardMiniMap" class="dashboard-map-container"></div>
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
        <h3 style="margin:0;">Collection Efficiency</h3>
        <p class="widget-subtitle">Percentage of bins collected on time</p>
        <div class="gauge-container">
          <div class="gauge-percentage">92%</div>
          <canvas id="efficiencyChart"></canvas>
          <div class="gauge-labels">
            <span>Low</span>
            <span>High</span>
          </div>
        </div>
        <div class="gauge-trend up">
          <i class="fas fa-arrow-up"></i>
          <span>+2.5% from last week</span>
        </div>
      </div>
      <div class="widget-card">
        <div class="widget-header">
          <h3>Recent Activity</h3>
          <button class="filter-btn-db">Filter <i class="fas fa-chevron-down"></i></button>
        </div>
        <ul class="activity-feed">
          <li class="activity-item status-critical">
            <div class="feed-icon"><i class="fas fa-exclamation-triangle"></i></div>
            <div class="feed-content"><p><strong>Bin #102</strong> in <strong>Downtown</strong> reported full.</p><span class="feed-time">15m ago</span></div>
          </li>
          <li class="activity-item status-success">
            <div class="feed-icon"><i class="fas fa-wrench"></i></div>
            <div class="feed-content"><p><strong>Maintenance</strong> completed on <strong>Bin #55</strong>.</p><span class="feed-time">1h ago</span></div>
          </li>
          <li class="activity-item status-info">
            <div class="feed-icon"><i class="fas fa-plus-circle"></i></div>
            <div class="feed-content"><p><strong>New bin added:</strong> #2451 in <strong>Industrial</strong>.</p><span class="feed-time">3h ago</span></div>
          </li>
        </ul>
      </div>
      <div class="widget-card high-priority">
        <div class="widget-header">
          <h3>High-Priority Bins</h3>
          <a href="#" class="view-all-link">View All</a>
        </div>
        <ul class="priority-list-enhanced">
          <li class="priority-item status-critical">
            <div class="priority-icon"><i class="fas fa-trash-alt"></i></div>
            <div class="priority-content"><p><strong>Bin #142</strong> (Market St)</p><div class="progress-bar"><div class="progress-bar-fill" style="width: 98%;"></div></div><span>98% Full</span></div>
            <div class="priority-action"><button class="btn-details">Details</button></div>
          </li>
          <li class="priority-item status-warning">
            <div class="priority-icon"><i class="fas fa-thermometer-half"></i></div>
            <div class="priority-content"><p><strong>Bin #88</strong> (Central Park)</p><span>Temp Alert: 55°C</span></div>
            <div class="priority-action"><button class="btn-details">Details</button></div>
          </li>
          <li class="priority-item status-maintenance">
            <div class="priority-icon"><i class="fas fa-wrench"></i></div>
            <div class="priority-content"><p><strong>Bin #201</strong> (Uptown)</p><span>Needs Maintenance</span></div>
            <div class="priority-action"><button class="btn-details">Details</button></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
`;

// --- Instance variable for the map ---
let dashboardMapInstance;

// --- Main initialization function ---
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
                    borderColor: 'var(--eco-green)',
                    backgroundColor: 'rgba(84, 196, 88, 0.2)',
                    fill: true,
                    tension: 0.4
                }]
            },
            options: { responsive: true, maintainAspectRatio: false }
        });
    }

    // 2. Fill Levels by District (Bar Chart)
    const ctxFillLevels = document.getElementById('fillLevelsChart');
    if (ctxFillLevels) {
        new Chart(ctxFillLevels, {
            type: 'bar',
            data: {
                labels: ["Poblacion", "Buhangin", "Talomo", "Tugbok"],
                datasets: [{
                    label: 'Average Fill Rate (%)',
                    data: [85, 91, 70, 55],
                    backgroundColor: ['#54c458', '#03a9f4', '#ff9800', '#607d8b']
                }]
            },
            options: {
                responsive: true, maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: { y: { beginAtZero: true, max: 100 } }
            }
        });
    }

    // 3. Collection Efficiency (Donut Chart)
    const ctxEfficiency = document.getElementById('efficiencyChart');
    if (ctxEfficiency) {
        const efficiencyValue = 92;
        const efficiencyColor = '#54c458';
        const percentageEl = ctxEfficiency.closest('.widget-card').querySelector('.gauge-percentage');
        if (percentageEl) { percentageEl.style.color = efficiencyColor; }
        new Chart(ctxEfficiency, {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [efficiencyValue, 100 - efficiencyValue],
                    backgroundColor: [efficiencyColor, '#e9ecef'],
                    borderColor: 'rgba(255, 255, 255, 0)',
                    circumference: 180,
                    rotation: -90,
                }]
            },
            options: {
                responsive: true, maintainAspectRatio: false, cutout: '75%',
                plugins: { legend: { display: false }, tooltip: { enabled: false } }
            }
        });
    }

    // Call the map initialization function
    initDashboardMiniMap();
}

// --- CORRECTED function to initialize the mini-map ---
function initDashboardMiniMap() {
    const mapElement = document.getElementById('dashboardMiniMap');
    if (!mapElement) return;

    if (dashboardMapInstance) { dashboardMapInstance.remove(); }

    const map = L.map('dashboardMiniMap').setView([7.0780, 125.6080], 12); // Zoom out slightly
    dashboardMapInstance = map;

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // --- FIX: Define the customIcon using your local SVG ---
    const customIcon = L.icon({
        iconUrl: 'assets/Pin.svg',
        iconSize: [40, 40],
        iconAnchor: [20, 40],
        popupAnchor: [0, -40]
    });

    // --- FIX: Remove the filter and add markers for ALL locations ---
    binLocations.forEach(loc => {
        L.marker(loc.coords, { icon: customIcon }) // Use the customIcon here
          .addTo(map)
          .bindPopup(`<b>${loc.title}</b><br>${loc.desc}`);
    });

    setTimeout(() => map.invalidateSize(), 0);

    // Make the "View Full Map" link functional
    const fullMapLink = document.querySelector('.view-all-link[data-page-link="map"]');
    const mapSidebarLink = document.querySelector('.sidebar a[data-page="map"]');
    if (fullMapLink && mapSidebarLink) {
        fullMapLink.addEventListener('click', (e) => {
            e.preventDefault();
            mapSidebarLink.click();
        });
    }
}

