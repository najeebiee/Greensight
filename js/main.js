// js/main.js

// Sidebar navigation logic
import { dashboard, initDashboardCharts } from './dashboard.js';
import { map, initMap } from './map.js';
import { binDetails, initBinDetailsPage } from './binDetails.js';
import { alerts, initAlertsPage } from './alerts.js';
import { reports, initReportsPage } from './reports.js';
import { settings } from './settings.js';
import { help, initHelpPage } from './help.js';
import { about } from './about.js';

document.addEventListener('DOMContentLoaded', () => {
  const sidebarLinks = document.querySelectorAll('.sidebar a');
  const mainContent = document.getElementById('main-content');
  const pageTitle = document.getElementById('page-title');

  const pages = {
    dashboard,
    map,
    binDetails,
    alerts,
    reports,
    settings,
    help,
    about
  };

  // Logic to handle page loading
  function loadPage(page) {
    if (!pages[page]) {
      mainContent.innerHTML = `<h2>Page not found: ${page}</h2>`;
      return;
    }
    
    // Set the HTML content for the selected page
    mainContent.innerHTML = pages[page];

    // Update the navbar title
    const activeLink = document.querySelector(`.sidebar a[data-page="${page}"]`);
    if (activeLink && pageTitle) {
      // Get text content, excluding the icon
      const titleText = activeLink.textContent.trim();
      pageTitle.textContent = titleText;
    }

    // Call the correct init function for the page
    setTimeout(() => {
      if (page === 'dashboard') {
        initDashboardCharts();
      } else if (page === 'map') {
        initMap();
      } else if (page === 'binDetails') {
        initBinDetailsPage();
      } else if (page === 'alerts') {
        initAlertsPage();
      } else if (page === 'reports') {
        initReportsPage();
      } else if (page === 'help') {
        initHelpPage();
      }
    }, 0);
  }

  // Handle sidebar link clicks
  sidebarLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      
      sidebarLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      
      const page = link.getAttribute('data-page');
      loadPage(page);
    });
  });

  // Load the dashboard by default
  loadPage('dashboard');
});

