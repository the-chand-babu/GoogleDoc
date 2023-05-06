import React, { useEffect, useRef, useState } from "react";
import styles from "./FormatingSection.module.css";
import { BiUndo, BiRedo } from "react-icons/bi";
import { GrFormEdit, GrDown } from "react-icons/gr";
import { AiOutlinePrinter, AiOutlineHighlight } from "react-icons/ai";
import Zoom from "../../components/zoom/Zoom";
import { MdOutlineSpellcheck } from "react-icons/md";
import { RxTextAlignMiddle } from "react-icons/rx";
import { FiMoreVertical } from "react-icons/fi";
import { TfiPaintRoller } from "react-icons/tfi";
import { ImBold } from "react-icons/im";
import { BiItalic, BiImages, BiAlignLeft } from "react-icons/bi";
import { MdInsertLink } from "react-icons/md";
import { TbTextColor } from "react-icons/tb";
import { MdOutlineAddComment } from "react-icons/md";
import { AiOutlineUnderline } from "react-icons/ai";
import FontStyles from "../../components/fontStyle/FontStyles";
import Font from "../../components/font/Font";
import FontSize from "../../components/fontSize/FontSize";
import { handScratch } from "../../home/Home";
import { nameOfFile } from "../navbar/MenuSection";
const textPosition = [
  {
    icon: <BiUndo style={{ fontSize: "21px" }} />,
    action: "undo",
  },
  {
    icon: <BiRedo style={{ fontSize: "21px" }} />,
    action: "redo",
  },
];

function FormatingSection({ printDiv, setImage }) {
  const inputRef = useRef();
  console.log(printDiv);

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImage(URL.createObjectURL(file));
    } else {
      alert("Please select a valid image file");
    }
  };

  // print function
  const printDivFunction = (divId, title) => {
    let mywindow = window.open(
      "",
      "PRINT",
      "height=650,width=900,top=100,left=100"
    );
    mywindow.document.write(`<html><head><title>${title}</title>`);
    mywindow.document.write("</head><body>");
    mywindow.document.write(document.getElementById(divId).innerHTML);
    mywindow.document.write("</body></html>");

    mywindow.document.close(); //necessary for IE>=10
    mywindow.focus(); //necessary for IE>=10

    mywindow.print();
    mywindow.close();
    return true;
  };

  const handleclick = (action) => {
    document.execCommand(action);
  };

  const handleColor = (e) => {
    document.execCommand("foreColor", "", e.target.value);
  };

  const handleBacground = (e) => {
    document.execCommand("backColor", "", e.target.value);
  };

  const alignItemsFunc = () => {};

  function handlePosition(element) {
    document.execCommand(element.action);
  }

  // const handlePrint = useReactToPrint({
  //   content: () => divRef.current,
  //   documentTitle: "xyz",
  // });

  return (
    <div className={styles.MainContainer}>
      <div className={styles.MainLeft}>
        <div className={styles.MainLeft1}>
          {textPosition.map((element) => (
            <span onClick={() => handlePosition(element)}>{element.icon}</span>
          ))}
          <div className={styles.MainLeft1Icones}>
            <button onClick={() => printDivFunction("my-div", nameOfFile)}>
              <AiOutlinePrinter />
            </button>
          </div>
          <div className={styles.MainLeft1Icones}>
            <MdOutlineSpellcheck />
          </div>
          <div className={styles.MainLeft1Icones}>
            <TfiPaintRoller />
          </div>
          <div className={styles.MainLeft1IconesZoom}>
            <Zoom printDiv={printDiv} />
          </div>
        </div>

        <div className={styles.MainLeft2}>
          <FontStyles />
        </div>
        <div className={styles.MainLeft3}>
          <Font />
        </div>
        <div className={styles.MainLeft4}>
          <FontSize />
        </div>
        <div className={styles.MainLeft5}>
          <div className={styles.MainLeft1Icones}>
            <button onClick={() => handleclick("bold")}>
              <ImBold />
            </button>
          </div>
          <div className={styles.MainLeft1Icones}>
            <button onClick={() => handleclick("italic")}>
              <BiItalic />
            </button>
          </div>
          <div className={styles.MainLeft1Icones}>
            <button onClick={() => handleclick("underline")}>
              <AiOutlineUnderline />
            </button>
          </div>
          <div className={styles.MainLeft1Icones}>
            <button
              onClick={() => handScratch()}
              style={{
                border: "none",
                backgroundColor: "#EEF4F8",
                fontWeight: "bold",
              }}
            >
              S
            </button>
          </div>
          {/* <div className={styles.MainLeft1Icones}>
            <input
              type="color"
              onChange={(event) => changeColor(event.target.value)}
            />
          </div>
          <div className={styles.MainLeft1Icones}>
            <input
              type="color"
              onChange={(event) => backColor(event.target.value)}
            />
          </div> */}
          <div className={styles.MainLeft1Icones}>
            {/* <AiOutlineHighlight /> */}

            {/* <TbTextColor /> */}
            <input onChange={(e) => handleColor(e)} type="color" />
          </div>
          <div className={styles.MainLeft1Icones}>
            {/* <AiOutlineHighlight /> */}
            <input onChange={(e) => handleBacground(e)} type="color" />
          </div>
        </div>
        <div className={styles.MainLeft6}>
          <div className={styles.MainLeft1Icones}>
            <MdInsertLink />
          </div>
          <div className={styles.MainLeft1Icones}>
            <MdOutlineAddComment />
          </div>
          <div className={styles.MainLeft1Icones}>
            {" "}
            <BiImages onClick={() => inputRef.current.click()} />
            <input
              type="file"
              id="file-input"
              onChange={handleFileInputChange}
              ref={inputRef}
              hidden
            />
          </div>
        </div>
        <div className={styles.MainLeft7}>
          <div className={styles.MainLeft1Icones}>
            {" "}
            <BiAlignLeft />
            {/* <select onChange={(e) => alignItemsFunc(e.target.value)}>
              <option> Left</option>
              <option> Center</option>
              <option> Right</option>
            </select> */}
          </div>
          <div className={styles.MainLeft1Icones}>
            {" "}
            <RxTextAlignMiddle />
          </div>
          <div className={styles.MainLeft1Icones}>
            {" "}
            <FiMoreVertical />
          </div>
        </div>
      </div>
      <div>
        <div className={styles.MainLeft7}>
          <div className={styles.MainLeft1Icones}>
            {" "}
            <GrFormEdit />
          </div>
          <div className={styles.MainLeft1Icones}>
            {" "}
            <GrDown />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormatingSection;
