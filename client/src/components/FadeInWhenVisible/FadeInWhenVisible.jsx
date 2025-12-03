import { motion } from "framer-motion";
const FadeInWhenVisible = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }} // start state
      whileInView={{ opacity: 1, y: 0 }} // animate when in view
      viewport={{ once: true, amount: 0.2 }} // trigger once, when 20% is visible
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInWhenVisible;
