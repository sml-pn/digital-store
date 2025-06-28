import { useCart } from '../../contexts/cartContext';
import { Link } from 'react-router-dom';

{/* Controles para a grade de produtos-pag produtos*/}


const ProductListingList = ({ products }) => {
  const { cartItems = [], addToCart, removeFromCart } = useCart();

  const toggleCart = (product) => {
    const isInCart = cartItems.some((item) => item.id === product.id);
    isInCart ? removeFromCart(product.id) : addToCart(product);
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => {
        const isInCart = cartItems.some((item) => item.id === product.id);
        const discount = product.discount || 0;
        const finalPrice = product.price * (1 - discount / 100);

        return (
          <div
            key={product.id}
            className="relative p-0 rounded-lg bg-[#f6f6f6] transition-all duration-300 hover:shadow-xl hover:transform hover:-translate-y-1"
          >
            {discount > 0 && (
              <div className="absolute top-3 left-3 bg-[#f6f6f6] text-white text-xs font-bold px-2 py-1 rounded-full z-10">
                {discount}% OFF
              </div>
            )}

            <Link to={`/produto/${product.id}`} className="block group">
  <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-lg flex items-center justify-center bg-[#f6f6f6]">
    <img
      src={product.image}
      alt={product.name}
      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 p-2"
      loading="lazy"
    />
  </div>
              <h3 className="text-base font-medium line-clamp-2 group-hover:text-pink-600 transition-colors">
                {product.name}
              </h3>
              <div className="flex items-center gap-2 mt-1">
                {discount > 0 && (
                  <span className="text-sm text-gray-500 line-through">
                    R$ {product.price.toFixed(2)}
                  </span>
                )}
                <span className="text-lg font-bold text-pink-700">
                  R$ {finalPrice.toFixed(2)}
                </span>
              </div>
            </Link>

            <button
              onClick={() => toggleCart(product)}
              className={`mt-4 w-full py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                isInCart
                  ? 'bg-green-600 text-white hover:bg-green-700 shadow-green-200 hover:shadow-md'
                  : 'bg-pink-700 text-white hover:bg-pink-800 shadow-pink-200 hover:shadow-md'
              }`}
            >
              {isInCart ? 'Adicionado ✓' : 'Adicionar ao carrinho'}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ProductListingList;