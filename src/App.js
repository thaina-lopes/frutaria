import logo from "./img/fruta04.png";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <h1>
        <img src={logo} className="appLogo" alt="logo" /> Frutaria
      </h1>
      <p>Hortifrúti on-line</p>
    </div>
  );
}
