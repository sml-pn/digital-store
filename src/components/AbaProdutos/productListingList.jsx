import { useCart } from '../../contexts/cartContext';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ProductListingList = ({ products }) => {
  const { cartItems = [], addToCart, removeFromCart } = useCart(); 
  const [added, setAdded] = useState({}); 
  const toggleCart = (product) => {
    const isInCart = cartItems.some((item) => item.id === product.id);
    if (isInCart) {
      removeFromCart(product.id);
      setAdded((prev) => ({ ...prev, [product.id]: false }));
    } else {
      addToCart(product);
      setAdded((prev) => ({ ...prev, [product.id]: true }));
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => {
        const isInCart = cartItems.some((item) => item.id === product.id);
        const discount = product.discount || 0;
        const finalPrice = product.price * (1 - discount / 100);

        return (
          <div
            key={product.id}
            className="relative border p-4 rounded shadow hover:shadow-md bg-white"
          >
            {discount > 0 && (
              <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                {discount}% OFF
              </div>
            )}

            <Link to={`/produto/${product.id}`}>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="text-base font-medium">{product.name}</h3>
              <div className="text-sm text-gray-500 line-through">
                R$ {product.price.toFixed(2)}
              </div>
              <p className="text-lg font-bold text-pink-700">
                R$ {finalPrice.toFixed(2)}
              </p>
            </Link>

            <button
              onClick={() => toggleCart(product)}
              className={`mt-4 w-full py-2 rounded text-sm font-semibold transition-colors ${
                isInCart
                  ? 'bg-green-600 text-white hover:bg-green-700'
                  : 'bg-pink-700 text-white hover:bg-pink-800'
              }`}
            >
              {isInCart ? 'Adicionado ao carrinho' : 'Adicionar ao carrinho'}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ProductListingList;












