import React from "react";
import { Webdesign } from "../../Data/Data";
import { motion } from "framer-motion";
import classes from "./Skills.module.scss";

const Designs = () => {
  return (
    <div className={classes.skillsContainer}>
      <div className={classes.skills}>
        {Webdesign.map((item, i) => {
          return (
            <motion.div
              initial={{
                opacity: 0,
                translateX: -50,
                translateY: -50,
              }}
              animate={{ opacity: 1, translateX: 0, translateY: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              key={item.id}
              className={classes.skillscard}
            >
              <img
                src={process.env.PUBLIC_URL + `/images/skills/${item.image}`}
                alt={item.alt}
              />
              <p>{item.text}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Designs;
