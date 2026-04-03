import React from 'react';
import './App.css';

function HomePage() {
    return (
        <div className="homepage">
            <section className="hero">
                <h1>Welcome to Harshika Cakes and Home Bakers!</h1>
                <p>Delicious cakes made with love and passion.</p>
                <button>Order Now</button>
            </section>
            <section className="features">
                <h2>Why Choose Us?</h2>
                <ul>
                    <li>Fresh Ingredients</li>
                    <li>Custom Designs</li>
                    <li>Quick Delivery</li>
                </ul>
            </section>
            <section className="products">
                <h2>Our Products</h2>
                <div className="product-showcase">
                    <div className="product">
                        <h3>Chocolate Cake</h3>
                        <p>Rich and moist chocolate cake.</p>
                    </div>
                    <div className="product">
                        <h3>Vanilla Cupcakes</h3>
                        <p>Light and fluffy vanilla cupcakes.</p>
                    </div>
                    <div className="product">
                        <h3>Red Velvet Cake</h3>
                        <p>Classic red velvet cake with cream cheese frosting.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HomePage;