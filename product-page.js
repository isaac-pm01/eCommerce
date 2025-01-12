document.addEventListener("DOMContentLoaded", function () {
    const addToCartButton = document.querySelector(".product_btn");

    // Extract product details from the DOM
    const productName = document.querySelector(".product-title").innerText;
    const productPrice = parseFloat(
        document.querySelector(".product-price").innerText.replace("$", "")
    );
    const productImage = document.querySelector("#mainImage").src; // Extract main product image URL
    const quantityInput = document.getElementById("quantity");
    const sizeSelect = document.getElementById("size");

    // Generate a unique product ID
    const productId = productName.toLowerCase().replace(/\s+/g, "-");

    // Handle Add to Cart click event
    addToCartButton.addEventListener("click", function () {
        const quantity = parseInt(quantityInput.value);
        const selectedSize = sizeSelect.value;

        if (!selectedSize) {
            alert("Please select a size before adding to cart.");
            return;
        }

        if (quantity > 0) {
            // Retrieve the cart from localStorage or initialize a new one
            let cart = JSON.parse(localStorage.getItem("cart")) || [];

            // Check if the product with the same size already exists in the cart
            const existingProductIndex = cart.findIndex(
                (item) => item.id === productId && item.size === selectedSize
            );

            if (existingProductIndex > -1) {
                // Update the quantity if the product already exists
                cart[existingProductIndex].quantity += quantity;
            } else {
                // Add the new product to the cart
                const newProduct = {
                    id: productId,
                    name: productName,
                    price: productPrice,
                    image: productImage, // Include the product image
                    quantity: quantity,
                    size: selectedSize, // Add the size
                };
                cart.push(newProduct);
            }

            // Save the updated cart back to localStorage
            localStorage.setItem("cart", JSON.stringify(cart));

            alert(`Added ${quantity} ${productName}(s) (Size: ${selectedSize}) to the cart.`);
        } else {
            alert("Please enter a valid quantity.");
        }
    });

    // Thumbnail click functionality
    const thumbnails = document.querySelectorAll(".img-thumbnail");
    const mainImage = document.getElementById("mainImage");

    thumbnails.forEach((thumbnail) => {
        thumbnail.addEventListener("click", function () {
            mainImage.src = thumbnail.src;
            thumbnails.forEach((thumb) => thumb.classList.remove("active-thumbnail"));
            thumbnail.classList.add("active-thumbnail");
        });
    });
});
