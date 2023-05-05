import React from 'react'
import styles from './Zoom.module.css'

export default function Zoom() {
  return (
    <select className={styles.option1}>
    <option>Fit</option>
    <hr/>
    <option className={styles.option}>50%</option>
    <option className={styles.option}>75%</option>
    <option className={styles.option}>90%</option>
    <option className={styles.option}>100%</option>
    <option className={styles.option}>125%</option>
    <option className={styles.option}>150%</option>
    <option className={styles.option}>200%</option>
  
   </select>
  )
}
