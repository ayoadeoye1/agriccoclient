import React from 'react'

const Categories = () => {
  const categories = [
    { id: 1, title: 'Provisions', image: 'electronics.jpg' },
    { id: 2, title: 'Energy drinks', image: 'clothing.jpg' },
    { id: 3, title: 'Bear drinks', image: 'home-decor.jpg' },
    { id: 4, title: 'Bread', image: 'sports.jpg' },
    { id: 5, title: 'Soaps and Detergents', image: 'beauty.jpg' },
    { id: 6, title: 'Insecticides', image: 'beauty.jpg' },
  ];

  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-6">Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((category) => (
          <div key={category.id} className="bg-white shadow rounded-lg overflow-hidden">
            <img src={category.image} alt={category.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{category.title}</h3>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
