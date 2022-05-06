import { useContext } from "react";
import List from "components/List/List";
import Loading from "components/Loading/Loading";
import Navbar from "components/Navbar/Navbar";
import { LoadingContext } from "context/loading-context";
import { ToastContainer } from "react-toastify";
import styles from "./app.module.scss";
import "styles/global.scss";

function App() {
  const { loading } = useContext(LoadingContext);
  return (
    <div id={styles.app}>
      <Navbar />
      <List />
      <ToastContainer autoClose={1300} progressClassName="progressBar" />
      {loading && <Loading loading={loading} />}
    </div>
  );
}

export default App;
