const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

const productList = document.getElementById("product-list");
const cartList = document.getElementById("cart-list");
const clearCartBtn = document.getElementById("clear-cart-btn");

// Get cart from sessionStorage
let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

// Display products
products.forEach(function (product) {
  const li = document.createElement("li");

  li.innerText = `${product.name} - $${product.price} `;

  const button = document.createElement("button");
  button.innerText = "Add to Cart";

  button.addEventListener("click", function () {
    cart.push(product);

    sessionStorage.setItem("cart", JSON.stringify(cart));

    displayCart();
  });

  li.appendChild(button);
  productList.appendChild(li);
});

// Display cart
function displayCart() {
  cartList.innerHTML = "";

  cart.forEach(function (product) {
    const li = document.createElement("li");

    li.innerText = `${product.name} - $${product.price}`;

    cartList.appendChild(li);
  });
}

// Clear cart
clearCartBtn.addEventListener("click", function () {
  cart = [];

  sessionStorage.setItem("cart", JSON.stringify(cart));

  displayCart();
});

// Display saved cart after refresh
displayCart();