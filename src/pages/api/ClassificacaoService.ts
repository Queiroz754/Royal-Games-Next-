import { api } from "./api";

export async function cadastrarClassificacao(nome: string){
    try{
        await api.post("Classificacao", {nome});
        
    }catch(error: any){
        throw new Error(error.response.data);
    }
}

export async function listarClassificacao() {
    try{
        const response = await api.get("Classificacao");
        return response;
    } catch (error: any) {
        throw new Error(error.response.data);
    }
}