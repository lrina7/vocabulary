import styles from "./App.module.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Game from "./components/Game/Game";
import Table from "./components/Table/Table";
import Footer from "./components/Footer/Footer";
import Mistakes from "./components/Mistakes/Mistakes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className={styles.app}>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Game />} />
          <Route path="/table" element={<Table />} />
          <Route path="/more" element={<Footer />} />
          <Route path="*" element={<Mistakes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
