import style from "./login.module.css"

const Login = () => {
    return (
        <>
            <main id={style.main}>
                <div id={style.container_login}>
                    <img src="../imgs/mulher login.svg" alt="" />
                    <div>
                        <img src="../imgs/Logo Header.svg" alt="" />
                        <form action="">
                            <div>
                                <label htmlFor="email">E-mail</label>
                                <input type="text" name="email" />
                            </div>
                            <div>
                                <label htmlFor="senha">Senha</label>
                                <input type="password" name="senha" />
                                <button>Entrar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </>
    )
}
export default Login;