// js/alerts.js

// 1. Mock Data for Alerts (using 'let' to allow modification)
let alertsData = [
  { id: 1, severity: 'critical', binId: '#105', location: 'Damosa IT Park', title: 'Critical Temperature Alert', description: 'Internal temperature detected at <strong>68°C</strong>. Possible fire hazard.', time: '15m ago', icon: 'fa-thermometer-three-quarters' },
  { id: 2, severity: 'critical', binId: '#107', location: 'SM City Ecoland', title: 'Bin Overflow Warning', description: 'Fill level has reached <strong>98%</strong>. Schedule collection immediately.', time: '45m ago', icon: 'fa-trash-alt' },
  { id: 3, severity: 'warning', binId: '#102', location: 'SM Lanang Premier', title: 'Unusual Activity Detected', description: 'Rapid fill increase suggests possible illegal dumping or sensor malfunction.', time: '2h ago', icon: 'fa-bolt' },
  { id: 4, severity: 'warning', binId: '#109', location: 'Davao City Hall', title: 'Maintenance Required', description: 'Lid sensor is unresponsive. Please schedule a check-up.', time: '5h ago', icon: 'fa-wrench' },
  { id: 5, severity: 'info', binId: '#108', location: 'UP Mindanao', title: 'Collection Completed', description: 'Bin #108 successfully emptied by crew.', time: 'yesterday', icon: 'fa-check-circle' },
  { id: 6, severity: 'info', binId: '#104', location: 'Ateneo de Davao', title: 'Bin Back Online', description: 'Bin #104 is back online after routine maintenance.', time: 'yesterday', icon: 'fa-power-off' },

  // --- New mock alerts ---
  { id: 7, severity: 'critical', binId: '#110', location: 'Abreeza Mall', title: 'Smoke Detected', description: 'Sensor has detected <strong>smoke particles</strong>. Immediate inspection required.', time: '10m ago', icon: 'fa-smoking-ban' },
  { id: 8, severity: 'warning', binId: '#111', location: 'Victoria Plaza', title: 'Power Fluctuation', description: 'Intermittent connectivity due to unstable power supply.', time: '30m ago', icon: 'fa-plug' },
  { id: 9, severity: 'info', binId: '#112', location: 'People’s Park', title: 'Routine Inspection Completed', description: 'Bin #112 checked and cleared by maintenance team.', time: '3h ago', icon: 'fa-clipboard-check' },
  { id: 10, severity: 'critical', binId: '#113', location: 'Gaisano Mall', title: 'Gas Leak Warning', description: 'Detected unusual <strong>methane levels</strong>. Possible hazard.', time: '4h ago', icon: 'fa-exclamation-triangle' },
  { id: 11, severity: 'warning', binId: '#114', location: 'Crooked Road Depot', title: 'Network Disruption', description: 'Unable to transmit real-time data. Possible network outage.', time: '6h ago', icon: 'fa-wifi' },
  { id: 12, severity: 'info', binId: '#115', location: 'Matina Crossing', title: 'System Update Applied', description: 'Latest firmware patch applied successfully.', time: '12h ago', icon: 'fa-sync-alt' },
  { id: 13, severity: 'critical', binId: '#116', location: 'Bangkerohan Market', title: 'Rapid Overflow Alert', description: 'Fill level increased from <strong>30%</strong> to <strong>95%</strong> within 20 minutes.', time: 'yesterday', icon: 'fa-tachometer-alt' },
  { id: 14, severity: 'info', binId: '#117', location: 'Davao Airport', title: 'Bin Serviced', description: 'Routine service completed, all sensors calibrated.', time: '2 days ago', icon: 'fa-tools' }
];

// 2. HTML Structure with a <template> for a single alert card
export const alerts = `
  <div class="alerts-page">
    <div class="page-header">
      <h2>Alerts</h2>
      <p>Real-time notifications for bin status and system events.</p>
    </div>

    <div class="filter-bar">
      <span>Filter by:</span>
      <button class="filter-btn active" data-filter="all">All</button>
      <button class="filter-btn" data-filter="critical">Critical</button>
      <button class="filter-btn" data-filter="warning">Warning</button>
      <button class="filter-btn" data-filter="info">Info</button>
    </div>

    <div id="alerts-list" class="alerts-list-container"></div>

    <!-- NEW APPROACH: HTML TEMPLATE for an alert card -->
    <template id="alert-card-template">
      <div class="alert-card">
        <div class="alert-icon">
          <i class="fas"></i>
        </div>
        <div class="alert-content">
          <h4></h4>
          <p></p>
        </div>
        <div class="alert-actions">
          <span class="alert-time"></span>
          <button class="btn-details">View Bin</button>
          <button class="btn-resolve">Resolve</button>
        </div>
      </div>
    </template>
  </div>
`;

// 3. NEW renderAlerts Function using the template
function renderAlerts() {
  const container = document.getElementById('alerts-list');
  const template = document.getElementById('alert-card-template');
  if (!container || !template) return;

  // Clear previous alerts
  container.innerHTML = '';

  const currentFilter = document.querySelector('.filter-btn.active').dataset.filter;
  const filteredAlerts = (currentFilter === 'all')
    ? alertsData
    : alertsData.filter(alert => alert.severity === currentFilter);

  if (filteredAlerts.length === 0) {
    container.innerHTML = '<p class="no-alerts">No alerts for this category.</p>';
    return;
  }

  filteredAlerts.forEach(alert => {
    // Clone the template content
    const card = template.content.cloneNode(true);
    
    // Select elements within the cloned card
    const cardElement = card.querySelector('.alert-card');
    const iconElement = card.querySelector('.alert-icon i');
    const titleElement = card.querySelector('h4');
    const descElement = card.querySelector('p');
    const timeElement = card.querySelector('.alert-time');
    const viewBtn = card.querySelector('.btn-details');
    const resolveBtn = card.querySelector('.btn-resolve');

    // Populate the card with data
    cardElement.classList.add(`status-${alert.severity}`);
    iconElement.classList.add(alert.icon);
    titleElement.innerHTML = `${alert.title} - <strong>${alert.binId} (${alert.location})</strong>`;
    descElement.innerHTML = alert.description;
    timeElement.textContent = alert.time;
    
    // Add event listener for "Resolve" button
    resolveBtn.addEventListener('click', () => {
        alertsData = alertsData.filter(item => item.id !== alert.id);
        renderAlerts(); // Re-render the list
    });

    // Add event listener for "View Bin" button
    viewBtn.addEventListener('click', () => {
        const binDetailsLink = document.querySelector('.sidebar a[data-page="binDetails"]');
        if (binDetailsLink) binDetailsLink.click();
    });

    // Append the populated card to the container
    container.appendChild(card);
  });
}

// 4. Initialization Function for the Page
export function initAlertsPage() {
  renderAlerts(); // Initial render

  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      renderAlerts();
    });
  });
}


