import List from "components/List/List";
import Navbar from "components/Navbar/Navbar";
import styles from "./app.module.scss";
import "styles/global.scss";

function App() {
  return (
    <div id={styles.app}>
      <Navbar />
      <List />
    </div>
  );
}

export default App;
