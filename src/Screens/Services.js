import React from 'react'
import styles from './Services.module.css'


export const Services = () => {
  return (
    <div name="Projects" className={styles.services}>
      <div className={styles.titleContainer}>
      <h2>Projects</h2>
      </div>
      <div className={styles.ctaContainer}>
        <img className={styles.callToAction} src={require('../assets/todolist.png')} onClick={event =>  window.location.href='/todo-list'} />
        <img className={styles.callToAction} src={require('../assets/pokemon.png')} />
      </div>
    </div>
  )
}

export default Services;
