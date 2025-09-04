// Sidebar navigation logic
    const sidebarLinks = document.querySelectorAll('.sidebar a');
    const mainContent = document.getElementById('main-content');

    const pages = {
      dashboard: `
        <h2>Dashboard</h2>
        <p>Welcome to GreenSight! Here you’ll see an overview of bin statuses and metrics.</p>
      `,
      map: `
        <h2>Map View</h2>
        <p>Interactive map showing smart bin locations.</p>
      `,
      "bin-details": `
        <h2>Bin Details</h2>
        <p>Sensor data, historical charts, and maintenance actions.</p>
      `,
      alerts: `
        <h2>Alerts</h2>
        <p>Critical alerts and resolution tracking.</p>
      `,
      reports: `
        <h2>Reports</h2>
        <p>Exportable summaries and analytics.</p>
      `,
      settings: `
        <h2>Settings</h2>
        <p>Configure thresholds and preferences.</p>
      `,
      help: `
        <h2>Help / FAQ</h2>
        <p>Find guides and troubleshooting tips.</p>
      `,
      about: `
        <h2>About</h2>
        <p>GreenSight is an IoT smart bin monitoring system designed for sustainability.</p>
      `
    };

    sidebarLinks.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();

        // remove active class from all
        sidebarLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');

        // load page content
        const page = link.getAttribute('data-page');
        mainContent.innerHTML = pages[page];
      });
    });
