import styles from "../Login/login.module.css";
import logo from "../../img/fruta03.png";
import Botao from "../../componentes/botao";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!usuario || !senha) {
      alert("Os campos de usuário e senha precisam der preenchidos");
      return;
    }
    if (usuario === "Maria" && senha === "123") {
      navigate("/home");
    } else {
      alert("Usuário ou senha incorretos!");
    }
  };

  return (
    <div className={styles.login}>
      <img src={logo} alt="logo com frutas" className={styles.logo} />
      <div className={styles.loginContainer}>
        <h2 className={styles.titulo}>Login</h2>
        <p className={styles.subtitulo}>Insira seu e-mail e sua senha</p>
        <form onSubmit={handleSubmit} className={styles.formulario}>
          <label className={styles.input}>
            Nome de usuário
            <input
              type="text"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              placeholder="Digite seu nome"
            />
          </label>
          <label className={styles.input}>
            Senha
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="Digite sua senha"
            />
          </label>
          <Botao type="submit">Ok</Botao>
        </form>
      </div>
      <p className={styles.novaConta}>
        Não tem uma conta?{" "}
        <Link to="/cadastro" className={styles.cadastrarNovaConta}>
          Cadastre-se
        </Link>
      </p>
    </div>
  );
}
