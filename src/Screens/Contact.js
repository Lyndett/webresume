import React from 'react'
import styles from "./Contact.module.css"

export const Contact = () => {
  return (
    <div name= "Contact" className={styles.contact}>
      <h2>Contact</h2>
      <form className={styles.form}>
        <label></label>
        <input className={styles.input}></input>
      </form>
    </div>
  )
}
