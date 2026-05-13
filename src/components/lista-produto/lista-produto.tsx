import CardProduto from "../card-produto/card-produto"
const Lista = () => {
    return (
        <>
            <h2>Catálogo de jogos</h2>
            <samp></samp>

            <div>
                <input type="text"
                    name="pesquisa"
                    id=""
                    placeholder="Pesquise...."
                />
                <button>Menor Preço</button>
                <button>Categoria</button>
            </div>
            <div>
                <CardProduto/>
                <CardProduto/>
                <CardProduto/>
                <CardProduto/>
                <CardProduto/>
                <CardProduto/>
            </div>
        </>
    )
}
export default Lista;