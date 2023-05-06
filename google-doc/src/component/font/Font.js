import React from 'react'
import style from './font.module.css'

export default function Font() {
  const fontFamilyList = [
    "serif",
    "arial",
    "monospace",
    "cursive",
    "fantasy",
    "system-ui",
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
    <select className={style.fontSelector} onChange={(e) => handlefamily(e)}>
              <option>san-sherif</option>
              {fontFamilyList.map((element) => (
                  <option >{element}</option>
              
              ))}
              </select>
  )
}
