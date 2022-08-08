import logo from "../assets/logo.svg";
const Footer = () => {
  return (
    <footer className="bg-[#25252d] rounded-tr-[6rem] lg:rounded-tr-[7rem]">
      <div className="section-container py-12 flex flex-col lg:flex-row items-center lg:items-start justify-between text-white text-center lg:text-start">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className={styles.div}>
          <p className={styles.p}>Product</p>
          <ul className={styles.ul}>
            <li className={styles.li}>Overview</li>
            <li className={styles.li}>Pricing</li>
            <li className={styles.li}>Marketplace</li>
            <li className={styles.li}>Features</li>
            <li className={styles.li}>Integrations</li>
          </ul>
        </div>
        <div className={styles.div}>
          <p className={styles.p}>Company</p>
          <ul className={styles.ul}>
            <li className={styles.li}>About</li>
            <li className={styles.li}>Team</li>
            <li className={styles.li}>Blog</li>
            <li className={styles.li}>Careers</li>
          </ul>
        </div>
        <div className={styles.div}>
          <p className={styles.p}>Connect</p>
          <ul className={styles.ul}>
            <li className={styles.li}>Contact</li>
            <li className={styles.li}>Newsletter</li>
            <li className={styles.li}>Linkedin</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  p: "font-semibold pb-4",
  ul: "leading-8",
  li: "hover:underline cursor-pointer",
  div: "mt-8 lg:mt-0",
};

export default Footer;
