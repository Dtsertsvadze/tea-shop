import "./App.css";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Navbar from "./pages/Home/components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
