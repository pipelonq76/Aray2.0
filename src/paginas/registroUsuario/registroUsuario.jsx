import './registroUsuario.css';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const URI = "http://localhost:8000/aray/"

function RegistroUsuario() {

  const [primerNombreUsuario, setPrimerNombreUsuario] = useState("")
  const [segundoNombreUsuario, setSegundoNombreUsuario] = useState("")
  const [primerApellidoUsuario, setPrimerApellidoUsuario] = useState("")
  const [segundoApellidoUsuario, setSegundoApellidoUsuario] = useState("")
  const [correoElectronicoUsuario, setCorreoElectronicoUsuario] = useState("")
  const [claveUsuario, setClaveUsuario] = useState("")
  const [fechaNacimientoUsuario, setFechaNacimientoUsuario] = useState("")
  const [celularUsuario, setCelularUsuario] = useState("")
  const [sexoUsuario, setSexoUsuario] = useState("")
  const [fotoUsuario, setFotoUsuario] = useState("")
  const [direccionUsuario, setDireccionUsuario] = useState("")

  const navigate = useNavigate()

  const guardarCampos = async (e) => {
    e.preventDefault()
    await axios.post(URI, { foto_usuario: fotoUsuario, nombre_usuario: primerNombreUsuario, segundo_nombre_usuario: segundoNombreUsuario, apellido_usuario: primerApellidoUsuario, segundo_apellido_usuario: segundoApellidoUsuario, sexo_usuario: sexoUsuario, fecha_nacimiento_usuario: fechaNacimientoUsuario, correo_electronico_usuario: correoElectronicoUsuario, direccion_usuario: direccionUsuario, clave_usuario: claveUsuario, celular_usuario: celularUsuario })
    navigate('/login')
  }

  return (
    <>
      <div id='fondoLogin' className=" flex items-center justify-center min-h-screen px-4">
        <div className="mt-10 mb-10 relative mx-auto w-full max-w-lg bg-negroAray text-texto px-8 pt-10 pb-8 shadow-xl ring-1 ring-moradoAray sm:rounded-xl sm:px-12 border-negroAray" id='dentroLogo'>
          <div className="w-full">
            <div className="text-center">
              <Link to="/">
                <img src="/imgs/logo2.png" alt="Logo" className="mx-auto mb-4 w-24 h-24 cursor-pointer" />
              </Link>
              <h1 className="text-3xl font-semibold text-gray-900">Registro de Usuario</h1>
              <p className="mt-2 text-gray-500">Rellena los campos a continuación para crear tu cuenta</p>
            </div>
            <div className="mt-5">
              <form onSubmit={guardarCampos} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* {[
                  { id: "segundoNombreUsuario", label: "Segundo Nombre", type: "text", value: { segundoNombreUsuario }, onChange: (e) => setSegundoNombreUsuario(e.target.value) },
                  { id: "primerApellidoUsuario", label: "Primer Apellido", type: "text", value: { primerApellidoUsuario }, onChange: (e) => setPrimerApellidoUsuario(e.target.value) },
                  { id: "segundoApellidoUsuario", label: "Segundo Apellido", type: "text", value: { segundoApellidoUsuario }, onChange: (e) => setSegundoApellidoUsuario(e.target.value) },
                  { id: "correoElectronicoUsuario", label: "Correo Electrónico", type: "email", value: { correoElectronicoUsuario }, onChange: (e) => setCorreoElectronicoUsuario(e.target.value) },
                  { id: "claveUsuario", label: "Contraseña", type: "password", value: { claveUsuario }, onChange: (e) => setClaveUsuario(e.target.value) },
                  { id: "confirmPasswordUsuario", label: "Confirmar Contraseña", type: "password" },
                  { id: "fechaNacimientoUsuario", label: "Fecha de Nacimiento", type: "date", value: { fechaNacimientoUsuario }, onChange: (e) => setFechaNacimientoUsuario(e.target.value) },
                  { id: "celularUsuario", label: "Celular", type: "text", value: { celularUsuario }, onChange: (e) => setCelularUsuario(e.target.value) },
                  { id: "dirreccionUsuario", label: "Dirreccion", type: "text", value: { direccionUsuario }, onChange: (e) => setdireccionUsuario(e.target.value) },


                ].map((field, idx) => (
                  <div key={idx} className="relative mt-6 col-span-1">
                    <input
                      type={field.type}
                      name={field.id}
                      id={field.id}
                      placeholder=""
                      className="bg-negroAray peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                      autoComplete="NA"
                    />
                    <label
                      htmlFor={field.id}
                      className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                    >
                      {field.label}
                    </label>
                  </div>
                ))} */}



                <div className="relative mt-6 col-span-1">
                  <input
                  required
                    type="text"
                    name="primerNombreUsuario"
                    id="primerNombreUsuario"
                    value={primerNombreUsuario}
                    onChange={(e) => setPrimerNombreUsuario(e.target.value)}
                    className="bg-negroAray peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                    />
                  <label
                    htmlFor="primerNombreUsuario"
                    className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                    >
                    Primer Nombre
                  </label>
                </div>


                <div className="relative mt-6 col-span-1">
                  <input
                  required
                    type="text"
                    name="segundoNombreUsuario"
                    id="segundoNombreUsuario"
                    value={segundoNombreUsuario}
                    onChange={(e) => setSegundoNombreUsuario(e.target.value)}
                    className="bg-negroAray peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                    />
                  <label
                    htmlFor="SegundoNombreUsuario"
                    className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                    >
                    Segundo Nombre
                  </label>
                </div>
                

                <div className="relative mt-6 col-span-1">
                  <input
                    type="text"
                    name="primerApellidoUsuario"
                    id="primerApellidoUsuario"
                    value={primerApellidoUsuario}
                    onChange={(e) => setPrimerApellidoUsuario(e.target.value)}
                    className="bg-negroAray peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                    />
                  <label
                    htmlFor="primerApellidoUsuario"
                    className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                    >
                    Primer Apellido
                  </label>
                </div>

                <div className="relative mt-6 col-span-1">
                  <input
                  required
                    type="text"
                    name="segundoApellidoUsuario"
                    id="segundoApellidoUsuario"
                    value={segundoApellidoUsuario}
                    onChange={(e) => setSegundoApellidoUsuario(e.target.value)}
                    className="bg-negroAray peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                    />
                  <label
                    htmlFor="segundoApellidoUsuario"
                    className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                    >
                    Segundo Apellido
                  </label>
                </div>

                {/* <div className="relative mt-6 col-span-2">
                  <input
              
                   
                    className="bg-negroAray peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 focus:border-gray-500 focus:outline-none"
                  />
                  <label
                    htmlFor="segundoApellidoUsuario"
                    className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                  >
                    Segundo Apellido
                  </label>
                </div> */}

                <div className="relative mt-6 col-span-1">
                  <input
                  required
                    type="password"
                    name="claveUsuario"
                    id="claveUsuario"
                    value={claveUsuario}
                    onChange={(e) => setClaveUsuario(e.target.value)}
                    className="bg-negroAray peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                    />
                  <label
                    htmlFor="claveUsuario"
                    className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                    >
                    Clave
                  </label>
                </div>

                <div className="relative mt-6 col-span-1">
                  <input
                  required
                    type="email"
                    name="correoElectronicoUsuario"
                    id="correoElectronicoUsuario"
                    value={correoElectronicoUsuario}
                    onChange={(e) => setCorreoElectronicoUsuario(e.target.value)}
                    className="bg-negroAray peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                    />
                  <label
                    htmlFor="correoElectronicoUsuario"
                      className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                  >
                    Correo Electronico
                  </label>
                </div>

               

                <div className="relative mt-6 col-span-1">
                  <input
                  required
                    type="date"
                    name="fechaNacimientoUsuario"
                    id="fechaNacimientoUsuario"
                    value={fechaNacimientoUsuario}
                    onChange={(e) => setFechaNacimientoUsuario(e.target.value)}
                    className="bg-negroAray peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                    />
                  <label
                    htmlFor="fechaNacimientoUsuario"
                    className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                  >
                    Fecha Nacimiento
                  </label>
                </div>
                
                <div className="relative mt-6 col-span-1">
                  <input
                  required
                    type="text"
                    name="celularUsuario"
                    id="celularUsuario"
                    value={celularUsuario}
                    onChange={(e) => setCelularUsuario(e.target.value)}
                    className="bg-negroAray peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                    />
                  <label
                    htmlFor="celularUsuario"
                    className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                  >
                    Celular
                  </label>
                </div>

                <div className="relative mt-6 col-span-1">
                  <input
                  required
                    type="text"
                    name="direccionUsuario"
                    id="direccionUsuario"
                    value={direccionUsuario}
                    onChange={(e) => setDireccionUsuario(e.target.value)}
                    className="bg-negroAray peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                    />
                  <label
                    htmlFor="direccionUsuario"
                    className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                  >
                    Direccion
                  </label>
                </div>




                <div className="relative mt-6 col-span-1">
                  <select
                  required
                    name="sexo"
                    id="sexo"
                    value={sexoUsuario} onChange={(e) => setSexoUsuario(e.target.value)}
                    className="bg-negroAray peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                    >
                    <option value="" disabled selected hidden></option>
                    <option value="M">Masculino</option>
                    <option value="F">Femenino</option>
                    <option value="otro">Otro</option>
                  </select>
                  <label htmlFor="sexo" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Sexo</label>
                </div>

                <div className="relative mt-6 col-span-2">
                  <input
                  required
                    type="file"
                    name="fotoUsuario"
                    id="fotoUsuario"
                    value={fotoUsuario}
                    onChange={(e) => setFotoUsuario(e.target.value)}
                    className="bg-negroAray peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                    />
                  <label
                    htmlFor="fotoUsuario"
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

export default RegistroUsuario;
