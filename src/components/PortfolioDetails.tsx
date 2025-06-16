import React from 'react';

export default function PortfolioDetails() {
  return (
    <section className="bg-blue-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-2 mt-2 text-left">Portfolio</h2>
        <div className="w-16 h-1 bg-blue-500 mb-8 rounded"></div>
        <p className="mb-8 text-gray-600 text-base font-medium text-left">
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
        </p>
        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-8 text-xs font-semibold text-blue-700">
          <button className="uppercase px-2 py-1 rounded hover:bg-blue-100 focus:bg-blue-200 transition">All</button>
          <button className="uppercase px-2 py-1 rounded hover:bg-blue-100 focus:bg-blue-200 transition">App</button>
          <button className="uppercase px-2 py-1 rounded hover:bg-blue-100 focus:bg-blue-200 transition">Product</button>
          <button className="uppercase px-2 py-1 rounded hover:bg-blue-100 focus:bg-blue-200 transition">Branding</button>
          <button className="uppercase px-2 py-1 rounded hover:bg-blue-100 focus:bg-blue-200 transition">Books</button>
        </div>
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <img src="assets/img/portfolio/app-1.jpg" alt="" className="rounded-lg object-cover w-full h-64" />
          <img src="assets/img/portfolio/product-1.jpg" alt="" className="rounded-lg object-cover w-full h-64" />
          <img src="assets/img/portfolio/branding-1.jpg" alt="" className="rounded-lg object-cover w-full h-64" />
          <img src="assets/img/portfolio/books-1.jpg" alt="" className="rounded-lg object-cover w-full h-64" />
          <img src="assets/img/portfolio/product-2.jpg" alt="" className="rounded-lg object-cover w-full h-64" />
          <img src="assets/img/portfolio/app-2.jpg" alt="" className="rounded-lg object-cover w-full h-64" />
          <img src="assets/img/portfolio/branding-2.jpg" alt="" className="rounded-lg object-cover w-full h-64" />
          <img src="assets/img/portfolio/books-2.jpg" alt="" className="rounded-lg object-cover w-full h-64" />
          <img src="assets/img/portfolio/app-3.jpg" alt="" className="rounded-lg object-cover w-full h-64" />
          <img src="assets/img/portfolio/product-3.jpg" alt="" className="rounded-lg object-cover w-full h-64" />
          <img src="assets/img/portfolio/branding-3.jpg" alt="" className="rounded-lg object-cover w-full h-64" />
          <img src="assets/img/portfolio/books-3.jpg" alt="" className="rounded-lg object-cover w-full h-64" />
        </div>
      </div>
    </section>
  );
}
