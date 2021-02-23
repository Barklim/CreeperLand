import { Helmet } from 'react-helmet-async';
import Header from 'sections/Header';
import About from 'sections/About';
import LatestBuys from 'sections/LatestBuys';
import Buy from 'sections/Buy';
import Description from 'sections/Description';
import Footer from 'sections/Footer';

export function Main() {
  return (
    <>
      <Helmet>
        <title>Главная страница</title>
        <meta name="description" content="Creeperland - главная страница" />
      </Helmet>
      <>
        <Header content lines="1" />
        <Buy />
        <LatestBuys />
        <About />
        <Description />
        <Footer />
      </>
    </>
  );
}
