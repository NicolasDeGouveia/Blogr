import logo from "../assets/logo.svg";
import arrow from "../assets/icon-arrow-light.svg";
import menu from "../assets/icon-hamburger.svg";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="w-full bg-transparent fixed z-10">
      <div className="section-container px-6 lg:px-0 pt-16 flex items-center justify-between">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="lg:hidden">
          <img src={menu} alt="" />
        </div>
        <div className="hidden w-full lg:flex justify-between items-center">
          <ul className="flex text-white ml-10">
            <li className={styles.li}>
              Product
              <span className={styles.span}>
                <img src={arrow} alt="" />
              </span>
            </li>
            <li className={styles.li}>
              Company
              <span className={styles.span}>
                <img src={arrow} alt="" />
              </span>
            </li>
            <li className={styles.li}>
              Connect
              <span className={styles.span}>
                <img src={arrow} alt="" />
              </span>
            </li>
          </ul>
          <div className="text-white">
            <Button content={"Login"} bg={false} />
            <Button content={"Sign Up"} bg={true} />
          </div>
        </div>
      </div>
    </nav>
  );
};

const styles = {
  li: "font-medium ml-8 flex items-baseline",
  span: "pl-2",
  button: "mx-4 font-medium",
};

export default Navbar;
