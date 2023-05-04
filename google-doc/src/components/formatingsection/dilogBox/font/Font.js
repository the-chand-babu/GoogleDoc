import React from 'react'
import styles from './Font.module.css'

export default function Font() {
  return (
    <select className={styles.option1}>
    <option>Arial</option>
    <hr/>
    <option className={styles.option}>Georgia</option>
    <option className={styles.option}>Lexend</option>
    <option className={styles.option}>Lora</option>
    <option className={styles.option}>Lobster</option>
    <option className={styles.option}>Impact</option>
    <option className={styles.option}>Courier New</option>
    <option className={styles.option}>Caveat</option>
  
   </select>
  )
}
