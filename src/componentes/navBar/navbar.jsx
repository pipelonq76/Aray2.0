import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  // Cerrar el menú cuando se hace clic fuera de él
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    }

    // Agregar evento para cerrar menú al hacer clic fuera
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-black border-5E107A bg-negroAray sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 py-3 md:px-8">
        <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse text-texto border-5E107A">
          <img src="/imgs/logo2.png" className="h-12 w-auto" alt="Logo" />
        </NavLink>
        <div className="flex items-center md:hidden">
          <button
            type="button"
            onClick={toggleMenu}
            className="text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:text-gray-300 dark:focus:ring-gray-600"
            aria-controls="mobile-menu"
            aria-expanded={showMenu ? 'true' : 'false'}
          >
            <span className="sr-only">Abrir menú principal</span>
            <svg className="w-6 h-6 text-texto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <div ref={menuRef} className={`md:flex md:items-center md:space-x-8 ${showMenu ? 'block' : 'hidden'}`}>
          <NavLink
            to="/login"
            className="btn-iniciar w-full rounded-md bg-black px-3 py-1 text-texto focus:bg-gray-600 focus:outline-none"
          >
            Inicio
          </NavLink>
          <div className="relative">
            <button
              onClick={toggleMenu}
              className="flex items-center space-x-1 border-texto btn-iniciar w-full rounded-md bg-black px-3 py-1 text-texto focus:bg-gray-600 focus:outline-none"
            >
              Registrarse
              <svg
                className="w-4 h-4 text-texto"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {showMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-negroAray rounded-md shadow-lg text-texto">
                <NavLink
                  to="/registroUsuario"
                  className="block py-2 px-4 hover:bg-moradoAray rounded-md"
                  onClick={closeMenu}
                >
                  Usuario
                </NavLink>
                <NavLink
                  to="/registroConductor"
                  className="block py-2 px-4 hover:bg-moradoAray rounded-md"
                  onClick={closeMenu}
                >
                  Conductor
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
