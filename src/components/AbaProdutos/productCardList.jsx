import { Link } from "react-router-dom";
import { useCart } from "../../contexts/cartContext";

const ProductCardList = ({ id, image, name, category, price, priceDiscount, fullProduct }) => {
  const { cartItems, addToCart, removeFromCart } = useCart();
  const isInCart = cartItems.some((item) => item.id === id);

  const handleCartClick = (e) => {
    e.preventDefault();
    if (isInCart) {
      removeFromCart(id);
    } else {
      addToCart(fullProduct);
    }
  };

  const formatPrice = (value) => {
    if (typeof value !== "number") return null;
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
    }).format(value);
  };

  return (
    <div className="flex flex-col border rounded-lg overflow-hidden shadow-md bg-white transition-all duration-300 hover:shadow-lg h-full">
      <Link to={`/produto/${id}`} className="block flex-grow">
        <div className="relative h-56 flex items-center justify-center p-4 cursor-pointer">
          <span className="absolute top-2 left-2 bg-lime-200 text-xs font-bold text-gray-800 px-2 py-1 rounded">
            30% OFF
          </span>
          <img 
            src={image} 
            alt={`Imagem do produto ${name}`} 
            className="max-h-40 object-contain w-full" 
            loading="lazy"
          />
        </div>
      </Link>
      <div className="p-4 flex flex-col gap-2">
        <p className="text-sm text-gray-500 truncate">{category}</p>
        <p className="font-medium text-sm line-clamp-2 min-h-[40px]">{name}</p>
        <div className="text-sm">
          {formatPrice(price) && (
            <span className="line-through text-gray-400 mr-2">{formatPrice(price)}</span>
          )}
          {formatPrice(priceDiscount) && (
            <span className="font-bold text-black">{formatPrice(priceDiscount)}</span>
          )}
        </div>
        <button
          onClick={handleCartClick}
          className={`mt-2 py-1 px-3 rounded text-sm transition-all duration-200 font-semibold w-fit ${
            isInCart
              ? "bg-green-500 text-white hover:bg-green-600"
              : "bg-primary text-white hover:brightness-110"
          }`}
          aria-label={isInCart ? "Remover do carrinho" : "Adicionar ao carrinho"}
        >
          {isInCart ? "Adicionado ao carrinho ✓" : "Adicionar ao carrinho"}
        </button>
      </div>
    </div>
  );
};

export default ProductCardList;