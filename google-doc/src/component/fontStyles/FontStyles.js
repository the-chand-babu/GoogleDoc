import React from "react";
import styles from "./FontStyles.module.css";

export default function FontStyles() {

const handheadingclick=(tagname)=>{
    document.execCommand("formatBlock", false, tagname);

}


  return (
    <select
      className={styles.option1}
      onChange={(e) => handheadingclick(e.target.value)}
    >
      <option>normal text</option>
      <hr />
      <option className={styles.option} value="h1">
        heading1
      </option>
      <option className={styles.option} value="h2">
        heading2
      </option>
      <option className={styles.option} value="h3">
        heading3
      </option>
      <option className={styles.option} value="h4">
        heading4
      </option>
      <option className={styles.option} value="h5">
        heading5
      </option>
      <option className={styles.option} value="h6">
        heading6
      </option>
     
    </select>
  );
}
