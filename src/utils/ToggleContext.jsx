import { createContext, useState } from "react";

export const ToggleContext = createContext();

export function ToggleProvider({ children }) {
  // Toggle Management
  const [toggleNav, setToggleNav] = useState(false);
  const [toggleProduct, setToggleProduct] = useState(false);
  const [toggleCompany, setToggleCompany] = useState(false);
  const [toggleConnect, setToggleConnect] = useState(false);

  const handleToggleProduct = () => {
    if (toggleCompany || toggleConnect === true) {
      setToggleProduct(true);
      setToggleCompany(false);
      setToggleConnect(false);
    } else {
      setToggleProduct(!toggleProduct);
    }
  };

  const handleToggleCompany = () => {
    if (toggleProduct || toggleConnect === true) {
      setToggleCompany(true);
      setToggleProduct(false);
      setToggleConnect(false);
    } else {
      setToggleCompany(!toggleCompany);
    }
  };

  const handleToggleConnect = () => {
    if (toggleCompany || toggleProduct === true) {
      setToggleConnect(true);
      setToggleCompany(false);
      setToggleProduct(false);
    } else {
      setToggleConnect(!toggleConnect);
    }
  };

  // Style navbar Management
  const [navBg, setNavBg] = useState("bg-transparent");
  const [shadow, setShadow] = useState("shadow-none");

  return (
    <ToggleContext.Provider
      value={{
        toggleNav,
        setToggleNav,
        toggleProduct,
        setToggleProduct,
        toggleCompany,
        setToggleCompany,
        toggleConnect,
        setToggleConnect,
        navBg,
        setNavBg,
        shadow,
        setShadow,
        handleToggleCompany,
        handleToggleConnect,
        handleToggleProduct,
      }}
    >
      {children}
    </ToggleContext.Provider>
  );
}
