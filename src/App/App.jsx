import List from "components/List/List";
import Navbar from "components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import styles from "./app.module.scss";
import "styles/global.scss";

function App() {
  return (
    <div id={styles.app}>
      <Navbar />
      <List />
      <ToastContainer autoClose={1300} progressClassName="progressBar" />
    </div>
  );
}

export default App;
