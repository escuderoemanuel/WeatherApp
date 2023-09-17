import sunIcon from '../../../assets/img/sun-solid.svg';
import '../Header/Header.css';

export const Header = () => {
  return (
    <div className='header d-flex align-items-center'>
      <img
        className='sunIcon align-items-center'
        src={sunIcon}
        alt='Sun Icon'
      />
      <h1>
        Weather
        <span className='span'>App</span>
      </h1>
    </div>
  );
};
