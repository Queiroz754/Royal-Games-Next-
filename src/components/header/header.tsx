import style from "./header.module.css";

const Header = () => {
    return (
        <>
            <header id={style.header}>
                <section id={style.container}>
                    <img src="../imgs/Logo Header.svg" alt="logo do Royal Games" />
                    <div id={style.campo_input}>
                        <a id={style.catalogo}>
                            Catálogo
                        </a>
                        <a id={style.login}>
                            Login
                        </a>
                    </div>
                </section>
            </header>
        </>
    )
}
export default Header;