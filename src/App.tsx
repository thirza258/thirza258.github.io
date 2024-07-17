import Header from "./components/Header";
import CardPort from "./components/CardPort";
import "./index.css";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Experiences from "./components/Experiences";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <CardPort />
      <Skills />
      <Portfolio />
      <Experiences />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
