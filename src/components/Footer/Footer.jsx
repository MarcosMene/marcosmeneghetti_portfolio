import classes from "./Footer.module.scss";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
      className={classes.footer_full}
    >
      <section className={classes.footer}>
        <div className={classes.footer_name}>
          <h4>Marcos Meneghetti</h4>
          <span>Front-End Developer JavaScript-React</span>
        </div>
        <div className={classes.footer_copyright}>
          <span>&#169; </span> 2022 Designed and developed by Marcos Meneghetti
        </div>
        <div className={classes.footer_email}>meneghettimarcos@outlook.com</div>
      </section>
    </motion.footer>
  );
};

export default Footer;
