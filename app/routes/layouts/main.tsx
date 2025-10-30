import { Outlet } from 'react-router';
import Navbar from '~/components/Navbar';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <section className="max-w-6xl mx-auto px-6 my-8">
        <Outlet />
      </section>
    </>
  );
};

export default MainLayout;
