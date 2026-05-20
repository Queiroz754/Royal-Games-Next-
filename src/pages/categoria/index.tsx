import Footer from "@/src/components/footer/footer"
import styles from './categoria.module.css'
import Link from 'next/link'
import SubHeader from "@/src/components/header/header"
import { useState } from "react"
import { listarGenero } from "../api/GeneroService"
import { cadastrarGenero } from "../api/GeneroService"
import { toast, ToastContainer } from "react-toastify"

interface Genero{
    categoriaID: number,
    nome: string
}

const Categoria = () => {

    const[Genero, setGenero] = useState<string>("");

    const notificacao = (msg: string) => toast.success(msg);
    const erro = (msg: string) => toast.error(msg);

    async function cadastrar(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();

        try{
            await cadastrarGenero(Genero);
            notificacao("Cadastro realizado com sucesso!")
        }catch(error: any){
            erro(error.message);
        }
    }

    return(
        <>
            <ToastContainer/>
            <SubHeader/>
                <main id={styles.main}>
                    <h1>CRIAR CATEGORIA</h1>
                    <form action="" id={styles.formulario} onSubmit={cadastrar}>
                        <div id={styles.campo_formulario}>
                            <label htmlFor="">Nome Categoria</label>
                            <input type="text" placeholder="Digite a categoria"
                            value={Genero} onChange={(e) => setGenero(e.target.value)}/>
                        </div>
                        <div id={styles.alinharBotoes}>
                            <button id={styles.botaoSalvar}>Salvar</button>
                            <Link href='/produto' id={styles.botaoCancelar}>Cancelar</Link>
                        </div>
                    </form>
                </main>
            <Footer/>
        </>
    )
}

export default Categoria