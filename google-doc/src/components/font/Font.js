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

  const handleChange=(e)=>{
    document.execCommand("fontName","",e.target.value);
   


  } 


  

  return (
  <select onChange={handleChange}>
    {
      fontFamilyList.map((item)=>{

        return <option value={item}>{item}</option>
      })
    }
  
  </select>
)
}