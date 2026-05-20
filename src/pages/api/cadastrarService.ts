import { api } from "./api";

type Jogo = {
    nome: string,
    preco: string,
    descricao: string,
    generoIds: number[]
    // plataformaIds: number[]
    // ClassificacaoIds: number[]
}

export async function cadastrarJogo(dados: Jogo){
    try{
        const formData = new FormData();

        formData.append("nome", dados.nome);
        formData.append("descricao", dados.descricao);
        formData.append("preco", dados.preco);
        dados.generoIds.forEach((id) => {
            formData.append("categoriaIds", id.toString());
        })

        await api.post("Jogo", formData);


    }catch(error: any){
        throw new Error(error.message);
    }
}