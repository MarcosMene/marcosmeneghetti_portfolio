import classes from './About.module.scss'
import Footer from '../../components/Footer/Footer'

import { motion } from 'framer-motion'
import {
  h3Animation,
  messageAnimation,
  paragraphs,
  work,
  backWords,
  opacityPage,
  scaleAnim,
  xAnimPos50,
} from '../../Animations/Animations'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Buttons/Button'
import { Titlepage } from '../../components/Titlepage/Titlepage'
import { Links } from '../../components/Links/Links'
import BackToTop from '../../components/BackToTop/BackToTop'

const About = () => {
  const navigate = useNavigate()
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
              <Titlepage text={'About'} />
              <div className={classes.heropage_message}>
                <motion.p
                  variants={messageAnimation}
                  animate='show'
                  exit='hide'
                >
                  Full-stack Developer based in France.
                </motion.p>
              </div>
              <div className={classes.buttons}>
                <Button
                  onClick={() => navigate('/contact')}
                  type='button'
                  // buttonStyle='outline'
                >
                  Contact Me
                </Button>

                <motion.a
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  exit={{ opacity: 0, scale: 0 }}
                  className={classes.buttonLink}
                  href='./images/about/Marcos_Meneghetti_CV_Full_stack_ENG.pdf'
                  download
                >
                  <div>
                    Download CV
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        `/images/about/american_flag.png`
                      }
                      alt='french flag'
                      className={classes.flags}
                    />
                  </div>
                </motion.a>
                <motion.a
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  exit={{ opacity: 0, scale: 0 }}
                  className={classes.buttonLink}
                  href='./images/about/Marcos_Meneghetti_CV_Full_stack_FR.pdf'
                  download
                >
                  <div>
                    Download CV
                    <img
                      src={
                        process.env.PUBLIC_URL + `/images/about/french_flag.png`
                      }
                      alt='french flag'
                      className={classes.flags}
                    />
                  </div>
                </motion.a>
              </div>
            </div>

            {/* links  */}
            <motion.div
              variants={h3Animation}
              animate='show'
              exit='hide'
              className={classes.heropage_links}
            >
              <Links />
            </motion.div>
          </div>
          <div className={classes.heropage_txt_container}>
            <motion.div
              variants={scaleAnim}
              animate='show'
              exit='hide'
              className={classes.heropage_txt_container_text}
            >
              <p>
                My name is Marcos Meneghetti, I'm a Full-stack developer. I
                discovered HTML in July 2020 and now it's "my precious". I have
                a bachelor's degree in advertising, a certificate in Front-End
                and a diploma in Full-stack development. I have knowledge of
                design and 3D animation. I speak Portuguese (maternal language),
                french, english and I have a good knowledge of spanish.
              </p>

              <p>
                I lived in Canada during 2 years (2019-2021) and now I live
                again in France. I have worked in the industry as 3D animator
                for 15 years in short and feature films, TV shows and for
                various animation studios like Blue Spirit Canada, Bullit
                Studio, TeamTo, Citron Vache and Otto Desenhos Animados.
              </p>

              <p>
                My passions are: web development, 3D animation, take pictures,
                cinema, miniatures, listen to music, hockey and martial arts.
              </p>
            </motion.div>
            <motion.div
              variants={xAnimPos50}
              animate='show'
              exit='hide'
              className={classes.heropage_txt_container_photo}
            >
              <img
                src={process.env.PUBLIC_URL + `/images/about/marcosabout.png`}
                alt='me'
              />
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
              Let's work together on your next project.
            </motion.p>
            <div className={classes.heropage_line}></div>
          </motion.div>
          <motion.div
            variants={h3Animation}
            animate='show'
            exit='hide'
            className={classes.heropage_links_bottom}
          >
            <Links
              onClick={() =>
                (window.location = 'mailto:meneghettimarcos@outlook.com')
              }
            >
              <img
                src={process.env.PUBLIC_URL + `/images/links/email.png`}
                alt='email'
              />
            </Links>
          </motion.div>
        </section>
        <motion.section
          variants={backWords}
          animate='show'
          exit='hide'
          className={classes.background_text}
        >
          <h2>ABO</h2>
          <h2>UT</h2>
        </motion.section>
      </motion.main>
      <BackToTop />
      <Footer />
    </>
  )
}

export default About
