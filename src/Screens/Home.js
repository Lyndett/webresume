import React from 'react'
import styles from './Home.module.css'

export const Home = () => {
  return (
    <div name= "About me" className= {styles.home}>
      <div className={styles.titleContainer}>
      <p>
        Welcome to my <br />
        <b>portfolio!</b>
      </p>
      <p> I am Dulce Corrales, a 24-year-old software developer with a passion for technology and a drive to continually learn and innovate. My journey in the world of software development 
        has been fueled by my curiosity and enthusiasm for exploring new technologies and frameworks. As a software developer, I thrive on challenges and enjoy finding creative solutions 
        to complex problems. My experience spans across various technologies, including Java, Python, C++, and React. Whether it's coding elegant algorithms or crafting user-friendly 
        interfaces, I take pride in my ability to adapt to different projects and deliver high-quality results. <br />
        <b>Beyond programming, I find inspiration in the realms of video games and art. These interests fuel my creativity and drive to push the boundaries of what's possible in software 
          development. On this website, I'll be showcasing some of the projects I've worked on, giving you a glimpse into my journey as a developer. Join me as I continue to explore, innovate, 
          and learn in the ever-evolving world of technology.</b>
      </p>
      </div>
      
    </div>
  )
}

export default Home;