import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer, Header } from "./sections/index";
import { Container } from "./components/index";
import { Home, Profile } from "./Pages/index";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header text="New Header" color="steelblue" />
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </Container>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
