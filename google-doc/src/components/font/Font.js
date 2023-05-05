import React from 'react'
// import styles from './Font.module.css'
const fontFamilyList = [
  "serif",
  "sans-serif",
  "monospace",
  "cursive",
  "fantasy",
  "system-ui",
  "ui-serif",
  "Roboto",
  "ui-monospace",
  "Montserrat",
  "emoji",
  "math",
  "fangsong",
  "Raleway",
];

export default function Font() {


  const handleFontStyle=(e)=>{
    document.execCommand("fontName", false, e.target.value);

  }

  return (
    <select
    // className={style.fontStyle}
    // id="fontStyle"
    onChange={handleFontStyle}
  >
    <option>{"serif"}</option>
    {fontFamilyList.map((x) => (
      <option key={x}>{x}</option>
    ))}
  </select>
)
}