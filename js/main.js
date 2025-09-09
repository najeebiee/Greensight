// Sidebar navigation logic (modular page content)
import { dashboard, initDashboardCharts } from './dashboard.js';
import { map, initMap } from './map.js';
import { binDetails } from './binDetails.js';
import { alerts } from './alerts.js';
import { reports } from './reports.js';
import { settings } from './settings.js';
import { help } from './help.js';
import { about } from './about.js';

document.addEventListener('DOMContentLoaded', () => {
  const sidebarLinks = document.querySelectorAll('.sidebar a');
  const mainContent = document.getElementById('main-content');

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

  // Show Dashboard by default on load
  mainContent.innerHTML = pages['dashboard'];
  if (typeof initDashboardCharts === 'function') {
    setTimeout(() => {
      initDashboardCharts();
    }, 0);
  }
  // Sidebar active state
  sidebarLinks.forEach(l => l.classList.remove('active'));
  const defaultLink = document.querySelector('.sidebar a[data-page="dashboard"]');
  if (defaultLink) defaultLink.classList.add('active');

  sidebarLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      // remove active class from all
      sidebarLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      // load page content
      const page = link.getAttribute('data-page');
      mainContent.innerHTML = pages[page];
      // If Map page, initialize the map
      if (page === 'map') {
        setTimeout(() => {
          initMap();
        }, 0);
      }
      // If Dashboard page, initialize dashboard charts
      if (page === 'dashboard') {
        setTimeout(() => {
          initDashboardCharts();
        }, 0);
      }
    });
  });
});
