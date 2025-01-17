import Header from '../Shared/Header/Header';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';
import Navbar from '../Shared/navbar/Navbar';
import RightSideNav from '../Shared/RightSIdeNav/RightSideNav';
import BreakingNews from './BreakingNews';

const Home = () => {
  return (
    <div className="font-poppins">
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      this is Home
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <LeftSideNav />
        </div>
        <div className="md:col-span-2">
          <h2 className="text-4xl">News coming soon</h2>
        </div>
        <div>
          {' '}
          <RightSideNav />
        </div>
      </div>
    </div>
  );
};

export default Home;
