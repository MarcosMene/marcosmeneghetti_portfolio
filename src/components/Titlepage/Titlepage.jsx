import classes from "./Titlepage.module.scss";
import { motion } from "framer-motion";
import { lineAnimation, title } from "../../Animations/Animations";

export const Titlepage = ({ text }) => {
  return (
    <div className={classes.heropage_title}>
      <motion.h1
        variants={title}
        animate="show"
        exit="hide"
        className={classes.heropage_title_text}
      >
        {text}
      </motion.h1>
      <motion.div
        variants={lineAnimation}
        animate="show"
        exit="hide"
        className={classes.heropage_line}
      ></motion.div>
    </div>
  );
};
