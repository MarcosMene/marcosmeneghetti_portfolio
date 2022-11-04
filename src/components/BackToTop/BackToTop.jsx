import React from "react";
import { useEffect, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import classes from "./BackToTop.module.scss";
import { motion } from "framer-motion";

const BackToTop = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className={classes.buttonGoTop}>
      {backToTopButton && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          exit={{ opacity: 0 }}
          onClick={scrollUp}
        >
          <AiOutlineArrowUp />
        </motion.button>
      )}
    </div>
  );
};

export default BackToTop;
