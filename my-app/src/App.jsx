import styles from "./App.module.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Cards from "./components/Cards/Cards";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Nav />
      <Cards />
    </div>
  );
}

export default App;
