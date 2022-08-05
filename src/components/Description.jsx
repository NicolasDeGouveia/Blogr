import MediaQuery from "react-responsive";
import illustration from "../assets/illustration-laptop-desktop.svg";
import mobileIllustration from "../assets/illustration-laptop-mobile.svg";

const Description = () => {
  return (
    <section className="section-container py-20 lg:py-40 lg:mb-40">
      <div className="flex relative justify-end items-center flex-col lg:flex-row">
        <MediaQuery maxDeviceWidth={1023}>
          <img src={mobileIllustration} alt="" />
        </MediaQuery>
        <MediaQuery minDeviceWidth={1024}>
          <img
            className="absolute lg:-left-[38rem]"
            src={illustration}
            alt=""
          />
        </MediaQuery>

        <div className="flex flex-col items-center justify-center px-6 lg:px-0 lg:w-[600px] text-center lg:text-start">
          <div className="my-12 lg:my-0 lg:mb-12">
            <h3 className={styles.h3}>Free, open, simple</h3>
            <p className={styles.p}>
              Blogr is a free and open source application backed by a large
              community of helpful developers. Is supports features such as code
              syntax highlighting, RSS feeds, social media integration,
              third-party commenting tools, and works seamlessly with Google
              Analytics. The architecture is clean and is relatively easy to
              learn.
            </p>
          </div>
          <div>
            <h3 className={styles.h3}>Powerful tooling</h3>
            <p className={styles.p}>
              Batteries included. We built a simple and straightforward CLI tool
              that makes customization and deployment a breeze, but capable of
              producing even the most complicated sites.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  h3: "font-semibold text-3xl pb-8",
  p: "text-base font-medium text-[#4b5862]",
};

export default Description;
