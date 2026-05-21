// import { formatarPreco } from "@/src/utils/formatacao"
import style from "./card-produto.module.css"
import Link from "next/link"

type Jogo = {
    jogoID: number,
    nome: string,
    preco: number,
    onDelete: (produtoId: number) => void
    estaLogado: boolean
}

const Card = ({ nome, preco, jogoID, onDelete, estaLogado }: Jogo) => {
    return (
        <>
            <article id={style.container_card}>
                <div>
                    <img src="@/public/capa_Jogo.png" alt="Produto vendido pela loja." />
                </div>
                <h3>{nome}</h3>
                <p>{preco}</p>
                
                {estaLogado ? (
                    <>
                        <button  onClick={() => onDelete(jogoID)} className={style.btn_card}>Excluir</button>
                        <Link  href={"/cadastrar-e-listar-jogos?id=" + jogoID} className={style.link_card}>Editar</Link>
                    </>
                ) : (<Link href={"/detalhe-do-jogo/" + jogoID} className={style.link_card}>Detalhes</Link>) }

            </article>
        </>
    )
}
export default Card;