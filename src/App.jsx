import Layout from "./components/Layout/Layout";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Layout />
      <ToastContainer />
    </>
  );
}

export default App;
