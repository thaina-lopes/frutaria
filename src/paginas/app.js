import logo from "../img/fruta04.png";
import styles from "../paginas/app.module.css";

export default function App() {
  return (
    <div className={styles.app}>
      <div className={styles.imagemLogo}>
        <img src={logo} className={styles.logo} alt="logo" />
      </div>
      <div className={styles.textoLogo}>
        <h1 className={styles.titulo}>Frutaria</h1>
        <p className={styles.paragrafo}>Hortifrúti on-line</p>
      </div>
    </div>
  );
}
