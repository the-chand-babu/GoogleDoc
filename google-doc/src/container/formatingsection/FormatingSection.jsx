import React, { useRef } from "react";
import styles from "./FormatingSection.module.css";
import { BiUndo, BiRedo } from "react-icons/bi";
import { GrFormEdit, GrDown } from "react-icons/gr";

import { AiOutlinePrinter, AiOutlineHighlight } from "react-icons/ai";
import Zoom from "../../component/Zoom/Zoom";
import { MdOutlineSpellcheck } from "react-icons/md";
import { RxTextAlignMiddle } from "react-icons/rx";
import { FiMoreVertical } from "react-icons/fi";
import { TfiPaintRoller } from "react-icons/tfi";
import { ImBold } from "react-icons/im";
import { BiItalic, BiImages, BiAlignLeft } from "react-icons/bi";
import { MdInsertLink } from "react-icons/md";
import { TbTextColor } from "react-icons/tb";
import { MdOutlineAddComment } from "react-icons/md";
import { AiOutlineUnderline, AiOutlineFontColors } from "react-icons/ai";
import FontStyles from "../../component/fontStyles/FontStyles";
import Font from "../../component/font/Font";
import FontSize from "../../component/fontSize/FontSize";
import { BiAlignMiddle, BiAlignRight } from "react-icons/bi";
import StrikethroughSIcon from "@mui/icons-material/StrikethroughS";
import { nameOfFile } from "../menusection/MenuSection";

function FormatingSection({ printDiv, setImage }) {
  const inputRef = useRef();
  const inputColorRef=useRef();
  const inputBackgroundRef = useRef()

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

  function handlePosition(element) {
    document.execCommand(element.action);
  }
  function handleImageOpen() {
    inputRef.current.click();
  }
  function captureImage(event) {
    if (event.target.files[0]) {
      console.log(event.target.files[0]);
      document.execCommand(
        "insertImage",
        "",
        URL.createObjectURL(event.target.files[0])
      );
    }
  }

  const handleclick = (action) => {
    document.execCommand(action);
  };

  const handleScratch = () => {
    document.execCommand("strikeThrough");
  };

  const handleColor = (e) => {
    document.execCommand("foreColor", "", e.target.value);
  };

  const handleBacground = (e) => {
    document.execCommand("backColor", "", e.target.value);
  };

  const handleAlign = (action) => {
    document.execCommand(action);
  };

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

  console.log(printDiv);

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImage(URL.createObjectURL(file));
    } else {
      alert("Please select a valid image file");
    }
  };

  return (
    <div className={styles.MainContainer}>
      <div className={styles.MainLeft}>
        <div className={styles.MainLeft1}>
          {textPosition.map((element) => (
            <span className={styles.MainLeft1Icones} onClick={() => handlePosition(element)}>{element.icon}</span>
          ))}
          <div >
            <button className={styles.MainLeft1Icones} onClick={() => printDivFunction("my-div", nameOfFile)}>
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
          <div >
            <button onClick={() => handleclick("bold")}>
              <ImBold className={styles.MainLeft1Icones} />
            </button>
          </div>
          <div >
            <button onClick={() => handleclick("italic")}>
              <BiItalic className={styles.MainLeft1Icones}/>
            </button>
          </div>
          <div>
            <button  onClick={() => handleclick("underline")}>
              <AiOutlineUnderline className={styles.MainLeft1Icones} />
            </button>
          </div>
          <div>
            <button
              onClick={() => handleScratch()}
              style={{
                border: "none",
                backgroundColor: "#EEF4F8",
                fontWeight: "bold",
              }}
            >
              <StrikethroughSIcon className={styles.MainLeft1Icones} />
            </button>
          </div>
          <div className={styles.MainLeft1Icones}>
            <label
            className={styles.textColor}
              htmlFor="colorPicker"
              onClick={(e) => e.stopPropagation()}
              onMouseDown={(e) => e.preventDefault()
              
              
              }
            >
              <AiOutlineFontColors onClick={()=>inputColorRef.current.click()} />
            </label>
            <input
              className={styles.colors}
              id="colorPicker"
              type="color"
              onChange={(e) => handleColor(e)}
              ref={inputColorRef}
            />
          </div>

          <div className={styles.MainLeft1Icones}>
          <label
          className={styles.textColor}
              htmlFor="color"
              onClick={(e) => e.stopPropagation()}
              onMouseDown={(e) => e.preventDefault()
              
              
              }
            >
            <AiOutlineHighlight
              onClick={()=>
                inputBackgroundRef.current.click()}
            />
            </label>

            <input
              className={styles.colors}
              onChange={(e) => handleBacground(e)}
              type="color"
              ref={inputBackgroundRef}
            />
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
          <div className={styles.alignItem}>
            <button
              className={styles.leftAlign}
              onClick={() => handleAlign("justifyLeft")}
            >
              <BiAlignLeft />
            </button>
            <button
              onClick={() => handleAlign("justifyCenter")}
              className={styles.middleAlign}
            >
              <BiAlignMiddle />
            </button>

            <button
              onClick={() => handleAlign("justifyRight")}
              className={styles.rightAlign}
            >
              <BiAlignRight />
            </button>
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
