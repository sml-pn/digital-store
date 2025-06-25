import { Routes, Route } from 'react-router-dom';
import Layout from './pages/layout';
import HomePage from './pages/homePage';
import ProductViewPage from './pages/productViewPage';
import CategoriasPage from './pages/categoriasPage';
import MeusPedidosPage from './pages/meusPedidosPage';
import ProductPage from './pages/productPage'; 


function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="produtos" element={<ProductPage />} />
          <Route path="produto/:id" element={<ProductViewPage />} />
          <Route path="categorias" element={<CategoriasPage />} />
          <Route path="pedidos" element={<MeusPedidosPage />} />
        </Route>
      </Routes>
  );
}
export default App;








