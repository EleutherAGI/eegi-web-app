import Header from "./components/shared/header";
import Footer from "./components/shared/footer";
import Start from "./components/Start";

import "./App.css";

const App = () => {
  // useEfffect(() => {}, []);

  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <Start />
      </div>
      <Footer />
    </div>
  );
};

export default App;
