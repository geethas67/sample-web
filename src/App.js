import "./App.css";
// import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login/LoginUi";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Home />
      <Login />
      <Footer />
    </div>
  );
}

export default App;
