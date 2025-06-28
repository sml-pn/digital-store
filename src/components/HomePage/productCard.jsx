import { useNavigate } from "react-router-dom";
import { useCart } from "../../contexts/cartContext";

const ProductCard = ({ product = {} }) => {
  const { image, price, priceDiscount, name, id, category } = product;
  const { cartItems, addToCart, removeFromCart } = useCart();
  const navigate = useNavigate();

  const isInCart = cartItems.some((item) => item.id === id);

  const discountPercentage =
    typeof price === "number" &&
    typeof priceDiscount === "number" &&
    price > priceDiscount
      ? Math.round(((price - priceDiscount) / price) * 100)
      : null;

  const formatPrice = (value) => {
    if (typeof value !== "number") return null;
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  const handleCartClick = () => {
    if (isInCart) {
      removeFromCart(id);
    } else {
      addToCart(product);
    }
  };

  const handleViewMore = () => {
    navigate(`/produto/${id}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex flex-col overflow-hidden bg-[#f6f6f6] transition-all duration-300 w-full h-full">
      <div className="relative h-56 md:h-60 flex items-center justify-center p-0 md:p-0 cursor-pointer">
        {discountPercentage && (
      <span className="absolute top-2 left-2 bg-lime-200 text-xs font-bold text-gray-800 px-2 py-1 rounded">
            {discountPercentage}% OFF
          </span>
        )}
        <img
          src={image}
          alt={`Imagem do produto ${name}`}
          className="w-full h-full object-contain transition-transform duration-500 hover:scale-110 cursor-pointer"
          loading="lazy"
        />
      </div>

      <div className="p-4 flex flex-col gap-2 flex-grow">
        <p className="text-sm text-gray-500 truncate">{category || "Produto"}</p>
        <p className="font-medium text-sm line-clamp-2 min-h-[40px]">{name}</p>

        <div className="text-sm">
          {typeof price === "number" && priceDiscount && (
            <span className="line-through text-gray-400 mr-2">
              {formatPrice(price)}
            </span>
          )}
          <span className="font-bold text-black">
            {formatPrice(priceDiscount ?? price)}
          </span>
        </div>

        <button
          onClick={handleCartClick}
          className={`mt-2 py-1 px-3 rounded text-sm transition-all duration-200 font-semibold w-full ${
            isInCart
              ? "bg-green-500 text-white hover:bg-green-600"
              : "bg-primary text-white hover:brightness-110"
          }`}
          aria-label={isInCart ? "Remover do carrinho" : "Adicionar ao carrinho"}
        >
          {isInCart ? "Adicionado ao carrinho ✓" : "Adicionar ao carrinho"}
        </button>

        <button
          onClick={handleViewMore}
          className="text-sm px-3 py-1 rounded bg-gray-200 text-gray-800 font-medium hover:bg-gray-300 mt-1 transition-all duration-200"
          aria-label="Ver detalhes do produto"
        >
          Ver mais
        </button>
      </div>
    </div>
  );
};

export default ProductCard;