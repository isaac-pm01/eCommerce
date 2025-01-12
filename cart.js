document.addEventListener("DOMContentLoaded", () => {
    const cartItemsContainer = document.getElementById("cart-items");

    // Retrieve cart from localStorage
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Populate cart items
    function renderCartItems() {
        cartItemsContainer.innerHTML = ""; // Clear existing items

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p class="text-center text-dark">Your cart is empty!</p>';
            return;
        }

        cart.forEach((item, index) => {
            const card = document.createElement("div");
            card.className = "col-md-4";
            card.innerHTML = `
                <div class="card text-bg-light">
                    <img src="${item.image}" class="card-img-top" alt="${item.name}">
                    <div class="card-body-cart">
                        <h5 class="card-title">${item.name}</h5>
                        <p class="card-text text-dark">Size: ${item.size}</p>
                        <p class="card-text text-dark">$${item.price.toFixed(2)} x ${item.quantity}</p>
                        <p class="card-text text-dark"><strong>Total: $${(item.price * item.quantity).toFixed(2)}</strong></p>
                        <button class="btn btn-danger btn-sm remove-item" data-index="${index}">Remove</button>
                    </div>
                </div>
            `;
            cartItemsContainer.appendChild(card);
        });
    }

    // Remove item from cart
    cartItemsContainer.addEventListener("click", (event) => {
        if (event.target.classList.contains("remove-item")) {
            const index = event.target.getAttribute("data-index");
            cart.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(cart));
            renderCartItems();
        }
    });

    // Checkout button handler
    const checkoutButton = document.getElementById("checkout-button");
    checkoutButton.addEventListener("click", () => {
        if (cart.length === 0) {
            alert("Your cart is empty!");
            return;
        }

        alert("Proceeding to checkout...");
        // You can add further checkout functionality here
    });

    // Initial render
    renderCartItems();
});
