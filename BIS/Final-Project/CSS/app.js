document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.getElementById('sidebar');
  const toggleButton = document.getElementById('toggle-btn');

  // Sidebar collapse
  if (toggleButton) {
    toggleButton.addEventListener('click', () => {
      sidebar.classList.toggle('close');
    });
  }

  // Dropdown menus
  const dropdownButtons = document.querySelectorAll('.dropdown-btn');

  dropdownButtons.forEach(button => {
    button.addEventListener('click', () => {
      const submenu = button.nextElementSibling;
      if (!submenu) return;

      // Close other submenus
      document.querySelectorAll('#sidebar .sub-menu').forEach(ul => {
        if (ul !== submenu) {
          ul.classList.remove('show');
          ul.previousElementSibling.classList.remove('rotate');
        }
      });

      // Toggle clicked submenu
      submenu.classList.toggle('show');
      button.classList.toggle('rotate');
    });
  });
});
