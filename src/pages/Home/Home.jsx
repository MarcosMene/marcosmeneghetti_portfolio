import classes from "./Home.module.scss";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  filmAnimation,
  backWords,
  h3Animation,
  opacityPage,
  h2anim,
  xAnimNeg,
  xAnimPos,
} from "../../Animations/Animations";
import Footer from "../../components/Footer/Footer";
import { Button } from "../../components/Buttons/Button";
import { Links } from "../../components/Links/Links";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <motion.main
        variants={opacityPage}
        animate="show"
        exit="hide"
        className={classes.hero}
      >
        <section className={classes.hero_wrapper}>
          <div className={classes.hero_text}>
            <motion.h1
              variants={xAnimNeg}
              animate="show"
              exit="hide"
              className={classes.hero_title}
            >
              Hi! I'm{" "}
              <span variants={filmAnimation} animate="show" exit="hide">
                Marcos Meneghetti
              </span>
            </motion.h1>
            <motion.h2
              variants={h2anim}
              animate="show"
              exit="hide"
              className={classes.hero_description}
            >
              Front-End Developer Javascript
              <div>
                <div>
                  <span>&</span>React
                </div>
              </div>
            </motion.h2>
            <motion.p
              variants={xAnimPos}
              animate="show"
              exit="hide"
              className={classes.hero_message}
            >
              Passionate about creating code for the web.
            </motion.p>
            <Button
              onClick={() => navigate("/portfolio")}
              type="button"
              buttonStyle="outline"
            >
              View my work
            </Button>
          </div>

          {/* links  */}
          <motion.div
            variants={h3Animation}
            animate="show"
            exit="hide"
            className={classes.hero_links}
          >
            <Links />
          </motion.div>
        </section>
        <motion.section
          variants={backWords}
          animate="show"
          className={classes.background_text}
        >
          <h2>FRONT</h2>
          <h2>END</h2>
        </motion.section>
      </motion.main>
      <Footer />
    </>
  );
};

export default Home;
