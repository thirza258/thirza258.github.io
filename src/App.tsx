import Header from "./components/Header";
import CardPort from "./components/CardPort";
import "./index.css";
import Portfolio from "./components/Portfolio";
import Experiences from "./components/Experiences";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Education from "./components/Education";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="bg-white dark:bg-slate-900 transition-colors duration-300">
      <Navbar />
      <Header />
      <CardPort />
      <Portfolio />
      <Experiences />
      <Education />
      <Skills />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
