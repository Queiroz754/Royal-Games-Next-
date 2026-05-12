import Footer from "@/src/components/footer/footer";
import Header from "@/src/components/header/header";

const Home = () => {
    return(
        <>
        <Header/>
        <section>
                <h1>Conheça nossos jogos!</h1>
                <p>Navegue por títulos de todas as gerações, descubra plataformas, gêneros e detalhes completos antes de escolher sua próxima aventura. Seu próximo jogo favorito começa aqui.</p>
                <div>
                    <img src="../imgs/Imagem Banner.svg" alt="" />
                </div>
        </section>
        <Footer/>
        </>
    )
}
export default Home;