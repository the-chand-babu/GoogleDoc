import React from 'react'
import { useState } from 'react'
import styles from './FontSize.module.css'

function FontSize() {
    const [count, setCount] = useState(0)
    if(count<0){
        setCount(0)
    }
  return (
    <div className={styles.options}>
        <button onClick={()=>setCount(count-1)}>-</button>
        <select className={styles.option1}>
    <option> {count}</option>
    <hr/>
    <option className={styles.option}>{9}</option>
    <option className={styles.option}>{9}</option>
    <option className={styles.option}>{10}</option>
    <option className={styles.option}>{11}</option>
    <option className={styles.option}>{12}</option>
    <option className={styles.option}>{14}</option>
    <option className={styles.option}>{18}</option>
    <option className={styles.option}>{25}</option>
    <option className={styles.option}>{35}</option>
   </select>
        <button  onClick={()=>setCount(count+1)}>+</button>  
    </div>
  )
}

export default FontSize
