import { Body } from './Body/Body';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import './WeatherApp.css';
export const WeatherApp = () => {
  return (
    <>
      <div className='container'>
        <Header></Header>.
      </div>
      <div className='containerCenter'>
        <Body></Body>
        <Footer></Footer>
      </div>
    </>
  );
};
