import Footer from "@/src/components/footer/footer";
import Header from "@/src/components/header/header";
import ListaProduto from "../../components/lista-produto/lista-produto"
import style from "./home.module.css";

const Home = () => {
    return (
        <>
            <main>
                <Header />
                <section id={style.conheca}>
                    <div id={style.container}>
                        <h1>Conheça nossos jogos!</h1>
                        <p>Navegue por títulos de todas as gerações, descubra plataformas, gêneros e detalhes completos antes de escolher sua próxima aventura. Seu próximo jogo favorito começa aqui.</p>
                    </div>
                    <img src="../imgs/Imagem Banner.svg" alt="" />
                    <span id={style.gradient}></span>
                </section>
                <section>
                    <ListaProduto />
                </section>
                <section id={style.manchete}>
                    <div id={style.container_manchete}>
                        <div id={style.container_titulo_manchete}>
                            <h2>Jogos online podem afetar o comportamento humano?</h2>
                            <div id={style.linha_manchete}></div>
                        </div>
                        <div id={style.container_img_manchete}>
                            <div className={style.img_manchete}>
                                <img src="../imgs/capa_jogo_comportamento00.png" alt="" />
                            </div>
                            <div className={style.img_manchete}>
                                <img src="../imgs/capa_jogo_comportamento01.png" alt="" />
                            </div>
                        </div>
                        <p> Estudos indicam que jogos podem alterar o comportamento humano…?</p>
                        <p> Principalmente quando o time resolve testar sua paciência em plena partida ranqueada.</p>
                    </div>
                </section>
                <Footer />
            </main>
        </>
    )
}
export default Home;