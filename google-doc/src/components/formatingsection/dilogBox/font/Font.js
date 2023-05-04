import React from 'react'
// import styles from './Font.module.css'

export default function Font() {
  const fontFamilyList = [
    "serif",
    "arial",
    "sans-serif",
    "monospace",
    "cursive",
    "fantasy",
    "system-ui",
    "ui-serif",
    "ui-sans-serif",
    "ui-monospace",
    "ui-rounded",
    "emoji",
    "math",
    "fangsong",
    "Georgia",
    "Times New Roman",
    "Impact",
  ];
  
  
  
  function handlefamily(e){
    document.execCommand("fontName", "", e.target.value);
  }

  return (
    <select onChange={(e) => handlefamily(e)}>
              <option>san-sherif</option>
              {fontFamilyList.map((element) => (
                  <option >{element}</option>
              
              ))}
              </select>
  )
}
