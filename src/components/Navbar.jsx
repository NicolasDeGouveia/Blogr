import logo from "../assets/logo.svg";
import menu from "../assets/icon-hamburger.svg";
import close from "../assets/icon-close.svg";
import arrow from "../assets/icon-arrow-light.svg";
import Button from "./Button";
import { productData, companyData, connectData } from "../data/data";
import { useContext, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollingMenu from "./ScrollingMenu";
import MenuMobile from "./MenuMobile";
import { ToggleContext } from "../utils/ToggleContext";
import Arrow from "./Arrow";

const Navbar = () => {
  const {
    toggleCompany,
    toggleConnect,
    toggleProduct,
    handleToggleCompany,
    handleToggleConnect,
    handleToggleProduct,
    toggleNav,
    setToggleNav,
    navBg,
    setNavBg,
    shadow,
    setShadow,
  } = useContext(ToggleContext);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollY >= 1) {
        setNavBg("bg-[#ff7a85]");
        setShadow("shadow-xl");
      } else {
        setNavBg(false);
        setShadow("shadow-none");
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`w-full ${navBg} ${shadow} fixed z-10`}>
      <div className="section-container px-6 lg:px-0 py-4 lg:py-8 flex items-center justify-between">
        <div>
          <img src={logo} alt="" />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          exit={{ opacity: 0 }}
          className="lg:hidden"
          onClick={() => setToggleNav(!toggleNav)}
        >
          <AnimatePresence>
            {toggleNav ? <img src={close} alt="" /> : <img src={menu} alt="" />}
          </AnimatePresence>
        </motion.div>
        <AnimatePresence>{toggleNav && <MenuMobile />}</AnimatePresence>
        <div className="hidden w-full lg:flex justify-between items-center">
          <ul className="flex text-white ml-10 relative">
            <li className={styles.li} onClick={handleToggleProduct}>
              Product
              <span className={styles.span}>
                <Arrow toggle={toggleProduct} arrow={arrow} />
              </span>
            </li>
            <AnimatePresence>
              {toggleProduct && (
                <ScrollingMenu data={productData} style={styles.navProduct} />
              )}
            </AnimatePresence>
            <li className={styles.li} onClick={handleToggleCompany}>
              Company
              <span className={styles.span}>
                <Arrow toggle={toggleCompany} arrow={arrow} />
              </span>
            </li>
            <AnimatePresence>
              {toggleCompany && (
                <ScrollingMenu data={companyData} style={styles.navCompany} />
              )}
            </AnimatePresence>
            <li className={styles.li} onClick={handleToggleConnect}>
              Connect
              <span className={styles.span}>
                <Arrow toggle={toggleConnect} arrow={arrow} />
              </span>
            </li>
            <AnimatePresence>
              {toggleConnect && (
                <ScrollingMenu data={connectData} style={styles.navConnect} />
              )}
            </AnimatePresence>
          </ul>
          <div className="text-white">
            <Button content={"Login"} bg={false} />
            <Button content={"Sign Up"} bg={true} style={styles.buttonNav} />
          </div>
        </div>
      </div>
    </nav>
  );
};

const styles = {
  li: "font-medium ml-8 flex items-baseline cursor-pointer hover:underline",
  span: "pl-2",
  buttonNav: "mx-4 font-medium hover:bg-[#ff8f70] hover:text-white",
  navProduct: "absolute left-5 top-8",
  navCompany: "absolute left-32 top-8",
  navConnect: "absolute left-60 top-8",
};

export default Navbar;
