import { Link } from 'react-router-dom';

const AuthLinks = () => {
  return (
    <div className="flex items-center gap-4">
      <Link 
        to="/signup" 
        className="text-[14px] text-dark-gray-2 hover:text-primary underline transition-colors duration-200"
        aria-label="Ir para página de cadastro"
      >
        Cadastre-se
      </Link>
      <Link
        to="/login"
        className="bg-primary w-[114px] h-[40px] rounded-[4px] text-white font-bold text-[14px] 
        flex items-center justify-center hover:bg-pink-700 transition-colors duration-200"
        aria-label="Ir para página de login"
      >
        Entrar
      </Link>
    </div>
  );
};

export default AuthLinks;