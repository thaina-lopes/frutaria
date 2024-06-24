import Banner from "../../componentes/banner";
import Cards from "../../componentes/cards";
import styles from "./home.module.css";
import logo from "../../img/fruta02.png";
import banana from "../../img/banana.png";
import maca from "../../img/maca.png";
import gengibre from "../../img/gengibre.png";
import pimentao from "../../img/pimentao.png";

export default function Home() {
  return (
    <main>
      <div className={styles.cabecalho}>
        <img src={logo} alt="logo com frutas" className={styles.logo} />
        <h2>Olá, [nome]!</h2>
      </div>
      <Banner />
      <section className={styles.produtos}>
        <Cards
          imagem={banana}
          título={"Banana orgânica"}
          descrição={"900g"}
          preço={"R$6,49"}
        />
        <Cards
          imagem={maca}
          título={"Maça gala"}
          descrição={"500g"}
          preço={"R$2,79"}
        />
      </section>
    </main>
  );
}
