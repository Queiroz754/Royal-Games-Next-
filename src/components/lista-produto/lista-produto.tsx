import style from "./lista-produto.module.css";
import CardProduto from "../card-produto/card-produto"
const Lista = () => {
    return (
        <>
            <article id={style.lista}>
                <div id={style.container_lista}>
                    <h2 id={style.titulo}>Catálogo de jogos</h2>
                    <samp id={style.linha}></samp>
                    <div id={style.container_inputs}>
                        <input type="text"
                            name="pesquisa"
                            id={style.input_pesquisa}
                            placeholder="Pesquise...."
                        />
                        <button id={style.btn_preco}>Menor Preço</button>
                        <button id={style.btn_categoria}>Categoria</button>
                    </div>
                    <div id={style.cards_produtos}>
                        <CardProduto />
                        <CardProduto />
                        <CardProduto />
                        <CardProduto />
                        <CardProduto />
                        <CardProduto />
                    </div>
                </div>
            </article>
        </>
    )
}
export default Lista;