import './login.css';
import { Link, NavLink } from 'react-router-dom';

function Login() {
  return (
    <>
      <div id='fondoLogin' className="flex items-center justify-center min-h-screen">
        <div
          className="relative mx-auto w-full max-w-md bg-negroAray text-texto px-6 pt-10 pb-8 shadow-xl ring-1 ring-moradoAray sm:rounded-xl sm:px-10 border-negroAray" id='dentroLogo'>
          <div className="w-full">
            <div className="text-center">
              <Link to="/">
                <img src="/imgs/logo2.png" alt="Logo" className="mx-auto mb-4 w-24 h-24 cursor-pointer" />
              </Link>
              <h1 className="text-3xl font-semibold text-gray-900">Iniciar sesión</h1>
              <p className="mt-2 text-gray-500">Inicia sesión a continuación para acceder a tu cuenta</p>
            </div>
            <div className="mt-5">
              <form action="">
                <div className="relative mt-6">
                  <input type="email" name="email" id="email" placeholder="" className="bg-negroAray peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" autoComplete="NA" />
                  <label htmlFor="email" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Correo Electrónico</label>
                </div>
                <div className="relative mt-6">
                  <input type="password" name="password" id="password" placeholder="" className="bg-negroAray peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" />
                  <label htmlFor="password" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Contraseña</label>
                </div>
                <div className="my-6">
                  <button type="submit" className="btn-iniciar w-full rounded-md bg-black px-3 py-4 text-texto focus:bg-gray-600 focus:outline-none">Iniciar sesión</button>
                </div>
                
                <p className="text-center text-sm text-gray-500" Link ="./registroUsuario">¿Aún no tienes una cuenta?
                <NavLink className="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none" to="/registroUsuario"> Crear una cuenta de Usuario </NavLink>
                <NavLink className="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none" to="/registroConductor"> Crear una cuenta de Conductor </NavLink>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
