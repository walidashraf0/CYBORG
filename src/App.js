import "./App.css";
import { Container } from "./components/index";
import { Footer, Header, Hero, MostPopular, GamingLibrary } from "./sections/index";




const App = () => {
  return (
    <>
      <Header text="New Header" color="steelblue" />
      <Container>
        <Hero />
        <MostPopular />
        <GamingLibrary />
      </Container>
      <Footer />
    </>
  );
};

export default App;
