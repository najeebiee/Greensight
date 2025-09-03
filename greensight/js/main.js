const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('toggle-btn');
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('collapsed');
});

dropdownToggles.forEach(toggle => {
  toggle.addEventListener('click', e => {
    e.preventDefault();
    const parent = toggle.parentElement;
    parent.classList.toggle('open');
  });
});
