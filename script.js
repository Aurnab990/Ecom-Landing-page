const airPadProducts = [
    {
        imgSrc: 'https://c8.alamy.com/comp/RB8PDP/koszalin-poland-january-07-2019-new-version-of-ipad-pro-112018-the-ipad-pro-112018-is-new-tablet-with-multi-touch-screen-produced-by-appl-RB8PDP.jpg',
        name: 'AirPad Pro',
        details: 'High-quality wireless earbuds with noise-cancellation technology.',
        price: 199.99,
        stock: 50,
    },
    {
        imgSrc: 'https://www.geeky-gadgets.com/wp-content/uploads/2020/10/ipad-air-1.jpg',
        name: 'AirPad Max',
        details: 'Premium over-ear headphones with superior sound quality.',
        price: 299.99,
        stock: 30,
    },
    {
        imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSWDHFfOh8Watfmn_VkjhnEz0DG5WomYMB8QhnMRyfwLBZx8Sv9FISICoYfv3fGwzLWq0&usqp=CAU',
        name: 'AirPad Lite',
        details: 'Affordable wireless earbuds with clear audio and comfortable fit.',
        price: 79.99,
        stock: 100,
    },
    // Add more products here
    {
        imgSrc: 'https://i.gadgets360cdn.com/large/apple_ipad_2017_1491561475967.jpg',
        name: 'AirPad Sport',
        details: 'Sweat-resistant wireless earbuds designed for sports enthusiasts.',
        price: 129.99,
        stock: 60,
    },
    {
        imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg_kJ5aMAhPPE6n7YbP1az65BOmAyo_MDRV9o7qumee-x4rTJ9360MrZk1vBMkkwZnjJU&usqp=CAU',
        name: 'AirPad Studio',
        details: 'Professional studio headphones for audio production and mixing.',
        price: 399.99,
        stock: 20,
    },
    {
        imgSrc: 'https://khalidlemar.com/wp-content/uploads/2016/10/61PBkKrMfML._SL1200_.jpg',
        name: 'AirPad Mini',
        details: 'Compact wireless earbuds with long battery life for on-the-go use.',
        price: 129.99,
        stock: 80,
    },
    {
        imgSrc: 'https://remarket.dk/wp-content/uploads/2021/11/apple-ipad-mini-4-1.jpg',
        name: 'AirPad Gaming',
        details: 'Gaming earbuds with low-latency audio for immersive gaming experiences.',
        price: 149.99,
        stock: 40,
    },
    {
        imgSrc: 'https://whatmobilez.com/wp-content/uploads/2021/04/Apple-iPad-Air-ipad-2019-600x600.jpg',
        name: 'AirPad Classic',
        details: 'Timeless classic headphones with a retro design and modern sound.',
        price: 179.99,
        stock: 70,
    },
    {
        imgSrc: 'https://cdn.shopify.com/s/files/1/0327/9585/2937/products/IPAD-2021-SPACE-GREY.jpg?v=1631970817',
        name: 'AirPad Pro 2',
        details: 'Next-generation wireless earbuds with enhanced features and comfort.',
        price: 249.99,
        stock: 35,
    },
    {
        imgSrc: 'https://cdn.mall.adeptmind.ai/https%3A%2F%2Fwww.virginplus.ca%2Fassets%2Fphones%2F10-20AT1%2F10-20AT1_phoneFront.png_large.webp',
        name: 'AirPad Premium',
        details: 'Luxurious over-ear headphones crafted with premium materials.',
        price: 499.99,
        stock: 15,
    },
    {
        imgSrc: 'https://d1rlzxa98cyc61.cloudfront.net/catalog/product/cache/1801c418208f9607a371e61f8d9184d9/1/8/185687_2022.jpg',
        name: 'AirPad Active',
        details: 'Active lifestyle earbuds with water resistance and rugged durability.',
        price: 99.99,
        stock: 90,
    },
    {
        imgSrc: 'https://iworldconnect.com/cdn/shop/products/iPad_10th-Gen_Wi-Fi_Lineup_Screen__USEN_345x550.png?v=1666383969',
        name: 'AirPad Elite',
        details: 'Elite-class wireless earbuds with advanced features and exceptional sound.',
        price: 299.99,
        stock: 25,
    },
];


