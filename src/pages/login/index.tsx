import style from "./login.module.css"
import { login } from "../api/authService";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import { erro, notificacao } from "@/src/utils/toast";
// import { console } from "inspector";

const Login = () => {
    const [email, setEmail] = useState<string>("");
    const [senha, setSenha] = useState<string>("");

    const router = useRouter();

    async function autenticar(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await login(email, senha);
            notificacao("Login bem-sucedido.")
            setTimeout(() => {
                router.push("/home");
            },2000);
        }
        catch (error: any) {
            erro("Login Inválido.")
        }
    }

    return (
        <>
            <main id={style.main}>
                <div id={style.container_login}>
                    <div id={style.img_login}>
                        <img src="../imgs/mulher login.svg" alt="" />
                    </div>
                    <div id={style.container_form_login}>
                        <div id={style.img_logo_login}>
                            <img src="../imgs/Logo Header.svg" alt="" />
                        </div>
                        <form action="" id={style.form_login} onSubmit={autenticar}>
                            <div>
                                <label htmlFor="email">E-mail</label>
                                <input type="text" name="email" required value={email} 
                                onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div>
                                <label htmlFor="senha">Senha</label>
                                <input type="password" name="senha" required value={senha} 
                                onChange={(e) => setSenha(e.target.value)} />
                            </div>
                            <button>Entrar</button>
                        </form>
                    </div>
                </div>
            </main>
        </>
    )
}
export default Login;