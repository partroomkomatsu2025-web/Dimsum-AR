const prices = {
    "dimsumS": 10000,
    "dimsumL": 20000,
    "dimsumXL": 28000
};

let quantities = {
    "dimsumS": 0,
    "dimsumL": 0,
    "dimsumXL": 0
};

function updateQuantity(product, action) {
    if (action === 'increase') {
        quantities[product]++;
    } else if (action === 'decrease' && quantities[product] > 0) {
        quantities[product]--;
    }

    document.getElementById(`${product}Qty`).textContent = quantities[product];
    updateTotalPrice();
}

function updateTotalPrice() {
    let total = 0;
    for (let product in quantities) {
        total += quantities[product] * prices[product];
    }
    document.getElementById("totalPrice").textContent = total;

    // Update WhatsApp link with the correct message
    const message = `Halo, saya ingin membeli Dimsum:\n` +
                    `Dimsum S: ${quantities.dimsumS} pcs\n` +
                    `Dimsum L: ${quantities.dimsumL} pcs\n` +
                    `Dimsum XL: ${quantities.dimsumXL} pcs\n` +
                    `Total Pembayaran: Rp ${total}`;
    const whatsappLink = `https://wa.me/6281381447246?text=${encodeURIComponent(message)}`;
    document.getElementById("whatsappLink").setAttribute("href", whatsappLink);
}
