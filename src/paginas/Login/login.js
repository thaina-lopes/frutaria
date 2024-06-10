import styles from "../Login/login.module.css";

export default function Login() {
  return (
    <div className={styles.login}>
      <h2 className={styles.titulo}>Login</h2>
      <p className={styles.subtitulo}>Insira seu e-mail e sua senha</p>
      <form>
        <label className={styles.input}>
          E-mail
          <input type="text" />
        </label>
        <label className={styles.input}>
          Senha
          <input type="password" />
        </label>
      </form>
    </div>
  );
}
