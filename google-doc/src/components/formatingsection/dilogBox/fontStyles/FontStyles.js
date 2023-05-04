import React from 'react'
import styles from './FontStyles.module.css'

export default function FontStyles() {
  return (
    <select className={styles.option1}>
    <option>normal text</option>
    <hr/>
    <option className={styles.option}>heading1</option>
    <option className={styles.option}>heading2</option>
    <option className={styles.option}>heading3</option>
    <option className={styles.option}>heading4</option>
    <option className={styles.option}>heading5</option>
    <option className={styles.option}>heading6</option>
    <option className={styles.option}>heading7</option>
  
   </select>
  )
}
