import { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import arrow from "../assets/icon-arrow-dark.svg";
import Button from "./Button";
import { productData, companyData, connectData } from "../data/data";
import ScrollingMenu from "./ScrollingMenu";
import { ToggleContext } from "../utils/ToggleContext";
import Arrow from "./Arrow";

const MenuMobile = () => {
  const {
    handleToggleCompany,
    handleToggleConnect,
    handleToggleProduct,
    toggleCompany,
    toggleProduct,
    toggleConnect,
  } = useContext(ToggleContext);

  return (
    <motion.div
      initial={{ x: 370 }}
      animate={{ x: 0 }}
      transition={{ duration: 1.5 }}
      exit={{ x: -370 }}
      className="lg:hidden w-[90vw] absolute left-[5%] top-24 py-8 px-4 flex flex-col justify-center items-center bg-white shadow-xl rounded-xl"
    >
      <ul className="w-full flex flex-col items-center text-black relative">
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
        {toggleCompany && (
          <ScrollingMenu data={companyData} style={styles.navCompany} />
        )}
        <li className={styles.li} onClick={handleToggleConnect}>
          Connect
          <span className={styles.span}>
            <Arrow toggle={toggleConnect} arrow={arrow} />
          </span>
        </li>
        {toggleConnect && (
          <ScrollingMenu data={connectData} style={styles.navConnect} />
        )}
      </ul>
      <div className="w-full h-[1px] bg-gray-300" />
      <div className="text-white flex flex-col ">
        <Button content={"Login"} bg={false} style={styles.buttonLogin} />
        <Button content={"Sign Up"} bg={true} style={styles.buttonNav} />
      </div>
    </motion.div>
  );
};

const styles = {
  li: "font-medium my-4 flex items-baseline cursor-pointer hover:underline",
  span: "pl-2",
  buttonLogin: "text-black",
  buttonNav: "mx-4 font-medium hover:bg-[#ff8f70] hover:text-white",
  navProduct: "left-5 top-8 font-semibold",
  navCompany: "left-32 top-8 font-semibold",
  navConnect: "left-60 top-8 font-semibold",
};

export default MenuMobile;
