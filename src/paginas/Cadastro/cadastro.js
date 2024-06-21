import styles from "../Cadastro/cadastro.module.css";
import logo from "../../img/fruta03.png";
import Botao from "../../componentes/botao";
import { Link } from "react-router-dom";

export default function Cadastro() {
  return (
    <div className={styles.cadastro}>
      <img src={logo} alt="logo com frutas" className={styles.logo} />
      <div className={styles.loginContainer}>
        <h2 className={styles.titulo}>Criar uma conta</h2>
        <p className={styles.subtitulo}>Insira seus dados para se cadastrar</p>
        <form className={styles.formulario}>
          <label className={styles.input}>
            Nome
            <input type="text" placeholder="Digite seu nome" />
          </label>
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
      <Botao>Ok</Botao>
      <p className={styles.novaConta}>
        Já tem uma conta?{" "}
        <Link to="/login" className={styles.cadastrarNovaConta}>
          Faça o login
        </Link>
      </p>
    </div>
  );
}
