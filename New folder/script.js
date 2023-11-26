// Sample menu items
const menuItems = [
    { name: "Burger", price: 5.99 },
    { name: "Pizza", price: 9.99 },
    { name: "Pasta", price: 7.99 },
];

const cartItems = [];

// Function to add an item to the cart
function addToCart(item) {
    cartItems.push(item);
    updateCart();
}

// Function to update the cart UI
function updateCart() {
    const cartList = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    // Clear the cart
    cartList.innerHTML = "";

    let total = 0;

    // Populate the cart
    cartItems.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartList.appendChild(li);
        total += item.price;
    });

    cartTotal.textContent = total.toFixed(2);
}

// Initialize the menu
const menuList = document.querySelector(".menu ul");
menuItems.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `
        <span class="item-name">${item.name}</span>
        <span class="item-price">$${item.price.toFixed(2)}</span>
        <button class="add-to-cart">Add to Cart</button>
    `;
    const addToCartButton = li.querySelector(".add-to-cart");
    addToCartButton.addEventListener("click", () => addToCart(item));
    menuList.appendChild(li);
});

// Handle checkout
const checkoutButton = document.getElementById("checkout");
checkoutButton.addEventListener("click", () => {
    alert("Thank you for your order!");
    cartItems.length = 0; // Clear the cart
    updateCart();
});
