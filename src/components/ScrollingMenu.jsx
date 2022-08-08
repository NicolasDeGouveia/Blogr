import { motion } from "framer-motion";

const ScrollingMenu = ({ data, style }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      exit={{ opacity: 0, transition: { duration: 0.8 } }}
      className={`w-full lg:w-28 bg-gray-100 lg:bg-white text-black ${style}  py-6 px-4 rounded-lg shadow-xl`}
    >
      {data.map((item) => (
        <div
          key={item.id}
          className="flex flex-col py-2 text-center lg:text-start"
        >
          <p className="text-sm hover:font-semibold cursor-pointer">
            {item.title}
          </p>
        </div>
      ))}
    </motion.div>
  );
};

export default ScrollingMenu;
