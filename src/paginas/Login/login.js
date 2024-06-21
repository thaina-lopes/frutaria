import Botoes from "../../componentes/botoes";
import styles from "../Login/login.module.css";
import logo from "../../img/fruta03.png";
import { Link } from "react-router-dom";
import BotaoPequeno from "../../componentes/botaoPequeno";

export default function Login() {
  return (
    <div className={styles.login}>
      <img src={logo} alt="logo com frutas" className={styles.logo} />
      <div className={styles.loginContainer}>
        <h2 className={styles.titulo}>Login</h2>
        <p className={styles.subtitulo}>Insira seu e-mail e sua senha</p>
        <form className={styles.formulario}>
          <label className={styles.input}>
            E-mail
            <input type="text" placeholder="Digite seu e-mail" />
          </label>
          <label className={styles.input}>
            Senha
            <input type="password" placeholder="Digite sua senha" />
          </label>
        </form>
      </div>
      <Botoes>Ok</Botoes>
      <p className={styles.novaConta}>
        Não tem uma conta?{" "}
        <Link to="/cadastro" className={styles.cadastrarNovaConta}>
          Cadastre-se
        </Link>
      </p>
    </div>
  );
}
