import classes from "./Contact.module.scss";
import { motion } from "framer-motion";
import {
  h3Animation,
  messageAnimation,
  backWords,
  opacityPage,
} from "../../Animations/Animations";
import Footer from "../../components/Footer/Footer";
import { Button } from "../../components/Buttons/Button";
import { Titlepage } from "../../components/Titlepage/Titlepage";
import { Links } from "../../components/Links/Links";
import BackToTop from "../../components/BackToTop/BackToTop";

const Contact = () => {
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
              <Titlepage text={"Contact"} />
              <motion.p
                variants={messageAnimation}
                animate="show"
                exit="hide"
                className={classes.heropage_message}
              >
                If you have a question or you want just to say hello, I'll will
                try my best to get back to you. I'm always open to discuss new
                ideias to be part of your projects.
                <br />
                <br />
                See you soon.
              </motion.p>
            </div>

            {/* links  */}
            <motion.div
              variants={h3Animation}
              animate="show"
              exit="hide"
              className={classes.heropage_links}
            >
              <Links />
            </motion.div>
          </div>
          <div className={classes.heropage_txt_container}>
            <div className={classes.heropage_txt_container_button}>
              <Button
                onClick={() =>
                  (window.location = "mailto:meneghettimarcos@outlook.com")
                }
                type="button"
                buttonStyle="fill"
              >
                Get in touch
              </Button>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className={classes.heropage_txt_container_wrapper_contact}
            >
              <div className={classes.heropage_txt_container_contact}>
                <div className={classes.heropage_txt_container_contact_icon}>
                  <img src={`/images/contact/emailIcon.png`} alt="email icon" />
                </div>
                <div className={classes.heropage_txt_container_contact_text}>
                  <p
                    className={classes.heropage_txt_container_contact_text_txt}
                  >
                    meneghettimarcos@outlook.com
                  </p>
                </div>
              </div>
              <div className={classes.heropage_txt_container_contact}>
                <div className={classes.heropage_txt_container_contact_icon}>
                  <img src={`/images/contact/phoneIcon.png`} alt="phone icon" />
                </div>
                <div className={classes.heropage_txt_container_contact_text}>
                  <p
                    className={classes.heropage_txt_container_contact_text_txt}
                  >
                    +33 (07) 85 68 06 59
                  </p>
                </div>
              </div>
              <div className={classes.heropage_txt_container_contact}>
                <div className={classes.heropage_txt_container_contact_icon}>
                  <img
                    src={`/images/contact/githubIcon.png`}
                    alt="github icon"
                  />
                </div>
                <div className={classes.heropage_txt_container_contact_text}>
                  <p
                    className={classes.heropage_txt_container_contact_text_txt}
                  >
                    github.com/MarcosMene
                  </p>
                </div>
              </div>
              <div className={classes.heropage_txt_container_contact}>
                <div className={classes.heropage_txt_container_contact_icon}>
                  <img
                    src={`/images/contact/linkedinIcon.png`}
                    alt="linkedin icon"
                  />
                </div>
                <div className={classes.heropage_txt_container_contact_text}>
                  <p
                    className={classes.heropage_txt_container_contact_text_txt}
                  >
                    linkedin.com/in/3dmarcosmeneghetti/
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
          <motion.div
            variants={h3Animation}
            animate="show"
            exit="hide"
            className={classes.heropage_links_bottom}
          >
            <Links
              onClick={() =>
                (window.location = "mailto:meneghettimarcos@outlook.com")
              }
            >
              <img src={`/images/links/email.png`} alt="email" />
            </Links>
          </motion.div>
        </section>
        <motion.div
          variants={backWords}
          animate="show"
          exit="hide"
          className={classes.background_text}
        >
          <h2>CON</h2>
          <h2>TACT</h2>
        </motion.div>
      </motion.main>
      <BackToTop />
      <Footer />
    </>
  );
};

export default Contact;
