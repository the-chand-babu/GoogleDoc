import React from "react";
import { useState } from "react";
import styles from "./FontSize.module.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const fontSizeList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function FontSize() {
  const handleFontSize = (e) => {
    document.execCommand("fontSize", false, e.target.value);
  };

  return (
    <div className={styles.options}>
      <button className={styles.btn}>
        <AiOutlineMinus />
      </button>
      <select id="fontSize" onChange={handleFontSize}>
        {fontSizeList.map((ele) => (
          <option key={ele}>{ele}</option>
        ))}
      </select>
      <button className={styles.btn}>
        <AiOutlinePlus />
      </button>
    </div>
  );
}

export default FontSize;
