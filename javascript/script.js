

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

// Sample data array
const properties = [
  {
      id: 1,
      source: "Realtor",
      image:"../assets/table-img.png",
      propertyType: "Apartment",
      street: "Elm St",
      houseNumber: 23,
      postalCode: 10115,
      city: "Berlin",
      district: "Degerloch",
      state: "Berlin",
      purchasePrice: "500,000 €",
      price: "500,000 €",
      action: "../assets/table-icon.png"
  },
  {
    id: 2,
    source: "Realtor",
    image:"../assets/table-img.png",
    propertyType: "Apartment",
    street: "Elm St",
    houseNumber: 23,
    postalCode: 10115,
    city: "Berlin",
    district: "Degerloch",
    state: "Berlin",
    purchasePrice: "500,000 €",
    price: "500,000 €",
    action: "../assets/table-icon.png"
},
{
  id: 3,
  source: "Realtor",
 image:"../assets/table-img.png",
  propertyType: "Apartment",
  street: "Elm St",
  houseNumber: 23,
  postalCode: 10115,
  city: "Berlin",
  district: "Degerloch",
  state: "Berlin",
  purchasePrice: "500,000 €",
  price: "500,000 €",
  action: "../assets/table-icon.png"
},
{
  id: 4,
  source: "Realtor",
 image:"../assets/table-img.png",
  propertyType: "Apartment",
  street: "Elm St",
  houseNumber: 23,
  postalCode: 10115,
  city: "Berlin",
  district: "Degerloch",
  state: "Berlin",
  purchasePrice: "500,000 €",
  price: "500,000 €",
  action: "../assets/table-icon.png"
},
{
  id: 5,
  source: "Realtor",
 image:"../assets/table-img.png",
  propertyType: "Apartment",
  street: "Elm St",
  houseNumber: 23,
  postalCode: 10115,
  city: "Berlin",
  district: "Degerloch",
  state: "Berlin",
  purchasePrice: "500,000 €",
  price: "500,000 €",
  action: "../assets/table-icon.png"
},
{
  id: 6,
  source: "Realtor",
 image:"../assets/table-img.png",
  propertyType: "Apartment",
  street: "Elm St",
  houseNumber: 23,
  postalCode: 10115,
  city: "Berlin",
  district: "Degerloch",
  state: "Berlin",
  purchasePrice: "500,000 €",
  price: "500,000 €",
  action: "../assets/table-icon.png"
},
{
  id: 7,
  source: "Realtor",
  image:"../assets/table-img.png",
  propertyType: "Apartment",
  street: "Elm St",
  houseNumber: 23,
  postalCode: 10115,
  city: "Berlin",
  district: "Degerloch",
  state: "Berlin",
  purchasePrice: "500,000 €",
  price: "500,000 €",
  action: "../assets/table-icon.png"
},
{
  id: 8,
  source: "Realtor",
  image:"../assets/table-img.png",
  propertyType: "Apartment",
  street: "Elm St",
  houseNumber: 23,
  postalCode: 10115,
  city: "Berlin",
  district: "Degerloch",
  state: "Berlin",
  purchasePrice: "500,000 €",
  price: "500,000 €",
  action: "../assets/table-icon.png"
},
{
  id: 9,
  source: "Realtor",
  image:"../assets/table-img.png",
  propertyType: "Apartment",
  street: "Elm St",
  houseNumber: 23,
  postalCode: 10115,
  city: "Berlin",
  district: "Degerloch",
  state: "Berlin",
  purchasePrice: "500,000 €",
  price: "500,000 €",
  action: "../assets/table-icon.png"
},
{
  id: 10,
  source: "Realtor",
  image:"../assets/table-img.png",
  propertyType: "Apartment",
  street: "Elm St",
  houseNumber: 23,
  postalCode: 10115,
  city: "Berlin",
  district: "Degerloch",
  state: "Berlin",
  purchasePrice: "500,000 €",
  price: "500,000 €",
  action: "../assets/table-icon.png"
},
{
  id: 11,
  source: "Realtor",
  image:"../assets/table-img.png",
  propertyType: "Apartment",
  street: "Elm St",
  houseNumber: 23,
  postalCode: 10115,
  city: "Berlin",
  district: "Degerloch",
  state: "Berlin",
  purchasePrice: "500,000 €",
  price: "500,000 €",
  action: "../assets/table-icon.png"
},
{
  id: 12,
  source: "Realtor",
  image:"../assets/table-img.png",
  propertyType: "Apartment",
  street: "Elm St",
  houseNumber: 23,
  postalCode: 10115,
  city: "Berlin",
  district: "Degerloch",
  state: "Berlin",
  purchasePrice: "500,000 €",
  price: "500,000 €",
  action: "../assets/table-icon.png"
},
{
  id: 13,
  source: "Realtor",
  image:"../assets/table-img.png",
  propertyType: "Apartment",
  street: "Elm St",
  houseNumber: 23,
  postalCode: 10115,
  city: "Berlin",
  district: "Degerloch",
  state: "Berlin",
  purchasePrice: "500,000 €",
  price: "500,000 €",
  action: "../assets/table-icon.png"
},
{
  id: 14,
  source: "Realtor",
  image:"../assets/table-img.png",
  propertyType: "Apartment",
  street: "Elm St",
  houseNumber: 23,
  postalCode: 10115,
  city: "Berlin",
  district: "Degerloch",
  state: "Berlin",
  purchasePrice: "500,000 €",
  price: "500,000 €",
  action: "../assets/table-icon.png"
},
{
  id: 15,
  source: "Realtor",
  image:"../assets/table-img.png",
  propertyType: "Apartment",
  street: "Elm St",
  houseNumber: 23,
  postalCode: 10115,
  city: "Berlin",
  district: "Degerloch",
  state: "Berlin",
  purchasePrice: "500,000 €",
  price: "500,000 €",
  action: "../assets/table-icon.png"
},
{
  id: 16,
  source: "Realtor",
  image:"../assets/table-img.png",
  propertyType: "Apartment",
  street: "Elm St",
  houseNumber: 23,
  postalCode: 10115,
  city: "Berlin",
  district: "Degerloch",
  state: "Berlin",
  purchasePrice: "500,000 €",
  price: "500,000 €",
  action: "../assets/table-icon.png"
},
{
  id: 17,
  source: "Realtor",
  image:"../assets/table-img.png",
  propertyType: "Apartment",
  street: "Elm St",
  houseNumber: 23,
  postalCode: 10115,
  city: "Berlin",
  district: "Degerloch",
  state: "Berlin",
  purchasePrice: "500,000 €",
  price: "500,000 €",
  action: "../assets/table-icon.png"
},
{
  id: 18,
  source: "Realtor",
  image:"../assets/table-img.png",
  propertyType: "Apartment",
  street: "Elm St",
  houseNumber: 23,
  postalCode: 10115,
  city: "Berlin",
  district: "Degerloch",
  state: "Berlin",
  purchasePrice: "500,000 €",
  price: "500,000 €",
  action: "../assets/table-icon.png"
},
{
  id: 19,
  source: "Realtor",
  image:"../assets/table-img.png",
  propertyType: "Apartment",
  street: "Elm St",
  houseNumber: 23,
  postalCode: 10115,
  city: "Berlin",
  district: "Degerloch",
  state: "Berlin",
  purchasePrice: "500,000 €",
  price: "500,000 €",
  action: "../assets/table-icon.png"
},
{
  id: 20,
  source: "Realtor",
  image:"../assets/table-img.png",
  propertyType: "Apartment",
  street: "Elm St",
  houseNumber: 23,
  postalCode: 10115,
  city: "Berlin",
  district: "Degerloch",
  state: "Berlin",
  purchasePrice: "500,000 €",
  price: "500,000 €",
  action: "../assets/table-icon.png"
},
{
  id: 21,
  source: "Realtor",
  image:"../assets/table-img.png",
  propertyType: "Apartment",
  street: "Elm St",
  houseNumber: 23,
  postalCode: 10115,
  city: "Berlin",
  district: "Degerloch",
  state: "Berlin",
  purchasePrice: "500,000 €",
  price: "500,000 €",
  action: "../assets/table-icon.png"
},
{
  id: 22,
  source: "Realtor",
  image:"../assets/table-img.png",
  propertyType: "Apartment",
  street: "Elm St",
  houseNumber: 23,
  postalCode: 10115,
  city: "Berlin",
  district: "Degerloch",
  state: "Berlin",
  purchasePrice: "500,000 €",
  price: "500,000 €",
  action: "../assets/table-icon.png"
},
  // Add more property objects as needed
];

