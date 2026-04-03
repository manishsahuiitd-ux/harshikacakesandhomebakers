import React from 'react';

const GalleryPage = () => {
  const cakeDesigns = [
    { id: 1, imageUrl: 'url1', description: 'Chocolate Cake' },
    { id: 2, imageUrl: 'url2', description: 'Vanilla Cake' },
    { id: 3, imageUrl: 'url3', description: 'Red Velvet Cake' },
    // Add more cake designs as needed
  ];

  return (
    <div>
      <h1>Gallery of Cake Designs</h1>
      <div className='gallery'>
        {cakeDesigns.map(cake => (
          <div key={cake.id} className='cake'>
            <img src={cake.imageUrl} alt={cake.description} />
            <p>{cake.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;