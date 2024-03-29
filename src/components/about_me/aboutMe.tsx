// 3rd party imports
import React from 'react'
import { useSpring, animated } from 'react-spring'

// My imports
import styles from './AboutMe.module.scss'

export const AboutMe = () => {
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: {
      duration: 1000,
    },
    delay: 400,
  })
  return (
    <div className={styles.about_me_container}>
      <animated.img
        src="/images/me.svg"
        alt="me sitting on a stool"
        className={styles.me}
        style={style}
      />
      <div className={styles.content}>
        <h1>About Me</h1>
        <p>
          Hello! My name is Steven McHenry and I am a recent Computer Science
          graduate at SFSU. Programming is my passion and nothing makes me more
          happy than solving complex problems in elegant ways.
        </p>
        <p>
          At the moment I am looking for a company in which I can showcase my
          abilities and continue to grow. Software development is my lifelong
          pursuit and I would love to show you why I should be a part of your
          team.
        </p>
        <div className={styles.buttons_container}>
          <button className="main_button" style={{ padding: '.5rem 1.5rem' }}>
            <a
              href="https://github.com/StevenMcHenry01"
              rel="noopener noreferrer"
              target="_blank"
            >
              View github
            </a>
          </button>
          <button className="main_button" style={{ padding: '.5rem 1.5rem' }}>
            <a href="/Resume.pdf" download>
              View resume
            </a>
          </button>
        </div>
      </div>
    </div>
  )
}
