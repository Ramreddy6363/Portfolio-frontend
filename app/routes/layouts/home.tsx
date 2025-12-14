import { Outlet } from 'react-router';
import Navbar from '~/components/Navbar';
import Footer from '~/components/Footer';

const HomeLayout = () => {
  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeLayout;
