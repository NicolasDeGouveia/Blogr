import Button from "./Button";

const Hero = () => {
  return (
    <header className={`w-full hero-bg bg-no-repeat ${styles.bg} `}>
      <div className={`${styles.gradient} rounded-bl-[7rem]`}>
        <div className="section-container py-40 lg:py-48">
          <div className="flex flex-col items-center text-white text-center lg:text-start px-6 lg:px-0">
            <h1 className="text-[2.4rem] lg:text-6xl font-medium lg:font-semibold mb-4">
              A modern publishing platform{" "}
            </h1>
            <p className="text-2xl pb-12">
              Grow your audience and build your online brand
            </p>
            <div>
              <Button
                content={"Start for Free"}
                bg={true}
                style={styles.buttonHeaderFree}
              />
              <Button
                content={"Learn More"}
                bg={false}
                style={styles.buttonHeader}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const styles = {
  buttonHeader: "border border-white px-4 hover:bg-white hover:text-[#ff8f70]",
  buttonHeaderFree: "px-4 hover:bg-[#ff8f70] hover:text-white",
  bg: "bg-[top_left_-22.2rem] lg:bg-[center_left_-19.2rem] rounded-bl-[7rem] lg:rounded-none",
  gradient:
    "bg-gradient-to-b from-[#ff8f70f8] to-[#ff3d54e1] lg:bg-gradient-to-t lg:from-[#ff8f70de] lg:to-[#ff3d54d6]",
};

export default Hero;