// Function to generate rows dynamically
const tableBody = document.getElementById("table-body");

properties.map(property => {
  const row = document.createElement("tr");

  row.innerHTML = `
      <th><input type="checkbox" /></th>
      <th scope="row">${property.id}</th>
      <td><img src="${property.image}" alt="img" style="width:50px,height:"50px"/></td>
      <td>${property.source}</td>
      <td>${property.propertyType}</td>
      <td>${property.street}</td>
      <td>${property.houseNumber}</td>
      <td>${property.postalCode}</td>
      <td>${property.city}</td>
      <td>${property.district}</td>
      <td>${property.state}</td>
      <td>${property.purchasePrice}</td>
      <td>${property.price}</td>
      <td> <img src="${property.action}" alt="icon" style="width:18px;height:18px" /></td>
  `;

  tableBody.appendChild(row);
});

document.getElementById("filter-button").addEventListener("click", function() {
  const filterCard = document.getElementById("filter-card");
  filterCard.classList.toggle("show"); // Toggle the 'show' class
});

// Optional: Hide filter card when clicking outside of it
window.addEventListener("click", function(event) {
  const filterCard = document.getElementById("filter-card");
  const filterButton = document.getElementById("filter-button");
  if (!filterCard.contains(event.target) && !filterButton.contains(event.target)) {
      filterCard.classList.remove("show");
  }
});
document.getElementById("customize-button").addEventListener("click", function() {
  const dropdown = document.getElementById("customize-dropdown");
  dropdown.style.display = dropdown.style.display === "none" ? "block" : "none";
});

