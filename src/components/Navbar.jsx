import React, { useState } from "react";
import { BiLogoLinkedinSquare,BiLogoSkype,BiLogoGmail } from "react-icons/bi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scroll,setScroll] = useState(true);

  const scrollHandler = () => {
    if (window.scrollY >= 100) {
      setScroll(false);
    } else {
      setScroll(true);
    }
  };

  window.addEventListener("scroll", scrollHandler);

  return (
    <header className={scroll ? " bg-black text-white" : "bg-black text-white animate-slidedown z-50 w-full fixed top-0 bg-opacity-80 backdrop-blur backdrop-filter"}>
      <div className=" container mx-auto px-5 md:px-20 py-7">
        <div className=" header-inner flex items-center justify-between">
          <div className=" flex gap-10 items-center">
            <a className="sitelogo">
              <img src="/my-logo.png" height={76} alt="" />
            </a>
            <div className="header-nav hidden lg:block">
              <nav className="flex-grow text-start h-full">
                <ul className="mb-0 inline-flex  list-none gap-10 pl-0 h-full">
                  <li className="inline-block align-middle">
                    <Link to={''} className="group relative inline-block cursor-pointer py-6 text-sm font-medium uppercase tracking-wider text-heading before:text-primary">
                      Work
                      <span className="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"></span>
                    </Link>
                  </li>
                  <li className="inline-block align-middle">
                    <Link to={"/about"} className="group relative inline-block cursor-pointer py-6 text-sm font-medium uppercase focus:decoration-0 text-heading before:text-primary">
                      About
                      <span className="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"></span>
                    </Link>
                  </li>
                  <li className="inline-block align-middle">
                    <a className="group relative inline-block cursor-pointer py-6 text-sm font-medium uppercase tracking-wider text-heading before:text-primary">
                      Resume
                      <span className="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"></span>
                    </a>
                  </li>
                  <li className="inline-block align-middle">
                    <a className="group relative inline-block cursor-pointer py-6 text-sm font-medium uppercase tracking-wider text-heading before:text-primary">
                      Portfolo
                      <span className="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"></span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="header-mobilenav block lg:hidden">
            <button
              onClick={() => setToggle(!toggle)}
              className="btn btn-small btn-transparent px-3 text-sm"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"></path>
                </g>
              </svg>
            </button>
            <div
              className={`${
                toggle ? "animate-slideUpOpen" : "animate-slideUpClose"
              } fixed top-0 left-0 bg-black bg-opacity-80 backdrop-filter  z-50 flex h-screen w-screen items-center justify-center bg-grey-500 backdrop-blur p-4 text-center`}
              data-projection-id="23"
              // style={{transform: 'translateY(0vh) translateZ(0px)'}}
            >
              <button
                onClick={() => setToggle(!toggle)}
                className="btn btn-small btn-transparent absolute left-auto right-4 top-4 z-10 h-10 w-10 rounded-full p-0 text-center text-3xl flex items-center justify-center text-white"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="inline"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"></path>
                  </g>
                </svg>
              </button>
              <nav className="relative max-h-full w-full overflow-y-hidden">
                <ul className="mb-0 list-none pl-0">
                  <li className="block">
                    <Link onClick={() => setToggle(!toggle)} to={''} className="group relative inline-block cursor-pointer py-2 text-lg uppercase tracking-wider text-heading before:text-primary">
                      Work
                    </Link>
                  </li>
                  <li className="block">
                    <Link onClick={() => setToggle(!toggle)} to={'/about'} className="group relative inline-block cursor-pointer py-2 text-lg uppercase tracking-wider text-heading before:text-primary">
                      About
                    </Link>
                  </li>
                  <li className="block">
                    <a className="group relative inline-block cursor-pointer py-2 text-lg uppercase tracking-wider text-heading before:text-primary">
                      Resume
                    </a>
                  </li>
                  <li className="block">
                    <a className="group relative inline-block cursor-pointer py-2 text-lg uppercase tracking-wider text-heading before:text-primary">
                      Portfolio
                    </a>
                  </li>
                </ul>
                <div className="header-button pt-8">
                  <a className="btn btn-small">
                    <span>Hire Me</span>
                  </a>
                </div>
              </nav>
            </div>
          </div>

          <div className="header-button hidden lg:block">
            <div>
                <ul className=" inline-flex items-center gap-5">
                    <li>
                        <a href="#">
                            <img src="be.svg" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <BiLogoLinkedinSquare size={30}/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <BiLogoSkype size={30}/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <BiLogoGmail size={30}/>
                        </a>
                    </li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
