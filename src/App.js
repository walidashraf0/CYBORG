import "./App.css";
import { Header, Footer, Container } from "./components/index";

const App = () => {
  return (
    <>
      <Header text="New Header" color="white" />
      <Container />
      <Footer position="fixed" />
    </>
  );
};

export default App;
