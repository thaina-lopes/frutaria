import { useState } from "react";
import styles from "../componentes/botaoPequeno.module.css";
import adiciona from "../img/add.png";
import remove from "../img/remove.png";

export default function BotaoPequeno() {
  const [add, setAdd] = useState(0);

  // Função chamada quando o botão de adicionar é clicado
  const handleAdd = () => {
    setAdd(add + 1);
  };
  // Função chamada quando o botão de remover é clicado
  const handleRemove = () => {
    if (add > 0) {
      setAdd(add - 1);
    }
  };

  return (
    <div className={styles.container}>
      {add > 0 && (
        <>
          <button className={styles.botao} onClick={handleRemove}>
            <img src={remove} alt="remover" />
          </button>
          <div>
            <p className={styles.quantidade}>{add}</p>
          </div>
        </>
      )}
      <button className={styles.botao} onClick={handleAdd}>
        <img src={adiciona} alt="adicionar" />
      </button>
    </div>
  );
}
