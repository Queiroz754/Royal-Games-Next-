import Header from "@/src/components/header/header";
import Footer from "@/src/components/footer/footer";
import style from "./index.module.css";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { listarJogo, listarPorId } from "../../api/JogoService";

interface Jogo {
    nome: string,
    descricao: string,
    preco: number,
    categoria: string[]
}

const detalheJogo = () => {

    const [jogo, setJogo] = useState<Jogo>();
    const params = useParams();
    const id = params?.id;

    async function listarJogo() {
        try{
            const response = await listarPorId(Number(id));
            setJogo(response);
        } catch (error: any){
            console.log(error.message)
        }
    }
    useEffect(() => {
        if (!id) return;
        setTimeout(() => {
            listarJogo();
        }, 1000)
    }, [id])

    return (
        <>
            <Header />
            <main id={style.main}>
                <section>
                    <h1>Destalhes do jogo</h1>
                    <span></span>
                    <div>
                        {jogo ? (
                            <>
                            <img src="../imgs/capa_jogo_detalhe.png" alt="" />
                        <div>
                            <h2>{jogo?.nome}</h2>
                            <p>
                                {jogo?.descricao}
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
                                    <p>{jogo.preco}</p>
                                </div>
                                <div>
                                    <p>Plataformas:</p>
                                    <p>PC</p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <p>Gênero:</p>
                                    <p>{jogo.categoria}</p>
                                </div>
                            </div>
                        </div>
                        </>
                        ) : (<p>Carregando produto...</p>)}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
export default detalheJogo;