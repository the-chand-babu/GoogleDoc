import React from "react";
import styles from "./FontStyles.module.css";
import { handclick, handheadingclick } from "../../../../pages/home/Home";

export default function FontStyles() {
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
      <option className={styles.option} value="h7">
        heading7
      </option>
    </select>
  );
}
