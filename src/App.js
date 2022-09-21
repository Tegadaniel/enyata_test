import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppRoute from "./router";
import "./App.css";


function App() {
  return (
    <>
      <AppRoute />
      <ToastContainer />

    </>
  );
}

export default App;
