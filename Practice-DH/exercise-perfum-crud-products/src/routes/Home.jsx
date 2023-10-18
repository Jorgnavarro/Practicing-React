import { Outlet } from "react-router-dom";

export function Home (){
    return (
        <>
            <header>
                <h1>Virtual Store</h1>
            </header>
            <Outlet/>
            <footer>Contact</footer>
        </>
    )
}