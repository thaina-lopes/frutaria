import Botoes from "./botao";
import styles from "./cards.module.css";

export default function Cards({ imagem, título, descrição, preço }) {
  return (
    <div className={styles.container}>
      <img src={imagem} alt={título} />
      <h2>{título}</h2>
      <p>{descrição}</p>
      <h3>{preço}</h3>
      <div className={styles.botao}></div>
    </div>
  );
}
