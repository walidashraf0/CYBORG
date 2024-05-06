import "./App.css";
import { Container } from "./components/index";
import { Footer, Header, Hero, MostPopular } from "./sections/index";




const App = () => {
  return (
    <>
      <Header text="New Header" color="steelblue" />
      <Container>
        <Hero />
        <MostPopular />
      </Container>
      <Footer position="fixed" />
    </>
  );
};

export default App;
