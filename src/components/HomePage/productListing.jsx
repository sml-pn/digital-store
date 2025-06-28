import { useNavigate, useLocation } from "react-router-dom";
import { HiArrowNarrowRight } from "react-icons/hi";
import ProductCard from "../HomePage/productCard";

{/* Controles para a grade de produtos-pag home*/ }

const ProductListing = ({ products }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleViewAll = () => {
    navigate("/produtos");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isHomePage = location.pathname === "/";

  return (
    <section className="px-4 mb-12 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">Produtos em destaque:</h2>
        {isHomePage && (
          <button
            onClick={handleViewAll}
            className="text-pink-600 text-sm font-medium flex items-center gap-1 hover:text-pink-700 transition-all duration-200 group"
            aria-label="Ver todos os produtos"
          >
            Ver todos
            <HiArrowNarrowRight className="text-base transform group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        )}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
        {Array.isArray(products) &&
          products?.map((product, index) => (
            <ProductCard
              key={product.id ?? `${product.name}-${index}`}
              product={product}
            />
          ))}
      </div>
    </section>
  );
};

export default ProductListing;