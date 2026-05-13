const Login = () => {
    return (
        <>
            <main>
                <img src="../imgs/mulher login.svg" alt="" />
                <div>
                    <img src="../imgs/Logo Header.svg" alt="" />
                    <form action="">
                        <div>
                            <label htmlFor="email">E-mail</label>
                            <input type="text" name="email"/>
                        </div>
                        <div>
                            <label htmlFor="senha">Senha</label>
                            <input type="password" name="senha" />
                            <button>Entrar</button>
                        </div>
                    </form>
                </div>
            </main>
        </>
    )
}
export default Login;