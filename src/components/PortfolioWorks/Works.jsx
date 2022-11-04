import React from "react";
import { Portfolio } from "../../Data/Data";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import classes from "./Work.module.scss";

const Works = () => {
  return (
    <section className={classes.worksContainer}>
      <div className={classes.works}>
        {Portfolio.map((item, i) => {
          return (
            <Link
              to={`/portfolio/${item.id}`}
              key={item.id}
              className={classes.card}
            >
              <motion.div
                initial={{
                  opacity: 0,
                  translateX: -50,
                  translateY: -50,
                }}
                animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                transition={{ duration: 0.3, delay: i * 0.15 }}
                className={classes.card_wrapper}
              >
                <p>{item.text}</p>
                <img
                  src={
                    process.env.PUBLIC_URL + `/images/portfolio/${item.image}`
                  }
                  alt={item.alt}
                />
              </motion.div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Works;
