import { NavLink } from 'react-router-dom';

const MainNav = () => {
  const navLinkClass = ({ isActive }) =>
    `text-base px-3 pb-2 font-medium transition-colors duration-200 whitespace-nowrap ${
      isActive
        ? 'border-b-2 border-primary text-primary'
        : 'text-dark-gray-2 hover:text-primary'
    }`;

  return (
    <nav className="flex gap-1 overflow-x-auto pb-2 scrollbar-hide">
      <NavLink to="/" className={navLinkClass} aria-label="Ir para página inicial">Home</NavLink>
      <NavLink to="/categorias" className={navLinkClass} aria-label="Ir para categorias">Categorias</NavLink>
      <NavLink to="/produtos" className={navLinkClass} aria-label="Ir para produtos">Produtos</NavLink>
      <NavLink to="/pedidos" className={navLinkClass} aria-label="Ir para meus pedidos">Meus Pedidos</NavLink>
    </nav>
  );
};

export default MainNav;