import Header from '../components/header';
import Main from '../components/main';
import FDescription from '../components/first-description';
import SDescription from '../components/second-sedcription';
import Quote from '../components/quote';
import Card from '../components/card';
import FAQ from '../components/faq';
import FreeTrial from '../components/freeTrial';
import Footer from '../components/footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Header />
      <Main />
      <FDescription />
      <SDescription />
      <Quote />
      <Card />
      <FAQ />
      <FreeTrial />
      <Footer />
    </>
  );
}
