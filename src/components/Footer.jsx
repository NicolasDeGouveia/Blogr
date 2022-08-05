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
            <li>Overview</li>
            <li>Pricing</li>
            <li>Marketplace</li>
            <li>Features</li>
            <li>Integrations</li>
          </ul>
        </div>
        <div className={styles.div}>
          <p className={styles.p}>Company</p>
          <ul className={styles.ul}>
            <li>About</li>
            <li>Team</li>
            <li>Blog</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className={styles.div}>
          <p className={styles.p}>Connect</p>
          <ul className={styles.ul}>
            <li>Contact</li>
            <li>Newsletter</li>
            <li>Linkedin</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  p: "font-semibold pb-4",
  ul: "leading-8",
  div: "mt-8 lg:mt-0",
};

export default Footer;
