import { useEffect, useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [scroll, setScroll] = useState(false);
  const handleClick = () => {
    setShow(!show);
    console.log(show);
  };

  let menuActive = show ? "left-0" : "left-[-100%]";

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 5) {
        setScroll(true);
        setShow(false);
      } else {
        setScroll(false);
      }
    });
  });

  let scrollActive = scroll ? "py-6 bg-[#FAF7F0] shadow" : "py-4";

  return (
    <div className={`navbar z-50 fixed w-full scroll-smooth transition-all ${scrollActive}`}>
      <div className="container mx-auto px-4">
        <div className="navbar-box flex items-center justify-between">
          <div className="logo">
            <h1 className="sm:text-2xl text-xl font-bold text-[#AB886D]">Ngobar.</h1>
          </div>
          <ul
            className={`flex lg:gap-12 md:static md:flex-row md:shadow-none md:bg-transparent md:w-auto md:h-full
                md:translate-y-0 md:text-black md:p-0 md:m-0 md:transition-none gap-8 fixed ${menuActive} top-1/2 -translate-y-1/2 flex-col px-8 py-6 rounded shadow-lg shadow-slate-300 bg-sky-400 font-bold text-white transition-all `}
          >
            <li className="flex items-center gap-3"> 
              <i className="ri-home-3-line text-3xl md:hidden block"></i>
              <a href="#" className="font-medium text-xl opacity-75">
                Home
              </a>
            </li>
            <li className="flex items-center gap-3">
              <i className="ri-info-card-line text-3xl md:hidden block"></i>
              <a href="#product" className="font-medium text-xl opacity-75">
                Product
              </a>
            </li>
            <li className="flex items-center gap-3">
              <i className="ri-shake-hands-line text-3xl md:hidden block"></i>
              <a href="#about" className="font-medium text-xl opacity-75">
                About
              </a>
            </li>
            <li className="flex items-center gap-3">
              <i className="ri-presentation-line text-3xl md:hidden block"></i>
              <a href="#contact" className="font-medium text-xl opacity-75">
                Contact
              </a>
            </li>
          </ul>
          <div className="social flex items-center gap-2">
            <a
              href="#about"
              className="bg-[#AB886D] px-5 py-2 rounded-lg text-white font-bold hover:bg-[#493628] transition-all"
            >
              Social Media
            </a>
            <i
              className="ri-menu-3-line text-3xl md:hidden block"
              onClick={handleClick}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
