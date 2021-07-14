import "./App.scss";
import About from "./component/About/About";
import Header from "./component/Header/Header";
import Creations from "./component/Creations/Creations";
import Footer from "./component/Footer/Footer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <About />
      <Creations />
      <Footer />
    </div>
  );
};

export default App;
