import { ReactComponent as Logo } from "./assets/logo.svg";
import Footer from "./components/Footer";
import TipContainer from "./containers/TipContainer";

const App = () => {
  return (
    <div>
      <header>
        <Logo />
      </header>
      <TipContainer />
      <Footer />
    </div>
  );
};

export default App;
