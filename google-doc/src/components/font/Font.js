import React from "react";
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
    "Verdana",
  ];

  function handlefamily(e) {
    // document.execCommand("fontName", false, e.target.value);
    document.execCommand("fontName", false, e.target.value);

    console.log(e.target.value);
  }

  return (
    <div>
      <select onChange={handlefamily}>
        {/* <option>san-sherif</option> */}
        {fontFamilyList.map((element) => (
          <option>{element}</option>
        ))}
      </select>
    </div>
  );
}
