'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

import { navbarSection } from '@/lib/content/navbar';
import { getBreakpointsWidth } from '@/lib/utils/helper';
import useWindowWidth from '@/lib/hooks/use-window-width';

import { Button, DarkModeButton, Link as CLink, NavButton } from '@/components';
import { fadeIn, slideIn } from '@/styles/animations';

const Navbar = () => {
  const { cta, navLinks } = navbarSection;
  const [navbarCollapsed, setNavbarCollapsed] = useState(false);
  const windowWidth = useWindowWidth();
  const md = getBreakpointsWidth('md');
  const ANIMATION_DELAY = windowWidth <= md ? 0 : 0.8;

  const navbarRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Ensure the code runs only on the client side
    if (typeof window === 'undefined') return;

    const nav = navbarRef.current;
    if (!nav) return;

    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const curScrollPos = window.scrollY;
      nav.style.top = prevScrollPos < curScrollPos ? '-100px' : '0';
      prevScrollPos = curScrollPos;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navbarCollapsed]);

  return (
    <motion.header
      ref={navbarRef}
      variants={fadeIn(0.5)}
      initial="hidden"
      animate="show"
      className="fixed inset-x-0 top-0 z-50 flex items-end justify-between px-8 py-4 duration-500 md:px-6 xl:px-12 backdrop-blur-lg"
    >
      <h1 className="relative text-2xl font-semibold text-accent group top-1">
        <Link href="/#hero" className="block">
          CodeSpace.
          <div className="absolute bottom-1.5 left-0 h-[1px] w-0 group-hover:w-full bg-accent duration-300"></div>
        </Link>
      </h1>

      <NavButton
        onClick={() => setNavbarCollapsed((prev) => !prev)}
        navbarCollapsed={navbarCollapsed}
        className="md:invisible"
      />

      {(navbarCollapsed || windowWidth > md) && (
        <nav className="capitalize absolute text-sm duration-200 md:bg-transparent z-50 w-[90%] left-1/2 -translate-x-1/2 top-full h-max rounded-xl shadow-xl p-6 bg-bg-secondary md:blocks md:static md:w-auto md:left-auto md:transform-none md:top-auto md:rounded-none md:shadow-none md:p-0 md:h-auto">
          <ul className="flex flex-col items-stretch gap-3 list-style-none lg:gap-5 xl:gap-6 md:flex-row md:items-center">
            {navLinks.map(({ name, url }, i) => (
              <motion.li
                key={i}
                className="group"
                variants={slideIn({ delay: ANIMATION_DELAY + i / 10, direction: 'down' })}
                initial="hidden"
                animate="show"
              >
                <CLink
                  href={url}
                  className="block p-2 duration-500 hover:text-accent"
                  onClick={() => setNavbarCollapsed(false)}
                  withPadding
                >
                  {name}
                </CLink>
              </motion.li>
            ))}

            <div className="flex items-center justify-between gap-5 xl:gap-6">
              {cta && (
                <Button
                  type="link"
                  href={cta.url}
                  sameTab={cta?.sameTab}
                  variants={slideIn({
                    delay: ANIMATION_DELAY + navLinks.length / 10,
                    direction: 'down',
                  })}
                  initial="hidden"
                  animate="show"
                >
                  {cta.title}
                </Button>
              )}
              <DarkModeButton
                onClick={() => setNavbarCollapsed(false)}
                variants={slideIn({
                  delay: ANIMATION_DELAY + (navLinks.length + 1) / 10,
                  direction: 'down',
                })}
                initial="hidden"
                animate="show"
              />
            </div>
          </ul>
        </nav>
      )}
    </motion.header>
  );
};

export default Navbar;
