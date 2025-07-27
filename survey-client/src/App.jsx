import { Outlet } from "react-router-dom";
import "./App.css";
import Nav from "./components/Header/Nav";
import Footer from "./components/Footer/Footer";
import { Bounce, ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <Nav></Nav>

      <div>
        <Outlet />
      </div>
      <Footer></Footer>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
}

export default App;
