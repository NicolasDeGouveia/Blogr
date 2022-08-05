import illustration from "../assets/illustration-editor-desktop.svg";
import mobileIllustration from "../assets/illustration-editor-mobile.svg";
import MediaQuery from "react-responsive";

const Main = () => {
  return (
    <section className="py-20 lg:py-44">
      <h2 className="text-center text-5xl font-semibold">
        Designed for the future
      </h2>
      <div className="section-container relative">
        <div className="flex items-center flex-col-reverse lg:flex-row text-center lg:text-start mt-20 lg:mt-40 px-6 lg:px-0">
          <div className="flex flex-col items-center justify-center lg:w-[600px]">
            <div className="my-12 lg:my-0 lg:mb-12">
              <h3 className={styles.h3}>Introducing an extensible editor</h3>
              <p className={styles.p}>
                Blogr features an exceedingly intuitive interface wich lets you
                focus on one thing: creating content. The editor supports
                management of multiple blogs and allows easy manipulation of
                embeds such as images, videos, and Markdown. Extensibility with
                plugins and themes provide easy ways to add functionality or
                change the looks of a blog.
              </p>
            </div>
            <div>
              <h3 className={styles.h3}>Robust content management</h3>
              <p className={styles.p}>
                Flexible content management enables users to easily move through
                posts. Increase the usability of your blog by adding customized
                categories, sections, format, or flow. With this functionality,
                you're in full control.
              </p>
            </div>
          </div>
          <MediaQuery maxDeviceWidth={1023}>
            <img src={mobileIllustration} alt="" />
          </MediaQuery>
          <MediaQuery minDeviceWidth={1024}>
            <img
              className="lg:absolute -right-[38rem]"
              src={illustration}
              alt=""
            />
          </MediaQuery>
        </div>
      </div>
    </section>
  );
};

const styles = {
  h3: "font-semibold text-3xl pb-8",
  p: "text-base font-medium text-[#4b5862]",
};

export default Main;
