import React from 'react'
import styles from "./HowWeWork.module.css"
import Step from "../Components/Step"

const HowWeWork = () => {

  const steps=[
    {
      text: "PONER ALGO AQUI 5",
      id: 1,
    },
    {
      text: "PONER ALGO AQUI 6",
      id: 2,
    },
    {
      text: "PONER ALGO AQUI 7",
      id: 3,
    },
    {
      text: "PONER ALGO AQUI 8",
      id: 4,
    },
    {
      text: "PONER ALGO AQUI 9",
      id: 5,
    },
  ]

  return (
    <div name="HowWeWork" className={styles.howWeWork}>
      <h2 className={styles.title}>How we work</h2>
      {steps.map((x) => (
        <Step key={x.id} text={x.text} step={x.id} />
      ))}
    </div>
  )
}

export default HowWeWork
