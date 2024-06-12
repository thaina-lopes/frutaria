import { Link } from "react-router-dom";
import React, { useState } from "react";

import styles from "../Cadastro/cadatro.module.css";
import logo from "../../img/fruta03.png";
import Botoes from "../../componentes/botoes";

const Formulario = () => {
  // Estados para armazenar os valores dos campos do formulário
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaDigitada, setSenhaDigitada] = useState("");

  // Handlers para atualizar os estados conforme o usuário digita nos campos do formulário
  const handleNomeChange = (e) => {
    setNome(e.target.value); // Atualiza o estado do nome
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value); // Atualiza o estado do email
  };
  const handleSenhaChange = (e) => {
    setSenha(e.target.value); // Atualiza o estado da senha
  };
  const handleSenhaDigitadaChange = (e) => {
    setSenhaDigitada(e.target.value); // Atualiza o estado da senha digitada para verificação
  };

  // Handler para o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário de recarregar a página

    // Objeto usuário contendo os dados do formulário
    const usuario = { nome, email, senha };

    // Envia os dados do formulário para o servidor usando fetch
    fetch("http://localhost:4000/usuarios", {
      method: "POST", // Método HTTP utilizado para enviar os dados
      headers: {
        "Content-Type": "application/json", // Cabeçalho indicando o tipo de conteúdo
      },
      body: JSON.stringify(usuario), // Converte o objeto usuário para JSON e envia no corpo da requisição
    })
      .then((response) => response.json()) // Converte a resposta para JSON
      .then((data) => {
        console.log("Usuário salvo:", data); // Log dos dados salvos no console
      })
      .catch((error) => {
        console.error("Erro ao salvar usuário:", error); // Log de erro caso a requisição falhe
      });
  };

  // Função para verificar se a senha digitada é igual à senha original
  const verificarSenha = () => {
    if (senha === senhaDigitada) {
      alert("Senha correta!"); // Exibe um alerta se a senha estiver correta
    } else {
      alert("Senha incorreta!"); // Exibe um alerta se a senha estiver incorreta
    }
  };

  return (
    <div>
      <form className={styles.formulario} onSubmit={handleSubmit}>
        <label className={styles.input}>
          Nome
          <input
            type="text"
            placeholder="Digite seu nome"
            value={nome}
            onChange={handleNomeChange}
          />
        </label>
        <label className={styles.input}>
          E-mail
          <input
            type="text"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={handleEmailChange}
          />
        </label>
        <label className={styles.input}>
          Senha
          <input
            type="password"
            placeholder="Digite sua senha"
            value={senha}
            onChange={handleSenhaChange}
          />
        </label>
        <div className={styles.botoesContainer}>
          <Botoes type="submit">Ok</Botoes>
        </div>
      </form>
    </div>
  );
};

export default function Cadastro() {
  return (
    <div className={styles.cadastro}>
      <img src={logo} alt="logo com frutas" className={styles.logo} />
      <div className={styles.loginContainer}>
        <h2 className={styles.titulo}>Criar uma conta</h2>
        <p className={styles.subtitulo}>Insira seus dados para se cadastrar</p>
        <Formulario />
      </div>
      <p className={styles.novaConta}>
        Já tem uma conta?{" "}
        <Link to="/login" className={styles.cadastrarNovaConta}>
          Faça o login
        </Link>
      </p>
    </div>
  );
}
