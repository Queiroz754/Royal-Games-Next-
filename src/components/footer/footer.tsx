import style from "./footer.module.css";

const Footer = () => {
    return(
        <>
        <footer id={style.footer}>
            <section id={style.container}>
                <img id={style.img_footer} src="../imgs/Logo Header.svg" alt="Logo Royal Games" />
                <div className={style.campo_inf}>
                    <p className={style.txt_inf}>royalgames@email.com</p>
                    <p className={style.txt_inf}>(11)99999-9999</p>
                    <p className={style.txt_inf}>@RoyalGames</p>
                </div>
            </section>
        </footer>
        </>
    )
}
export default Footer;