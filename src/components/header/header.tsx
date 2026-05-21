import style from "./header.module.css";
import Link from "next/link";



const Header = () => {
    return (
        <>
            <header id={style.header}>
                <section id={style.container}>
                    <img src="../imgs/Logo Header.svg" alt="logo do Royal Games" />
                    <div id={style.campo_input}>
                        <a  href="#catalogo" id={style.catalogo}>Catálogo</a>
                        <Link href="/login" id={style.login}>Login</Link>
                        <button id={style.deslogar}>Deslogar</button>
                    </div>
                </section>
            </header>
        </>
    )
}
export default Header;