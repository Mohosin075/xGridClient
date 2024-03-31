import { Outlet } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div className="max-w-[1800px] mx-auto">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default App;
