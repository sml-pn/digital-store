import Header from '../components/header';
import Footer from '../components/footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-[#f6f6f6]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;