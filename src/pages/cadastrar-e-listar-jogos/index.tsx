import Header from "@/src/components/header/header";
import Footer from "@/src/components/footer/footer";
import ListaProduto from "@/src/components/lista-produto/lista-produto";
import { useEffect, useState } from "react";
import { listarGenero } from "../api/GeneroService";
import { log } from "console";
import { cadastrarJogo } from "../api/cadastrarService";
import { listarPlataforma } from "../api/PlataformaService";
import { listarClassificacao } from "../api/ClassificacaoService";

interface Genero {
    generoID: number,
    nome: string
}

interface Plataforma {
    plataformaID: number,
    nome: string
}

interface Classificacao {
    ClassificacaoID: number,
    nome: string
}

const Cadastrar = () => {

    const [generos, setGenero] = useState<Genero[]>([]);
    const [plataformas, setPlataforma] = useState<Plataforma[]>([]);
    const [classificacao, setClassificacao] = useState<Classificacao[]>([]);

    const [nome, setNome] = useState<string>("");
    const [descricao, setDescricao] = useState<string>("");
    const [preco, setPreco] = useState<string>("");

    const [generosSelecionados, setGeneroSelecionados] = useState<number[]>([]);
    const [PlataformasSelecionadas, setPlataformaSelecionados] = useState<number[]>([]);
    const [ClassificacoesSelecionadas, setClassificacaoSelecionados] = useState<number[]>([]);

    async function listarGeneroEmProduto() {
        const listaGenero = await listarGenero();
        setGenero(listaGenero.data);
    }

    async function listarPlataformaEmProduto() {
        const listaPlataforma = await listarPlataforma();
        setPlataforma(listaPlataforma.data);
        console.log(listaPlataforma.data)
    }

    async function listarClassificacaoEmProduto() {
        const listaClassificacao = await listarClassificacao();
        setPlataforma(listaClassificacao.data);
        console.log(listaClassificacao.data)
    }

    async function Cadastrar(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {

            const dados = {
                nome,
                descricao,
                preco,
                generoIds: generosSelecionados,
                // plataformaIds: PlataformasSelecionadas,
                // ClassificacaoIds: ClassificacoesSelecionadas
            }

            cadastrarJogo(dados)
        } catch (error: any) {
            console.log(error.message)
        }

    }


    useEffect(() => {
        listarGeneroEmProduto();
        listarPlataformaEmProduto();
        listarClassificacaoEmProduto();
    }, [])


    return (
        <>
            <main>
                <Header />
                <section>
                    <h1>Cadastrar novo jogo</h1>
                    <span></span>
                    <form action="" onSubmit={Cadastrar}>
                        <label htmlFor="nome">Nome</label>
                        <input type="text" name="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                        <div>
                            <div>
                                <label htmlFor="valor">Valor</label>
                                <input type="number" name="valor" value={preco} onChange={(e) => setPreco(e.target.value)}/>
                                <label htmlFor="genero">Gênero</label>
                                <select name="genero" id="">
                                    {generos.map((item) => (<option value={item.generoID} key={item.generoID}>{item.nome}</option>))}
                                </select>
                            </div>
                            <label htmlFor="classificacao">Classificação Indicativa</label>
                            <select name="classificacao" id="">
                                {classificacao.map((item) => (<option value={item.ClassificacaoID} key={item.ClassificacaoID}>{item.nome}</option>))}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="plataformar">Plataforma</label>
                            <select name="plataformar" id="">
                                {plataformas.map((item) => (<option value={item.plataformaID} key={item.plataformaID}>{item.nome}</option>))}
                            </select>
                            <label htmlFor="imagem">Imagem</label>
                            <input type="text" name="imagem" />
                        </div>
                        <div>

                            <label htmlFor="descricao">Descrição</label>
                            <textarea name="descricao" value={descricao} onChange={(e) => setDescricao(e.target.value)}>
                        </textarea>
                    </div>
                    <button type="submit">Cadastrar</button>
                </form>
            </section>
            <ListaProduto />
            <Footer />
        </main >
        </>
    )
}
export default Cadastrar;