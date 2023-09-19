import "./App.css";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Purchase from "./pages/Purchase/Purchase";

function App() {
  return (
    <>
      <Navbar />
      <Purchase />
      <Footer />
    </>
  );
}

export default App;
