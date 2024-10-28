function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const navBtn = document.querySelector('.nav-btn');
    navMenu.classList.toggle('active');
    navBtn.classList.toggle('active');
  
    // Only add the click event listener if the menu is open
    if (navMenu.classList.contains('active')) {
      document.addEventListener('click', closeMenuOnClickOutside);
    } else {
      document.removeEventListener('click', closeMenuOnClickOutside);
    }
  }
  
  function closeMenuOnClickOutside(event) {
    const navMenu = document.querySelector('.nav-menu');
    const navBtn = document.querySelector('.nav-btn');
    const hamburger = document.querySelector('.hamburger');
  
    // Check if the click happened outside the menu and hamburger
    if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
      navMenu.classList.remove('active');
      navBtn.classList.remove('active');
      document.removeEventListener('click', closeMenuOnClickOutside); // Remove listener after menu closes
    }
  }
  