import React from "react";
import { useParams, NavLink } from "react-router-dom";
import { Portfolio } from "../../Data/Data";
import { MdKeyboardBackspace } from "react-icons/md";
import { motion } from "framer-motion";
import classes from "./Work.module.scss";

const Work = () => {
  const { id } = useParams();
  const singlework = Portfolio.find((item) => item.id === parseInt(id));

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      transition={{ duration: 0.5 }}
      className={classes.workcontainer}
    >
      <nav className={classes.navigateBack}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          exit={{ opacity: 0 }}
          className={classes.navigateBack_button}
        >
          <NavLink to="/portfolio">
            <MdKeyboardBackspace />
            Back
          </NavLink>
        </motion.div>
      </nav>
      <div className={classes.film}>
        <div className={classes.imageAndText}>
          <motion.img
            initial={{ opacity: 0, x: "-100vh" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0, x: "-100vh" }}
            src={
              process.env.PUBLIC_URL + `/images/portfolio/${singlework.image}`
            }
            alt={singlework.alt}
          />
          <motion.div
            initial={{ opacity: 0, x: "100vh" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0, x: "100vh" }}
            className={classes.workText}
          >
            <h3>{singlework.text}</h3>
            <p>{singlework.description}</p>
            <div className={classes.workText_links}>
              {singlework.github && (
                <a
                  target="_blank"
                  href={singlework.github}
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              )}
              {singlework.site && (
                <a
                  target="_blank"
                  href={singlework.site}
                  rel="noopener noreferrer"
                >
                  Site
                </a>
              )}
              {singlework.modal && (
                <a
                  target="_blank"
                  href={singlework.modal}
                  rel="noopener noreferrer"
                >
                  Github modal
                </a>
              )}
              {singlework.modalnpm && (
                <a
                  target="_blank"
                  href={singlework.modalnpm}
                  rel="noopener noreferrer"
                >
                  npm modal
                </a>
              )}
              {singlework.figma && (
                <a
                  target="_blank"
                  href={singlework.figma}
                  rel="noopener noreferrer"
                >
                  figma
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.main>
  );
};

export default Work;
