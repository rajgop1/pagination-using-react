import React, { useState, useEffect } from "react";

const App = () => {
  const [products, setProducts] = useState([]);
  const [skip, setSkip] = useState(0);
  const limit = 10; // Number of products per page
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, [skip]);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://dummyjson.com/products?skip=${skip}&limit=${limit}`);
      const data = await response.json();
      setProducts(data.products);
      setTotal(data.total);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
    setLoading(false);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Product List</h1>


      <div className="flex justify-center my-6 gap-4">
        <button
          onClick={() => setSkip(skip - limit)}
          disabled={skip === 0}
          className={`px-4 py-2 rounded ${skip === 0 ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-700 text-white"}`}
        >
          Previous
        </button>

        <button
          onClick={() => setSkip(skip + limit)}
          disabled={skip + limit >= total}
          className={`px-4 py-2 rounded ${skip + limit >= total ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-700 text-white"}`}
        >
          Next
        </button>
      </div>

      {loading ? (
        <p className="text-center text-lg">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="border rounded-lg shadow-lg p-4 flex flex-col items-center">
              <img src={product.thumbnail} alt={product.title} className="w-32 h-32 object-cover rounded-md mb-4" />
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p className="text-gray-600 text-sm">{product.category}</p>
              <p className="text-green-600 font-bold text-lg">${product.price}</p>
              <p className="text-yellow-500">⭐ {product.rating}</p>
              <p className="text-gray-500 text-sm">{product.availabilityStatus}</p>
            </div>
          ))}
        </div>
      )}

    </div>
  );
};

export default App;

