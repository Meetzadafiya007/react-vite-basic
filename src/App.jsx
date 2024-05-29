import Router from "./routes/Router";
import './assets/css/grid.css';
import './assets/css/tailwind.css';
import './assets/scss/style.scss';
import { ToastContainer } from "react-toastify";

function App() {
  
  return (
    <>
      <Router />
      <ToastContainer />
    </>
  )
}

export default App
