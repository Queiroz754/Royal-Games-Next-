import style from "./lista-produto.module.css";
import CardProduto from "../card-produto/card-produto"
import { useEffect, useState } from "react";
import { excluirJogo, listarJogo } from "@/src/pages/api/JogoService";
import { erro, notificacao, toastConfirmarExclusao } from "@/src/utils/toast";
import { verificarAutenticacao } from "@/src/utils/auth";

interface Jogo {
    jogoID: number,
    nome: string,
    preco: number,
    descricao:string,
    statusProduto: boolean
}

const Lista = () => {

    const [jogo, setProdutos] = useState<Jogo[]>([]);

    const[ordem, setOrdem] = useState("todos");

    const[pesquisa, setPesquisa] = useState("");

    const[estaAutenticado, setEstaAutenticado] = useState(false);

    async function listar() {
        try {
            const lista = await listarJogo()
            setProdutos(lista)
            console.log(lista)
        } catch (error: any) {
            console.log(error.message)
        }
    }

    async function confirmarExclusao(jogoID: number) {
        toastConfirmarExclusao(async () => {
            try {
                await excluirJogo(jogoID);
                setProdutos((listaAtual) =>
                    listaAtual.map((produto) =>
                        produto.jogoID === jogoID? { ...produto, statusProduto: false }
                            : produto
                        )
                )

                notificacao("Produto inativado!!")
                listar();
            }
            catch (error: any) {
                erro(error.message);
            }
        })
    }

    useEffect(() => {
        setEstaAutenticado(verificarAutenticacao());
        listar();
    }, [])

    
    const jogoFiltrados = jogo.filter((jogo) => 
    jogo.nome.toLocaleLowerCase().includes(pesquisa.toLocaleLowerCase()))
    .sort((a,b) => {
        if(ordem === "menor_valor"){
            return a.preco - b.preco
        }
        return a.jogoID - b.jogoID
        ;
    });

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
                        <button id={style.btn_preco} value="menor_valor">Menor Preço</button>
                        <button id={style.btn_categoria}>Gênego</button>
                    </div>
                    <div id={style.cards_produtos}>
                        {jogoFiltrados.length > 0 ? jogoFiltrados.map((item) => (
                            <CardProduto
                                key={item.jogoID}
                                jogoID={item.jogoID}
                                nome={item.nome}
                                preco={item.preco}
                                onDelete={confirmarExclusao}
                                estaLogado={estaAutenticado}
                            />
                        )) : (<p>Carregando produto...</p>)}
                    </div>
                </div>
            </article>
        </>
    )
}
export default Lista;