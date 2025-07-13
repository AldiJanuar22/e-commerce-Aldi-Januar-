let cart = [];

function showSection(sectionId) {
    document.querySelectorAll('section').forEach(sec => {
        sec.classList.remove('active');
    });

    document.getElementById(sectionId).classList.add('active');
}

function addToCart(id, name, price) {
    const existingProduct = cart.find(item => item.id === id);

    if (existingProduct) {
        existingProduct.qty += 1;
    } else {
        cart.push({ id: id, name: name, price: price, qty: 1 });
    }

    updateCart();
}

function buyNow(id, name, price) {
    alert(`Terima kasih sudah membeli ${name} seharga Rp ${price.toLocaleString('id-ID')}`);
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');

    let total = 0;
    let totalQty = 0;
    cartItems.innerHTML = '';

    cart.forEach(item => {
        const subtotal = item.price * item.qty;
        total += subtotal;
        totalQty += item.qty;

        cartItems.innerHTML += `
            <div class="cart-item">
                ${item.name} x ${item.qty} = Rp ${subtotal.toLocaleString('id-ID')}
            </div>
        `;
    });

    cartCount.innerText = totalQty;
    cartTotal.innerText = `Rp ${total.toLocaleString('id-ID')}`;
}