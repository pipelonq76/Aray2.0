import './registroConductor.css';
import { Link } from 'react-router-dom';

function RegistroConductor() {
  return (
    <>
      <div id="fondoLogin" className="flex items-center justify-center min-h-screen px-4">
        <div className="mt-10 mb-10 relative mx-auto w-full max-w-lg bg-negroAray text-texto px-8 pt-10 pb-8 shadow-xl ring-1 ring-moradoAray sm:rounded-xl sm:px-12 border-negroAray" id="dentroLogo">
          <div className="w-full">
            <div className="text-center">
              <Link to="/">
                <img src="/imgs/logo2.png" alt="Logo" className="mx-auto mb-4 w-24 h-24 cursor-pointer" />
              </Link>
              <h1 className="text-3xl font-semibold text-gray-900">Registro de Conductor</h1>
              <p className="mt-2 text-gray-500">Rellena los campos a continuación para crear tu cuenta</p>
            </div>
            <div className="mt-5">
              <form action="" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { id: "primerNombre", label: "Primer Nombre", type: "text" },
                  { id: "segundoNombre", label: "Segundo Nombre", type: "text" },
                  { id: "primerApellido", label: "Primer Apellido", type: "text" },
                  { id: "segundoApellido", label: "Segundo Apellido", type: "text" },
                  { id: "email", label: "Correo Electrónico", type: "email" },
                  { id: "password", label: "Contraseña", type: "password" },
                  { id: "confirmPassword", label: "Confirmar Contraseña", type: "password" },
                  { id: "fechaNacimiento", label: "Fecha de Nacimiento", type: "date" },
                  { id: "celular", label: "Celular", type: "text" },
                ].map((field, idx) => (
                  <div key={idx} className="relative mt-6 col-span-1">
                    <input
                      type={field.type}
                      name={field.id}
                      id={field.id}
                      placeholder=""
                      className={`bg-negroAray peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none ${field.type === "date" ? "custom-date-icon" : ""}`}
                      autoComplete="NA"
                    />
                    <label
                      htmlFor={field.id}
                      className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                    >
                      {field.label}
                    </label>
                  </div>
                ))}
                <div className="relative mt-6 col-span-1">
                  <select
                    name="sexo"
                    id="sexo"
                    className="bg-negroAray peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 focus:border-gray-500 focus:outline-none"
                  >
                    <option value="" disabled selected hidden></option>
                    <option value="masculino">Masculino</option>
                    <option value="femenino">Femenino</option>
                    <option value="otro">Otro</option>
                  </select>
                  <label htmlFor="sexo" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Sexo</label>
                </div>
                <div className="relative mt-6 col-span-2">
                  <input
                    type="file"
                    name="pase"
                    id="pase"
                    className="bg-negroAray peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 focus:border-gray-500 focus:outline-none"
                  />
                  <label
                    htmlFor="pase"
                    className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                  >
                    Pase
                  </label>

                </div>
                <div className="relative mt-6 col-span-2">
                  <input
                    type="file"
                    name="fotoConductor"
                    id="fotoConductor"
                    className="bg-negroAray peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 focus:border-gray-500 focus:outline-none"
                  />
                  <label
                    htmlFor="fotoConductor"
                    className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                  >
                    Foto
                  </label>
                </div>
                <div className="my-6 col-span-2">
                  <button type="submit" className="btn-iniciar w-full rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none">Crear cuenta</button>
                </div>
                <p className="text-center text-sm text-gray-500 col-span-2">¿Ya tienes una cuenta?
                  <Link to="/login" className="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none">Iniciar sesión</Link>.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegistroConductor;
