import List from "components/List/List";
import Navbar from "components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import styles from "./app.module.scss";
import "styles/global.scss";
import Loading from "components/Loading/Loading";
import { useContext } from "react";
import { LoadingContext } from "context/loadingContext";

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
