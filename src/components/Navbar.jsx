import { useState } from 'react';

import { GripLinesIcon, XmarkIcon } from './icons';

import Logo from '/logo.webp';

const NavLinks = ({ navOpen }) => {
  return (
    <div
      className="fixed z-40 flex h-screen w-full flex-col items-center justify-between bg-white backdrop-blur transition-transform duration-500 ease-in-out md:hidden"
      style={{
        transform: navOpen ? 'translateY(0%) translateZ(0px)' : 'translateY(-100%) translateZ(0px)',
      }}>
      <div></div>
      <div className="py-4">
        <div className="flex flex-col items-center space-y-5 text-2xl">
          <p className="px-8 py-2">Home</p>
          <p className="px-8 py-2">Program</p>
          <p className="px-8 py-2">About Us</p>
        </div>
      </div>
      <div className="mb-5">
        <button className="rounded-md border bg-primary px-6 py-3 font-semibold">Join Program</button>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <>
      <nav className="fixed z-50 w-full bg-white">
        <div className="container flex items-center justify-between px-5 py-4 md:px-[150px]">
          <img src={Logo} className="w-24 md:w-28" alt="TimCorp Academy" />
          {/* Mobile Navbar */}
          <div className="flex gap-4 md:hidden">
            <button onClick={() => setNavOpen(!navOpen)}>
              {navOpen ? <XmarkIcon className="w-5" /> : <GripLinesIcon className="w-5" />}
            </button>
          </div>

          <div className="hidden font-semibold md:flex md:items-center md:gap-x-7">
            <p>Home</p>
            <p>Program</p>
            <p>About Us</p>
            <button className="rounded-md border bg-primary px-3 py-1 font-semibold">Join Program</button>
          </div>
        </div>
      </nav>
      <NavLinks navOpen={navOpen} />
    </>
  );
};

export default Navbar;
