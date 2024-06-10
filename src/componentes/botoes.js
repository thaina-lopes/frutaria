import styles from "./botoes.module.css";
import add from "../img/add.png";

export default function Botoes({ size, children }) {
  if (size === "pequeno") {
    return (
      <button className={styles.botaoPequeno}>
        <img src={add} alt="adicionar" />
      </button>
    );
  } else {
    return <button className={styles.botao}>{children}</button>;
  }
}
