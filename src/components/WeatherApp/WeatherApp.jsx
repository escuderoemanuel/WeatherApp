import { Body } from './Body/Body';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import './WeatherApp.css';
export const WeatherApp = () => {
  return (
    <>
      <Header></Header>.
      <div className='containerCenter'>
        <Body></Body>
        <Footer></Footer>
      </div>
    </>
  );
};
