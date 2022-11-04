import classes from "./Page404.module.scss";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  backWords,
  opacityPage,
  scaleCentral,
  scaleCentralNeg,
} from "../../Animations/Animations";
import Footer from "../../components/Footer/Footer";
import { Button } from "../../components/Buttons/Button";

const Page404 = () => {
  const navigate = useNavigate();
  return (
    <>
      <motion.main
        variants={opacityPage}
        animate="show"
        exit="hide"
        className={classes.hero404}
      >
        <section className={classes.hero404_wrapper}>
          <div className={classes.hero404_text}>
            <motion.h1
              variants={scaleCentral}
              animate="show"
              exit="hide"
              className={classes.hero404_title}
            >
              Oops!
            </motion.h1>
            <motion.h2
              variants={scaleCentralNeg}
              animate="show"
              exit="hide"
              className={classes.hero404_description}
            >
              404 - PAGE NOT FOUND
            </motion.h2>
            <motion.p
              variants={scaleCentralNeg}
              animate="show"
              exit="hide"
              className={classes.hero404_message}
            >
              The page you are looking for might have been removed, had its name
              changed or is temporarily unavailable.
            </motion.p>
            <Button
              onClick={() => navigate("/")}
              type="button"
              buttonStyle="outline"
            >
              GO BACK HOME
            </Button>
          </div>
        </section>
        <motion.div
          variants={backWords}
          animate="show"
          className={classes.background_text}
        >
          <h2>404</h2>
          <h2>404</h2>
        </motion.div>
      </motion.main>
      <Footer />
    </>
  );
};

export default Page404;
