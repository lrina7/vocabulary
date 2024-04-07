import styles from "./App.module.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Game from "./components/Game/Game";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Nav />
      <Game />
    </div>
  );
}

export default App;
