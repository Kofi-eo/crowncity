import './App.css';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import PopularShoes from './components/popular/PopularShoes';
import PromoCard1 from './components/promo/PromoCard1';
import PromoOne from './components/promo/PromoOne';
import PromoTwo from './components/promo/PromoTwo';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <PromoOne />
      <PopularShoes />
      <PromoTwo />
      <PromoCard1 />
      <Footer />
    </>
  );
}
export default App;
