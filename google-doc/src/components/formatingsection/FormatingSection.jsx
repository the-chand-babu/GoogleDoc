import React, { useRef } from "react";
import styles from "./FormatingSection.module.css";
import { BiUndo, BiRedo } from "react-icons/bi";
import { GrFormEdit, GrDown } from "react-icons/gr";

import { AiOutlinePrinter, AiOutlineHighlight } from "react-icons/ai";
import Zoom from "./dilogBox/Zoom/Zoom";
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
import FontStyles from "./dilogBox/fontStyles/FontStyles";
import Font from "./dilogBox/font/Font";
import FontSize from "./dilogBox/fontSize/FontSize";
// import { useReactToPrint } from "react-to-print";

function FormatingSection({ divRef }) {
  const inputRef = useRef();

  const handleclick = (action) => {
    document.execCommand(action);
  };

  const handleColor = (e) => {
    document.execCommand("foreColor", "", e.target.value);
  };

  const handleBacground = (e) => {
    document.execCommand("backColor", "", e.target.value);
  };

  // const handlePrint=useReactToPrint({
    
  // })

  const handlePrint=()=>{

  }
  return (
    <div className={styles.MainContainer}>
      <div className={styles.MainLeft}>
        <div className={styles.MainLeft1}>
          <div className={styles.MainLeft1Icones}>
            <BiUndo />
          </div>
          <div className={styles.MainLeft1Icones}>
            <BiRedo />
          </div>
          <div className={styles.MainLeft1Icones}>
            <button onClick={handlePrint}>
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
            <Zoom />
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
            <BiImages />
          </div>
        </div>
        <div className={styles.MainLeft7}>
          <div className={styles.MainLeft1Icones}>
            {" "}
            <BiAlignLeft />
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
