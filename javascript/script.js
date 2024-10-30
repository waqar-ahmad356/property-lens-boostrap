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
  function toggleDropdown(element) {
    // Find the next sibling with the class "dropdown-content"
    const dropdownContent = element.nextElementSibling;
    dropdownContent.classList.toggle("show");
  }
  
  function animateCounter(element, target) {
    let count = 0;
    const increment = Math.ceil(target / 10); // Adjust speed here
    const interval = setInterval(() => {
        count += increment;
        if (count >= target) {
            count = target;
            clearInterval(interval);
        }
        element.innerText = count;
    }, 100); // Adjust timing here
}

document.querySelectorAll('.number').forEach(element => {
    const target = parseInt(element.getAttribute('data-target'));
    animateCounter(element, target);
});

function increment(id) {
  const countElement = document.getElementById(id);
  let count = parseInt(countElement.innerText);
  countElement.innerText = count + 1;
}

function decrement(id) {
  const countElement = document.getElementById(id);
  let count = parseInt(countElement.innerText);
  if (count > 0) { // Prevent negative numbers
      countElement.innerText = count - 1;
  }
}
function increment(id=bathroom-count) {
  const countElement = document.getElementById(id);
  let count = parseInt(countElement.innerText);
  countElement.innerText = count + 1;
}

function decrement(id=bathroom-count) {
  const countElement = document.getElementById(id);
  let count = parseInt(countElement.innerText);
  if (count > 0) { // Prevent negative numbers
      countElement.innerText = count - 1;
  }
}