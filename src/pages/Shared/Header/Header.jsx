import logo from '../../../assets/logo.png';
import moment from 'moment';
const Header = () => {
  return (
    <div className="text-center">
      <img className="mx-auto" src={logo} alt="" />
      <p>Journalism Without Fear or Favour</p>
      <span>{moment().format('dddd, MMMM Do YYYY')}</span>
    </div>
  );
};

export default Header;
