// 📌 Requirements
// 1. Fetch Data
// Use API:
// https://fakestoreapi.com/products
// Use fetch() with .then() or async/await

////====================================================================================================================

// 2. Display Products
// For each product:
// Show:
// Product Title (limit to 20 chars)
// Product Image
// Description (limit to 60 chars)
// Price button

////====================================================================================================================

// 3. UI Design
// Use Flexbox or Grid
// Cards should look clean and aligned
// Add:
// Border radius
// Spacing
// Hover effect (scale or shadow)

////====================================================================================================================

// 4. Error Handling
// If API fails:
// Show "Error loading data" in red color
// 🔥 Level Up (Important for evaluation)
// ⭐ Task 1: Loader
// Show "Loading..." before API loads
// Remove after data is displayed
// ⭐ Task 2: Search Filter
// Add an input box
// Filter products based on title (real-time typing)
// ⭐ Task 3: Price Sorting
// Add buttons:
// Sort Low → High
// Sort High → Low
// ⭐ Task 4: Category Filter
// Add dropdown:
// electronics
// jewelery
// men's clothing
// women's clothing
// ⭐ Task 5: View Details
// Add "View More" button
// Show full details in:
// Modal OR
// New page

let allProducts = [];
let filteredProducts = [];
let box;
let searchInput, categorySelect;

window.addEventListener("DOMContentLoaded", () => {
  box = document.getElementById("products");
  searchInput = document.getElementById("search");
  categorySelect = document.getElementById("category");

 categorySelect.addEventListener("change", applyFilters);
 searchInput.addEventListener("input", applyFilters);

  document.getElementById("modal")
  .addEventListener("click", function(e) {
  if (e.target.id === "modal") {
  closeModal();
  }
});

  products();

});

async function products() {

    box.innerHTML = "<h2>Loading...</h2>";

  try {

    let api = await fetch("https://fakestoreapi.com/products");
    let data = await api.json();

    allProducts = data;
    filteredProducts = data;

    displayProducts(filteredProducts);

  } catch (error) {

    box.innerHTML =
      "<h2 style='color:red'>Error loading data</h2>";

    console.log(error);
  }
}

function displayProducts(items) {

  box.innerHTML = "";

  if (items.length === 0) {
    box.innerHTML = "<h2>No Products Found</h2>";
    return;
  }

  items.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <h3>${product.title.slice(0,20)}</h3>
      <img src="${product.image}" 
           alt="${product.title}"          
           onerror="this.src='https://via.placeholder.com/150'"
           width="100%">
      <p>${product.description.slice(0,60)}...</p>
      <p>⭐ ${product.rating?.rate || "N/A"}</p>
      <button>$${product.price}</button>
      <button onclick="viewDetails(${product.id})">
         View More
      </button>
  `;

  box.appendChild(card);
  });
    window.scrollTo({ top: 0, behavior: "smooth" });

}

let currentSort = ""; 

function applyFilters() {
  let searchValue = searchInput.value.toLowerCase();
  let categoryValue = categorySelect.value;

  let result = allProducts.filter(item => {
    let matchSearch = item.title.toLowerCase().includes(searchValue);
    let matchCategory = categoryValue === "all" || item.category === categoryValue;
    return matchSearch && matchCategory;
  });

  // apply sorting after filtering
  if (currentSort === "low") {
    result.sort((a, b) => a.price - b.price);
  } else if (currentSort === "high") {
    result.sort((a, b) => b.price - a.price);
  }

  filteredProducts = result;
  displayProducts(filteredProducts);
}

function sortLow() {
  currentSort = "low";
  applyFilters();
}

function sortHigh() {
  currentSort = "high";
  applyFilters();
}

function viewDetails(id) {

  let product = allProducts.find((item) => item.id === id);
  if (!product) return;

const modal = document.getElementById("modal");
modal.style.display = "flex";

  document.getElementById("modalData").innerHTML = `
    <h2>${product.title}</h2>
    <img src="${product.image}" width="200">
    <p>${product.description}</p>
    <h3>Price: $${product.price}</h3>
    <h4>Category: ${product.category}</h4>
  `;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