// Optional: Close dropdown when clicking outside
window.addEventListener("click", function(event) {
  const dropdown = document.getElementById("customize-dropdown");
  const button = document.getElementById("customize-button");
  if (!dropdown.contains(event.target) && !button.contains(event.target)) {
      dropdown.style.display = "none";
  }
});
document.getElementById("column-option").addEventListener("click", function(event) {
  event.stopPropagation();
  const dropdown = document.getElementById("column-dropdown");
  dropdown.style.display = dropdown.style.display === "none" ? "block" : "none";
});

// Close dropdown if clicking outside
window.addEventListener("click", function(event) {
  const dropdown = document.getElementById("column-dropdown");
  const columnOption = document.getElementById("column-option");
  if (!dropdown.contains(event.target) && !columnOption.contains(event.target)) {
      dropdown.style.display = "none";
  }
});
// Ensure popup and overlay are hidden on page load
window.onload = function() {
  document.getElementById('popupCard').style.display = 'none';
  document.getElementById('popupOverlay').style.display = 'none';
};
 // JavaScript to toggle the popup visibility and add blur effect
 function togglePopup() {
  const popup = document.getElementById('popupCard');
  const overlay = document.getElementById('popupOverlay');
  
  const isVisible = popup.style.display === 'block';
  
  popup.style.display = isVisible ? 'none' : 'block';
  overlay.style.display = isVisible ? 'none' : 'block';
  mainContent.classList.toggle('blurred', !isVisible); // Toggle blur class
}