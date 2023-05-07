import React from 'react'
import styles from './FontSize.module.css'


const fontSizeList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function FontSize() {

    const handleFontSize = (e) => {
      document.execCommand("fontSize", false, e.target.value);
    };
    
  return (
    <div className={styles.options}>
    <select className={styles.select} id="fontSize" onChange={handleFontSize}>
      {fontSizeList.map((ele) => (
        <option key={ele}>{ele}</option>
      ))}
    </select>
    
  </div>

  )
}

export default FontSize;
