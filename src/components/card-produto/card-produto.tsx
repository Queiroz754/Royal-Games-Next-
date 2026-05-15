import style from "./card-produto.module.css"

const Card = () => {
    return (
        <>
            <article id={style.container_card}>
                <div>
                    <img src="./imgs/capa_jogo.png" alt="" />
                </div>
                <h3>Stardew Valley</h3>
                <p>R$70,00</p>
                <button>Detalhes</button>
            </article>
        </>
    )
}
export default Card;