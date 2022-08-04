const Button = ({ bg, content, style }) => {
  return (
    <button
      className={
        bg
          ? `${styles.button} text-[#ff525d] bg-white px-8 py-3 rounded-full`
          : `${styles.button} text-white px-8 py-3 rounded-full ${style}`
      }
    >
      {content}
    </button>
  );
};

const styles = {
  button: "mx-[0.15rem] lg:mx-4 font-medium",
};
export default Button;
