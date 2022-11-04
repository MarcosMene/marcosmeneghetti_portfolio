import classes from "./Portfolio.module.scss";
import Works from "../../components/PortfolioWorks/Works";
import { motion } from "framer-motion";
import {
  h3Animation,
  backWords,
  messageAnimation,
  opacityPage,
} from "../../Animations/Animations";
import Footer from "../../components/Footer/Footer";
import { Titlepage } from "../../components/Titlepage/Titlepage";
import { Links } from "../../components/Links/Links";
import { Link } from "react-router-dom";
import BackToTop from "../../components/BackToTop/BackToTop";

const Portfolio = () => {
  return (
    <>
      <motion.main
        variants={opacityPage}
        animate="show"
        exit="hide"
        className={classes.hero_page_wrapper}
      >
        <section className={classes.heropage}>
          <div className={classes.heropage_content}>
            <div className={classes.heropage_content_wrapper}>
              <Titlepage text={"Portfolio"} />
              <motion.p
                variants={messageAnimation}
                animate="show"
                exit="hide"
                className={classes.heropage_message}
              >
                Check out some of my latest Front-End case studies.
              </motion.p>
            </div>
            <motion.div
              variants={h3Animation}
              animate="show"
              exit="hide"
              className={classes.heropage_links}
            >
              {/*</Link> */}
              <Links />
            </motion.div>
          </div>

          {/* portfolio  */}
          <Works />
          <motion.div
            variants={h3Animation}
            animate="show"
            exit="hide"
            className={classes.heropage_links_bottom}
          >
            <a
              target="_blank"
              href="https://www.linkedin.com/in/3dmarcosmeneghetti/"
              rel="noopener noreferrer"
            >
              <img src={`./images/links/linkedin.png`} alt="linkedin" />
            </a>
            <a
              target="_blank"
              href="https://github.com/MarcosMene"
              rel="noopener noreferrer"
            >
              <img src={`./images/links/github.png`} alt="github" />
            </a>
            <Link
              onClick={() =>
                (window.location = "mailto:meneghettimarcos@outlook.com")
              }
            >
              <img src={`./images/links/email.png`} alt="email" />
            </Link>
          </motion.div>
        </section>
        <motion.div
          variants={backWords}
          animate="show"
          exit="hide"
          className={classes.background_text}
        >
          <h2>port</h2>
          <h2>folio</h2>
        </motion.div>
      </motion.main>
      <BackToTop />
      <Footer />
    </>
  );
};

export default Portfolio;
