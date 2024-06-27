
import Carrusel from "../../componentes/carrusel/carrusel";
import Navbar from "./../../componentes/navBar/navbar"
import Footer from "../../componentes/footer/footer"
import MapaUsuario from "../../componentes/mapas/mapaUsuario/mapaUsuario";


import "./index.css";

const Index = () => {
    return (
        <>
            <Navbar></Navbar>
            <Carrusel></Carrusel>
            <MapaUsuario></MapaUsuario>
            <Footer></Footer>
        </>

    )
}
export default Index

