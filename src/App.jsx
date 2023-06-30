import { ReactComponent as Logo } from "./assets/logo.svg";
import Footer from "./components/Footer";
import TipContainer from "./containers/TipContainer";

const App = () => {
  return (
    <main>
      <header>
        <Logo />
      </header>
      <TipContainer />
      <Footer />
    </main>
  );
};

export default App;
