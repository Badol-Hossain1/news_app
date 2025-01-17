import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';
import qZone1 from '../../../assets/swimming.png';
import qZone2 from '../../../assets/playground.png';
import qZone3 from '../../../assets/class.png';
import qZone4 from '../../../assets/bg.png';

const RightSideNav = () => {
  return (
    <div className="border">
      <div className="p-4 mb-6">
        <button className="btn w-full">
          <FaGoogle />
          Button
        </button>
        <button className="btn mt-2 w-full">
          <FaGithub />
          Button
        </button>
      </div>
      <div className="p-4 mb-6">
        <div className="text-3xl">Find Us On</div>
        <a className="flex items-center rounded-t-lg p-4 border gap-1" href="">
          <FaFacebook></FaFacebook>
          Facebook
        </a>
        <a className="flex items-center p-4 border-x gap-1" href="">
          <FaTwitter></FaTwitter>
          Twitter
        </a>{' '}
        <a className="flex items-center rounded-b-lg p-4 border gap-1" href="">
          <FaLinkedin></FaLinkedin>
          Linkdin
        </a>
      </div>
      <div className="p-4 mb-6">
        <h2 className="text-3xl">Q Zone</h2>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
        <img src={qZone4} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
