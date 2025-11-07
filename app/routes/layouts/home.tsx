import { Outlet } from 'react-router';
import Hero from '~/components/Hero';
import Navbar from '~/components/Navbar';
import Footer from '~/components/Footer';
import LogoLoop from '~/Animations/LogoLoop';
import { useState, useEffect } from 'react';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
} from 'react-icons/si';

const techLogos = [
  {
    node: <SiReact className="text-[#61DAFB]" />,
    title: 'React',
    href: 'https://react.dev',
  },
  {
    node: <SiNextdotjs className="text-white" />,
    title: 'Next.js',
    href: 'https://nextjs.org',
  },
  {
    node: <SiJavascript className="text-[#F7DF1E]" />,
    title: 'JavaScript',
    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    node: <SiTypescript className="text-[#3178C6]" />,
    title: 'TypeScript',
    href: 'https://www.typescriptlang.org',
  },
  {
    node: <SiTailwindcss className="text-[#06B6D4]" />,
    title: 'Tailwind CSS',
    href: 'https://tailwindcss.com',
  },
];
const HomeLayout = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      {mounted && (
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
      )}
      <section className="max-w-6xl mx-auto px-6 my-8">
        <Outlet />
      </section>
      <Footer />
    </>
  );
};

export default HomeLayout;
