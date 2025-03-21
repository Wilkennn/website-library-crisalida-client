import '../styles/Home.css';
import { Navbar } from "../components/Navbar";
import { Welcome } from "../components/Welcome";
import { Diferenciais } from "../components/Diferenciais"; // Importe o componente Diferenciais
import AcervoCarrossel from "../components/AcervoCarrossel";
import EstatisticasLivraria from "../components/EstatisticasLivraria";
import Feedback from '../components/Feedback';
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <Welcome />
      <Diferenciais />
      <AcervoCarrossel />
      <EstatisticasLivraria />
      <Feedback />
      <Footer />
    </>
  );
};

export default Home;