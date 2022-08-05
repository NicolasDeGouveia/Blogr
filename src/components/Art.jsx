import mockup from "../assets/illustration-phones.svg";
const Art = () => {
  return (
    <section className={`my-24 lg:my-40 ${styles.gradient}  ${styles.rounded}`}>
      <div className={`art-bg bg-no-repeat ${styles.bg_position}`}>
        <div className="section-container relative pt-40 lg:pt-0 ">
          <div className="flex items-center lg:justify-end">
            <img
              className="absolute bottom-[22rem] lg:-bottom-36 lg:left-0"
              src={mockup}
              alt=""
            />
            <div className="py-28 lg:py-20 px-6 lg:px-0 lg:w-[500px] text-white text-center lg:text-start">
              <h3 className="py-8 font-semibold text-3xl">
                State of the Art Infrastructure
              </h3>
              <p className="font-medium">
                With reliability and speed in mind, worldwide data centers
                provide the backbone for ultra-fast connectivity. This ensures
                your site will load instantly, no matter where your readers are,
                keeping your site competitive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  rounded:
    "rounded-tr-[5rem]  lg:rounded-tr-[7rem] rounded-bl-[5rem] lg:rounded-bl-[7rem]",
  gradient: "bg-gradient-to-l from-[#2c2d3fc4] to-[#3f4164]",
  bg_position: "bg-[left_0rem_top_-5rem] lg:bg-[left_-2rem_bottom_-10rem]",
};

export default Art;
