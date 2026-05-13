import Header from "@/src/components/header/header";
import Footer from "@/src/components/footer/footer";
const Detalhe = () => {
    return (
        <>
            <Header />
            <section>
                <h1>Destalhes do jogo</h1>
                <span></span>
                <div>
                    <img src="../imgs/capa_jogo_detalhe.png" alt="" />
                    <div>
                        <h2>League of Legends</h2>
                        <p>
                            League of Legends (LoL) é um jogo eletrônico do gênero MOBA (Multiplayer Online Battle Arena) onde duas equipes de cinco jogadores competem entre si com o objetivo de destruir a base adversária. Cada jogador controla um campeão com habilidades únicas, exigindo estratégia, trabalho em equipe e tomada de decisões rápidas durante as partidas.O jogo possui diversos modos, mapas e estilos de jogo, além de oferecer atualizações frequentes com novos personagens, eventos e ajustes de balanceamento. League of Legends é conhecido pelo seu cenário competitivo mundial, reunindo milhões de jogadores e campeonatos profissionais ao redor do mundo.
                        </p>
                    </div>
                    <div>
                        <div>
                            <div>
                                <p>Classificação indicativa: </p>
                                <p>18 anos</p>
                            </div>
                            <div>
                                <p>Preço:</p>
                                <p>R$100,00</p>
                            </div>
                            <div>
                                <p>Plataformas:</p>
                                <p>PC</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <p>Gênero:</p>
                                <p>MOBA</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
export default Detalhe;