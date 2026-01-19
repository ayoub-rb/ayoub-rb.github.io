* {
    box-sizing: border-box;
    font-family: Arial, sans-serif;
}

body {
    margin: 0;
    background: #f2f2f2;
}

/* HEADER */
.header {
    background: #111;
    color: white;
    text-align: center;
    padding: 15px;
}

/* HERO */
.hero {
    height: 60vh;
    position: relative;
}

.hero video {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.hero-text {
    position: absolute;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background: rgba(0,0,0,0.4);
}

/* PRODUCTS GRID – DESKTOP FIRST */
.products {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    padding: 40px;
    max-width: 1200px;
    margin: auto;
}

/* PRODUCT CARD */
.product-card {
    background: white;
    padding: 20px;
    border-radius: 15px;
    text-align: center;
    box-shadow: 0 10px 30px rgba(0,0,0,0.15);
}

.product-card img {
    width: 100%;
    border-radius: 12px;
}

.product-card select {
    width: 100%;
    padding: 10px;
    margin: 8px 0;
}

.stars {
    color: gold;
    font-size: 20px;
}

.order-btn {
    width: 100%;
    padding: 12px;
    background: black;
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
}

/* MODAL OVERLAY */
.modal {
    display: none;
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.7);
    justify-content: center;
    align-items: center;
}

.modal-box {
    background: white;
    padding: 30px;
    width: 450px;
    max-width: 90%;
    border-radius: 15px;
    position: relative;
}

.modal-box input {
    width: 100%;
    padding: 12px;
    margin: 8px 0;
}

.submit {
    width: 100%;
    padding: 12px;
    background: #fbc531;
    border: none;
    border-radius: 10px;
    font-size: 16px;
}

.close {
    position: absolute;
    right: 15px;
    top: 10px;
    font-size: 24px;
    cursor: pointer;
}

/* TABLET */
@media (max-width: 1024px) {
    .products {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* MOBILE (still works, but secondary) */
@media (max-width: 600px) {
    .products {
        grid-template-columns: 1fr;
    }
}
