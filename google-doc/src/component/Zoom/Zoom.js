import React from 'react'
import styles from './Zoom.module.css'

// const zoomData=["50%","75","100","125","150","200"];

export default function Zoom({printDiv}) {
  

  const handleZoomChange=(e)=>{
    if (e.target.value === "100%") {
      printDiv.current.style.transform = "scale(1,1)";
    } else if (e.target.value === "150%") {
      printDiv.current.style.transform = "scale(1.5,1)";
    } else if (e.target.value === "200%") {
      printDiv.current.style.transform = "scale(2,1)";
    } else if (e.target.value === "75%") {
      printDiv.current.style.transform = "scale(0.75,1)";
    }else if (e.target.value === "50%") {
      printDiv.current.style.transform = "scale(0.5,1)";
    } else  if (e.target.value === "125%") {
      printDiv.current.style.transform = "scale(1.25,1)";
    }

  }
  return (
    <select className={styles.option1} onChange={handleZoomChange}>
      <option>100%</option>
    <option className={styles.option}>50%</option>
    <option className={styles.option}>75%</option>
    <option className={styles.option}>100%</option>
    <option className={styles.option}>125%</option>
    <option className={styles.option}>150%</option>
    <option className={styles.option}>200%</option>
  
  
   </select>
  )
}
