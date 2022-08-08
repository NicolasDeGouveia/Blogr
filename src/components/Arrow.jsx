const Arrow = ({ toggle, arrow }) => {
  return (
    <>
      {toggle ? (
        <img src={arrow} alt="" className="rotate-180" />
      ) : (
        <img src={arrow} alt="" />
      )}
    </>
  );
};

export default Arrow;
