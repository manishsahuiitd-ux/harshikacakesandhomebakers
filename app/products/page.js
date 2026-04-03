const products = [
    { 
        name: 'Chocolate Cake', 
        price: 20.00,
        description: 'Rich chocolate cake with layers of creamy frosting.'
    },
    { 
        name: 'Vanilla Cake', 
        price: 18.00,
        description: 'Classic vanilla cake with buttercream icing.'
    },
    { 
        name: 'Red Velvet Cake', 
        price: 22.00,
        description: 'Delicious red velvet cake topped with cream cheese frosting.'
    },
    { 
        name: 'Carrot Cake', 
        price: 19.00,
        description: 'Moist carrot cake with walnuts and cream cheese frosting.'
    }
];

export default function ProductsPage() {
    return (
        <div>
            <h1>Products Catalog</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.name}>
                        <h2>{product.name}</h2>
                        <p>Price: ${product.price.toFixed(2)}</p>
                        <p>{product.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}