// Function to display products in 3 columns with 4 rows per column
function displayProducts() {
    const productContainer = document.querySelector('.product-list');
    productContainer.innerHTML = '';

    const columns = 3;
    const productsPerRow = 4;
    const totalProducts = airPadProducts.length;

    for (let column = 0; column < columns; column++) {
        const columnDiv = document.createElement('div');
        columnDiv.classList.add('product-column');

        for (let row = 0; row < productsPerRow; row++) {
            const productIndex = column * productsPerRow + row;
            
            if (productIndex < totalProducts) {
                const product = airPadProducts[productIndex];
                const productDiv = document.createElement('div');
                productDiv.classList.add('product');
                productDiv.innerHTML = `
                <img src=${product.imgSrc} class="product-image">
                    <h2>${product.name}</h2>
                    <h5>${product.details.slice(0,28)}</h5>
                    <p>Price: $${product.price}</p>
                    <p>Availability: ${product.stock > 0 ? 'In Stock' : 'Out of Stock'}</p>
                    <button class="add-to-cart" data-index="${productIndex}">Add to Cart</button>
                `;
                columnDiv.appendChild(productDiv);
            }
        }

        productContainer.appendChild(columnDiv);
    }
}

let cart = [];
let orderHistory = [];

// Function to update the shopping cart
function updateCart() {
    const cartList = document.getElementById('cart-items');
    cartList.innerHTML = '';

    cart.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <div class="cart-item">
                <img src="${item.imgSrc}" class="cart-item-image">
                <div class="cart-item-details">
                    <h3>${item.name}</h3>
                    <p>Price: $${item.price.toFixed(2)}</p>
                </div>
                <button class="confirm-button" data-index="${index}">Confirm</button>
                <button class="delete-button" data-index="${index}">Delete</button>
            </div>
        `;
        cartList.appendChild(listItem);
    });
    const confirmButtons = document.querySelectorAll('.confirm-button');
    const deleteButtons = document.querySelectorAll('.delete-button');
    confirmButtons.forEach((button) => {
        button.addEventListener('click', confirmCartItem);
    });
    deleteButtons.forEach((button) => {
        button.addEventListener('click', deleteCartItem);
    });
}
function confirmCartItem(event) {
    const index = event.target.dataset.index;
    const confirmedProduct = cart.splice(index, 1)[0];
    orderHistory.push(confirmedProduct);
    updateCart();
    displayOrderHistory();
}
function deleteCartItem(event) {
    const index = event.target.dataset.index;
    cart.splice(index, 1);
    updateCart();
}


// Function to handle "Add to Cart" button click
function addToCart(event) {
    const index = event.target.dataset.index;
    const selectedProduct = airPadProducts[index];

    if (selectedProduct.stock > 0) {
        cart.push(selectedProduct);
        updateCart();
        // Decrease the stock count
        selectedProduct.stock--;
        // Update the product availability
        const productAvailability = document.querySelector(`.product[data-index="${index}"] p`);
        productAvailability.textContent = `Availability: ${selectedProduct.stock > 0 ? 'In Stock' : 'Out of Stock'}`;
    }
}

// Function to handle "Confirm Order" button click
function confirmOrder() {
    orderHistory.push(...cart);
    cart = [];
    updateCart();
    displayOrderHistory();
}

// Function to display order history
function displayOrderHistory() {
    const orderHistoryList = document.getElementById('order-history');
    orderHistoryList.innerHTML = '';

    orderHistory.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <div class="order-history-item">
                <img src="${item.imgSrc}" class="order-history-item-image">
                <div class="order-history-item-details">
                    <p>Order ${index + 1}:</p>
                    <h3>${item.name}</h3>
                    <p>Price: $${item.price.toFixed(2)}</p>
                </div>
            </div>
        `;
        orderHistoryList.appendChild(listItem);
    });
}

// Rest of the JavaScript code (including displayProducts) remains the same...


// Add event listeners
document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach((button) => {
        button.addEventListener('click', addToCart);
    });

    const confirmOrderButton = document.getElementById('confirm-order');
    confirmOrderButton.addEventListener('click', confirmOrder);
});

// Initial display of products
document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach((button) => {
        button.addEventListener('click', addToCart);
    // Add event listeners for cart and order functionality here...
});
const confirmOrderButton = document.getElementById('confirm-order');
    confirmOrderButton.addEventListener('click', confirmOrder);
});