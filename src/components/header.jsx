import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiMenu, FiX, FiSearch, FiShoppingCart } from 'react-icons/fi';
import Logo from './logo';
import { useCart } from '../contexts/cartContext';
import SearchBar from './searchBar';
import AuthLinks from './authLinks';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { cartItems } = useCart();

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const toggleSearch = () => setSearchOpen(!searchOpen);

  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/categorias", text: "Categorias" },
    { to: "/produtos", text: "Produtos" },
    { to: "/pedidos", text: "Meus Pedidos" },
  ];

  return (
    <header className="w-full border-b border-gray-200 bg-white">
      {/* Top Bar - Visível em todas as telas */}
      <div className="container mx-auto px-4 py-3 flex items-end">
        {/* Menu Hamburguer - Visível apenas em mobile */}
        <button 
          onClick={toggleMobileMenu}
          className="md:hidden text-gray-700"
          aria-label="Abrir menu"
        >
          {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Logo - Centralizado em mobile */}
        <div className="md:hidden absolute left-1/2 transform -translate-x-1/2">
          <Link to="/">
            <Logo />
          </Link>
        </div>

        {/* Logo - Alinhado à esquerda em desktop (original) */}
        <div className="hidden md:block">
          <Link to="/">
            <Logo />
          </Link>
        </div>

        {/* Componentes do centro (SearchBar) - Visível apenas em desktop (original) */}
        <div className="hidden md:block flex-1 mx-8">
          <SearchBar />
        </div>

        {/* Componentes da direita (AuthLinks e Carrinho) - Visível apenas em desktop (original) */}
        <div className="hidden md:flex items-center gap-6">
          <AuthLinks />
          <Link 
            to="/carrinho" 
            className="relative p-1"
            aria-label="Carrinho de compras"
          >
            <FiShoppingCart size={20} />
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </Link>
        </div>

        {/* Ícones da direita (Lupa e Carrinho) - Visível apenas em mobile */}
        <div className="flex items-center gap-4 md:hidden ml-auto">
          <button 
            onClick={toggleSearch}
            className="text-gray-700"
            aria-label="Buscar"
          >
            <FiSearch size={20} />
          </button>
          <Link 
            to="/carrinho" 
            className="relative p-1"
            aria-label="Carrinho de compras"
          >
            <FiShoppingCart size={20} />
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Campo de busca - Aparece apenas quando ativado em mobile */}
      {searchOpen && (
  <div className="md:hidden px-4 pb-3">
    <div className="relative">
      <input
        type="text"
        placeholder="Buscar produtos..."
        className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:border-primary focus:ring-pink-600 focus:ring-1 outline-none transition-colors"
      />
      <button
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
        onClick={toggleSearch}
      >
        <FiX size={18} />
      </button>
    </div>
  </div>
)}

      {/* Menu mobile - Aparece quando aberto */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col py-2 px-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={toggleMobileMenu}
                className={({ isActive }) => 
                  `px-4 py-3 text-gray-700 border-b border-gray-100 ${
                    isActive ? 'font-medium text-primary' : ''
                  }`
                }
              >
                {link.text}
              </NavLink>
            ))}
          </nav>

          <div className="px-4 py-3 border-t border-gray-200 items-center flex flex-col gap-3">
            <Link
              to="/cadastro"
              className="block text-sm text-gray-700 py-2 hover:text-primary"
              onClick={toggleMobileMenu}
            >
              Cadastre-se
            </Link>
            <Link 
              to="/login" 
              className="bg-primary w-[114px] h-[40px] rounded-[4px] text-white font-bold text-[14px] 
        flex items-center justify-center hover:bg-pink-700 transition-colors duration-200"
              onClick={toggleMobileMenu}
            >
              Entrar
            </Link>
          </div>
        </div>
      )}

      {/* Navegação principal - Visível apenas em desktop (original) */}
      <nav className="hidden md:flex container mx-auto px-4 border-gray-200 py-0">
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) => 
              `px-4 py-2 text-sm ${
                isActive  
                ? 'border-b-2 border-primary text-primary'
                : 'text-dark-gray-2 hover:text-primary'
              }`
            }
          >
            {link.text}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Header;