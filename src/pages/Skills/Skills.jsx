import classes from './Skills.module.scss';
import Webs from '../../components/SkillsWeb/Webs';
import Designs from '../../components/SkillsWeb/Designs';
import ManagerTool from '../../components/SkillsWeb/ManagerTool';
import { motion } from 'framer-motion';
import {
  backWords,
  h3Animation,
  messageAnimation,
  opacityPage,
  paragraphs,
  work,
} from '../../Animations/Animations';
import Footer from '../../components/Footer/Footer';
import { Titlepage } from '../../components/Titlepage/Titlepage';
import { Link } from 'react-router-dom';
import { Links } from '../../components/Links/Links';

const Skills = () => {
  return (
    <>
      <motion.main
        variants={opacityPage}
        animate='show'
        exit='hide'
        className={classes.hero_page_wrapper}
      >
        <section className={classes.heropage}>
          <div className={classes.heropage_content}>
            <div className={classes.heropage_content_wrapper}>
              <Titlepage text={'Skills'} />
              <div className={classes.heropage_message}>
                <motion.p
                  variants={messageAnimation}
                  animate='show'
                  exit='hide'
                >
                  These are the tools I use in my daily life as a full-stack
                  developer.
                </motion.p>
              </div>
            </div>
            <motion.div
              variants={h3Animation}
              animate='show'
              exit='hide'
              className={classes.heropage_links}
            >
              {/*</Link> */}
              <Links />
            </motion.div>
          </div>

          <motion.div
            variants={paragraphs}
            animate='show'
            exit='hide'
            className={classes.heropage_work}
          >
            <div className={classes.heropage_line}></div>
            <motion.p variants={work} animate='show' exit='hide'>
              Web Develop
            </motion.p>
            <div className={classes.heropage_line}></div>
          </motion.div>
          <Webs />

          <motion.div
            variants={paragraphs}
            animate='show'
            exit='hide'
            className={classes.heropage_work}
          >
            <div className={classes.heropage_line}></div>
            <motion.p variants={work} animate='show' exit='hide'>
              Design Tools
            </motion.p>
            <div className={classes.heropage_line}></div>
          </motion.div>
          <Designs />


          <motion.div
            variants={paragraphs}
            animate='show'
            exit='hide'
            className={classes.heropage_work}
          >
            <div className={classes.heropage_line}></div>
            <motion.p variants={work} animate='show' exit='hide'>
              Project Manager Tools
            </motion.p>
            <div className={classes.heropage_line}></div>
          </motion.div>
          <ManagerTool />





          <motion.div
            variants={h3Animation}
            animate='show'
            exit='hide'
            className={classes.heropage_links_bottom}
          >
            <a
              target='_blank'
              href='https://www.linkedin.com/in/3dmarcosmeneghetti/'
              rel='noopener noreferrer'
            >
              <img
                src={process.env.PUBLIC_URL + `/images/links/linkedin.png`}
                alt='linkedin'
              />
            </a>
            <a
              target='_blank'
              href='https://github.com/MarcosMene'
              rel='noopener noreferrer'
            >
              <img
                src={process.env.PUBLIC_URL + `/images/links/github.png`}
                alt='github'
              />
            </a>
            <Link
              onClick={() =>
                (window.location = 'mailto:meneghettimarcos@outlook.com')
              }
            >
              <img
                src={process.env.PUBLIC_URL + `/images/links/email.png`}
                alt='email'
              />
            </Link>
          </motion.div>
        </section>
        <motion.section
          variants={backWords}
          animate='show'
          exit='hide'
          className={classes.background_text}
        >
          <h2>ski</h2>
          <h2>lls</h2>
        </motion.section>
      </motion.main>
      <Footer />
    </>
  );
};

export default Skills;
