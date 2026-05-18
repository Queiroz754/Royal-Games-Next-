import style from "./login.module.css"

const Login = () => {
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
                        <form action="" id={style.form_login}>
                            <div>
                                <label htmlFor="email">E-mail</label>
                                <input type="text" name="email" />
                            </div>
                            <div>
                                <label htmlFor="senha">Senha</label>
                                <input type="password" name="senha" />
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