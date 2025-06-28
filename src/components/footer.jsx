import LogoFooter from '../assets/logo-footer.svg';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#111] text-white px-6 md:px-20 py-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">

        {/* Coluna 1 - Logo e Redes Sociais */}
        <div className="col-span-2 md:col-span-1">
          <img 
            src={LogoFooter} 
            alt="Drip Store Logo" 
            className="h-8 mb-4" 
            loading="lazy" 
          />
          <p className="text-sm text-gray-400 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
          </p>
          <div className="flex space-x-4">
            <a 
              href="#" 
              aria-label="Facebook"
              className="text-white hover:text-pink-600 cursor-pointer transition-colors duration-200"
            >
              <FaFacebookF />
            </a>
            <a 
              href="#" 
              aria-label="Instagram"
              className="text-white hover:text-pink-600 cursor-pointer transition-colors duration-200"
            >
              <FaInstagram />
            </a>
            <a 
              href="#" 
              aria-label="Twitter"
              className="text-white hover:text-pink-600 cursor-pointer transition-colors duration-200"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Coluna 2 - Informações */}
        <div>
          <h3 className="font-semibold mb-4">Informação</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-pink-600 transition-colors duration-200 block">Sobre Drip Store</a></li>
            <li><a href="#" className="hover:text-pink-600 transition-colors duration-200 block">Segurança</a></li>
            <li><a href="#" className="hover:text-pink-600 transition-colors duration-200 block">Wishlist</a></li>
            <li><a href="#" className="hover:text-pink-600 transition-colors duration-200 block">Blog</a></li>
            <li><a href="#" className="hover:text-pink-600 transition-colors duration-200 block">Trabalhe conosco</a></li>
            <li><a href="#" className="hover:text-pink-600 transition-colors duration-200 block">Meus Pedidos</a></li>
          </ul>
        </div>

        {/* Coluna 3 - Categorias */}
        <div>
          <h3 className="font-semibold mb-4">Categorias</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-pink-600 transition-colors duration-200 block">Camisetas</a></li>
            <li><a href="#" className="hover:text-pink-600 transition-colors duration-200 block">Calças</a></li>
            <li><a href="#" className="hover:text-pink-600 transition-colors duration-200 block">Bonés</a></li>
            <li><a href="#" className="hover:text-pink-600 transition-colors duration-200 block">Headphones</a></li>
            <li><a href="#" className="hover:text-pink-600 transition-colors duration-200 block">Tênis</a></li>
          </ul>
        </div>

        {/* Coluna 4 - Contato */}
        <div>
          <h3 className="font-semibold mb-4">Contato</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161
          </p>
          <p className="text-sm text-gray-400 mt-2">(85) 3051-3411</p>
        </div>
      </div>

      {/* Rodapé Inferior */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Digital College
      </div>
    </footer>
  );
};

export default Footer;