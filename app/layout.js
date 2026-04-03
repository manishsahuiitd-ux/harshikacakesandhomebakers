import './globals.css';

export const metadata = {
  title: 'Harshika Cakes and Home Bakers',
  description: 'Modern e-commerce website for Harshika Cakes and Home Bakers - featuring product catalog, online ordering, customer reviews, gallery, contact forms, and payment integration.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <header className="bg-white shadow">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-pink-600">🍰 Harshika Cakes</h1>
            <ul className="flex space-x-6">
              <li><a href="/" className="hover:text-pink-600">Home</a></li>
              <li><a href="/products" className="hover:text-pink-600">Products</a></li>
              <li><a href="/gallery" className="hover:text-pink-600">Gallery</a></li>
              <li><a href="/reviews" className="hover:text-pink-600">Reviews</a></li>
              <li><a href="/contact" className="hover:text-pink-600">Contact</a></li>
            </ul>
          </nav>
        </header>
        <main className="max-w-7xl mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="bg-gray-900 text-white py-8 mt-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p>&copy; 2026 Harshika Cakes and Home Bakers. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}