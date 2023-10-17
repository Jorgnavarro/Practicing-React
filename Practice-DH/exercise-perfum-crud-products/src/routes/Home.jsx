import { Outlet } from "react-router-dom";

export function Home (){
    return (
        <>
            <header>Store</header>
            <Outlet/>
            <footer>Contacto</footer>
        </>
    )
}