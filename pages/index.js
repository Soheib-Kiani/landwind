import Header from '../components/header';
import Main from '../components/main';
import FDescription from '../components/first-description';
import SDescription from '../components/second-sedcription';
import Quote from '../components/quote';
import Card from '../components/card';
import FAQ from '../components/faq';
export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <FDescription />
      <SDescription />
      <Quote />
      <Card />
      <FAQ />
    </>
  );
}
