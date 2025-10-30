import { Outlet } from 'react-router';
import Hero from '~/components/Hero';
import Navbar from '~/components/Navbar';
import LogoLoop from '~/Animations/LogoLoop';
import Footer from '~/components/Footer';

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiNodedotjs,
} from 'react-icons/si';

const techLogos = [
  {
    node: <SiReact />,
    title: 'React',
    href: 'https://react.dev',
    style: { color: '#61DAFB' },
  },

  {
    node: <SiNextdotjs />,
    title: 'Next.js',
    href: 'https://nextjs.org',
    style: { color: '#fff' },
  },

  {
    node: <SiTypescript />,
    title: 'TypeScript',
    href: 'https://www.typescriptlang.org',
    style: { color: '#3178C6' },
  },

  {
    node: <SiTailwindcss />,
    title: 'Tailwind CSS',
    href: 'https://tailwindcss.com',
    style: { color: '#38BDF8' },
  },

  {
    node: <SiJavascript />,
    title: 'JavaScript',
    href: 'https://www.javascript.com',
    style: { color: '#F7DF1E' },
  },

  {
    node: <SiNodedotjs />,
    title: 'Node.js',
    href: 'https://nodejs.org',
    style: { color: '#339933' },
  },
];

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoLoop
        logos={techLogos}
        speed={120}
        direction="left"
        logoHeight={48}
        gap={40}
        pauseOnHover
        scaleOnHover
        ariaLabel="Technology partners"
      />
      <section className="max-w-6xl mx-auto px-6 my-8">
        <Outlet />
      </section>
      <Footer />
    </>
  );
};

export default HomeLayout;
