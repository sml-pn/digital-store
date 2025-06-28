import Section from '../components/section';
import Hero from '../components/hero';
import ProductListing from '../components/HomePage/productListing';
import { IoShirtOutline } from "react-icons/io5";
import { PiBaseballCapLight, PiHeadphonesLight, PiPantsLight } from "react-icons/pi";
import { GiConverseShoe } from "react-icons/gi";
import airJordanImg from '../assets/Laye 1.png';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout';
import { products as allProducts } from '../data/products'; // Importe os produtos originais

const categoryIcons = [
  { icon: <IoShirtOutline size={40} />, label: "Camisetas" },
  { icon: <PiPantsLight size={40} />, label: "Calças" },
  { icon: <PiBaseballCapLight size={40} />, label: "Bonés" },
  { icon: <PiHeadphonesLight size={40} />, label: "Headphones" },
  { icon: <GiConverseShoe size={40} />, label: "Tênis" },
];

const products = allProducts.slice(0, 8).map(product => ({
  id: product.id,
  name: product.name || product.title,
  image: product.image,
  price: product.price,
  priceDiscount: product.priceDiscount
}));



const HomePage = () => {
  const navigate = useNavigate();

  const goToProducts = () => {
    navigate('/produtos');
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Hero />

      <div className="bg-[#f6f6f6] pb-20 pt-10">
        <h2 className="text-2xl font-semibold text-gray-700 px-2 md:px-20 lg:px-40 xl:px-58 mb-6">
          Coleções em destaque:
        </h2>

        <div className="grid sm:grid-cols-3 md:grid-cols-3 gap-3 px-2 md:px-20 lg:px-40 xl:px-58">
          {[
            "/collection-1.png",
            "/collection-2.png",
            "/collection-3.png",
          ].map((image, index) => (
            <div
              key={index}
              className="relative group bg-[#f6f6f6] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden max-w-full max-h-[500px] w-auto h-auto"
            >
              <img
                src={image}
                alt={`Coleção ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-2 left-4 bg-lime-200 text-[12px] font-bold text-gray-900 px-3 py-[3px] rounded-full z-10">
                30% OFF
              </div>
              <div className="absolute bottom-6 left-4 z-10">
                <button
                  onClick={goToProducts}
                  className="bg-white text-pink-600 text-sm font-semibold px-6 py-2 rounded-md shadow hover:bg-pink-100 transition"
                >
                  Comprar
                </button>
              </div>
            </div>
          ))}
        </div>

        <Section>
          <div className="flex justify-center gap-5 sm:gap-8 flex-wrap-1 px-6 md:px-1 mt-10 w-full">
            {categoryIcons.map((item, index) => (
              <div
                key={index}
                onClick={goToProducts}
                className="flex flex-col items-center gap-2 cursor-pointer group w-[calc(25%-1rem)] sm:w-auto"
              >
                {/* Ícone/Círculo */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 group-hover:text-pink-600 transition-colors duration-300">
                  {item.icon}
                </div>

                {/* Label */}
                <span className="text-xs sm:text-sm text-gray-700 font-medium group-hover:text-pink-600 transition-colors duration-300 text-center px-1">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </Section>

        <Section>
          <ProductListing products={products} />
        </Section>
      </div>

      <section className="bg-white py-16 px-4 md:px-20 lg:px-32 flex flex-col md:flex-row items-center gap-12 relative">
        <div className="absolute left-1/2 -translate-x-1/2 md:left-44 md:translate-x-0 top-1/2 -translate-y-1/2 
          w-[300px] h-[300px] md:w-[400px] md:h-[400px] 
          rounded-full bg-gradient-to-t from-white to-purple-200/40 z-0">
        </div>

        <div className="flex-1 z-10">
          <img
            src={airJordanImg}
            alt="Air Jordan edição de colecionador"
            className="w-full max-w-md ml-0 mx-auto"
          />
        </div>

        <div className="flex-1 text-center md:text-left z-10">
          <p className="text-sm font-semibold text-pink-600 mb-2">Oferta especial</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-600 leading-tight mb-4">
            Air Jordan edição de<br />colecionador
          </h2>
          <p className="text-gray-600 mb-6 max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip.
          </p>
          <button
            onClick={goToProducts}
            className="bg-pink-600 hover:bg-pink-700 text-white px-12 py-2 rounded-lg font-semibold transition"
          >
            Ver Oferta
          </button>
        </div>
      </section>
    </>
  );
};

export default HomePage;
