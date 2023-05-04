import React from 'react'
import { useState } from 'react'
import styles from './FontSize.module.css'
import { AiOutlinePlus,AiOutlineMinus } from "react-icons/ai";

function FontSize() {
    const [count, setCount] = useState(0)
    if(count<0){
        setCount(0)
    }
  return (
    <div className={styles.options}>
        <button className={styles.btn} onClick={()=>setCount(count-1)}><AiOutlineMinus/></button>
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
        <button className={styles.btn}  onClick={()=>setCount(count+1)}><AiOutlinePlus/></button>  
    </div>
  )
}

export default FontSize
