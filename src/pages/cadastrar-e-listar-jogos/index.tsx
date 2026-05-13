import Header from "@/src/components/header/header";
import Footer from "@/src/components/footer/footer";
import ListaProduto from "@/src/components/lista-produto/lista-produto";

const Cadastrar = () => {
    return (
        <>
            <main>
                <Header />
                <section>
                    <h1>Cadastrar novo jogo</h1>
                    <span></span>
                    <form action="">
                        <label htmlFor="nome">Nome</label>
                        <input type="text" name="nome" />
                        <div>
                            <div>
                                <label htmlFor="valor">Valor</label>
                                <input type="number" name="valor" />
                                <label htmlFor="genero">Gênero</label>
                                <select name="genero" id="">
                                    <option value="">MOBA</option>
                                    <option value="">RPG</option>
                                    <option value="">Aventura</option>
                                    <option value="">FPS</option>
                                </select>
                            </div>
                            <label htmlFor="classificacao">Classificação Indicativa</label>
                            <select name="classificacao" id="">
                                <option value="">18</option>
                                <option value="">16</option>
                                <option value="">10</option>
                                <option value="">L</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="plataformar">Plataforma</label>
                            <select name="plataformar" id="">
                                <option value="">PC</option>
                                <option value="">XBOX Series </option>
                                <option value="">Playstation 5</option>
                                <option value="">Nintendo Switch 2</option>
                            </select>
                            <label htmlFor="imagem">Imagem</label>
                            <input type="text" name="imagem" />
                        </div>
                        <div>
                            <label htmlFor="descricao">Descrição</label>
                            <input type="text" name="descricao" />
                        </div>
                        <button>Cadastrar</button>
                    </form>
                </section>
                <ListaProduto/>
                <Footer />
            </main>
        </>
    )
}
export default Cadastrar;