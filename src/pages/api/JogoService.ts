import { api } from "./api";

interface JogoFormulario{
    nome: string,
    descricao: string,
    preco: string,
    categoriasId: number[]
}

type JogoListagem = {
    nome: string,
    descricao: string,
    preco: string,
    categoriasId: number[],
    statusJogo: boolean
}

export async function cadastrarJogo(dados: JogoFormulario){
    try{
        const formData = new FormData();

        formData.append("nome", dados.nome);
        formData.append("preco", dados.preco);
        formData.append("descricao", dados.descricao);
        dados.categoriasId.forEach((id) => {
            formData.append("categoriaIds", id.toString());
        })

        await api.post("Produto", formData);

    }catch(error: any){
        throw new Error(error.response.data);
    }
}

export async function listarJogo (){
    try{
        const response = await api.get("Jogo");
        
        const produtosAtivos = response.data.filter(
            (produto: JogoListagem) => produto.statusJogo === true
        );
        const produtos = produtosAtivos.map((produto : JogoListagem) => ({
            ...produto,
            
        }))

        return produtos; 

    }catch(error: any){
        throw new Error(error.response.data);
    }

}

export async function listarPorId(id: number){
    try{
        const response = await api.get("Jogo/" + id);

        const produtos ={ 
        ...response.data,
            imagemUrl: `${api.defaults.baseURL}${response.data.imagemUrl}`
        };

        return produtos;
    }catch(error: any) {
        throw new Error(error.response.data)
    }
}

export async function excluirJogo(produtoId: number) {
    try{
        await api.delete("Jogo/" + produtoId)
    }catch(error: any){
        throw new Error(error.response.data)
    }
} 

export async function editarJogo(jogoId:number, dados: JogoFormulario) {
    try{
        const formData = new FormData();

        formData.append("nome", dados.nome);
        formData.append("preco", dados.preco);
        formData.append("descricao", dados.descricao);

        dados.categoriasId.forEach((id) => {
            formData.append("categoriaIds", id.toString());
        })

        await api.put("Jogo/" + jogoId, formData) 

    }catch(error: any){
        throw new Error(error.response.data)
    }

    
}