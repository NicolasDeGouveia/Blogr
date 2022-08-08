import Art from "./components/Art";
import Description from "./components/Description";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import { ToggleProvider } from "./utils/ToggleContext";

function App() {
  return (
    <ToggleProvider>
      <div>
        <Navbar />
        <Hero />
        <Main />
        <Art />
        <Description />
        <Footer />
      </div>
    </ToggleProvider>
  );
}

export default App;
