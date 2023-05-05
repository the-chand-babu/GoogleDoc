import React from "react";
import MenuSection from "../../components/menusection/MenuSection";
import FormatingSection from "../../components/formatingsection/FormatingSection";
import { useRef, useState, useEffect } from "react";
import style from "./Home.module.css";
import { TbList } from "react-icons/tb";
import { AiOutlinePlus, AiOutlineArrowLeft } from "react-icons/ai";
import { jsPDF } from "jspdf";
import { nameOfFile } from "../../components/menusection/MenuSection";


export let handclick;
export let changeColor;
export let backColor;
export let handheadingclick;
export let alignItemsFunc;
export let handleSavePdf;
export let handScratch;

function Home() {

  const printDiv = useRef();
  const [open, setOpen] = useState(true);
  const [openInput, setOpenInput] = useState(false);
  const divRef = useRef();



  handleSavePdf = () => {
    const input = document.getElementById("my-div");
    const pdf = new jsPDF();
    pdf.text(input.innerText, 10, 10);
    pdf.save(`${nameOfFile}.pdf`);
    // });
  };

  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === "s") {
        event.preventDefault();
        handleSavePdf();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  

  

  const handleClickmenu = () => {
    setOpen(!open);
  };


  handclick = (tagname) => {
    document.execCommand(tagname, false, null);
  };
  handScratch = () => {
    document.execCommand("strikeThrough");
  };
  handheadingclick = (tagname) => {
    document.execCommand("formatBlock", false, tagname);
  };

  changeColor = (color) => {
    document.execCommand("foreColor", false, color);
  };
  backColor = (color) => {
    document.execCommand("BackColor", false, color);
  };
  alignItemsFunc = (align) => {
    if (align == "Center") {
      document.execCommand("justifyCenter", false, align);
    } else if (align == "Left") {
      document.execCommand("JustifyLeft");
    } else if (align == "Right") {
      document.execCommand("JustifyRight");
    }
  };

  return (
    <div>
      <div className={style.menusection}>
        <MenuSection />
      </div>
      <FormatingSection />


  

  return (
    <div>
      <MenuSection />
    
      <FormatingSection printDiv={printDiv}  />

      <div className={style.container}>
        {open ? (
          <span className={style.menuSpan}>
            <TbList onClick={handleClickmenu} className={style.menuIcon} />
          </span>
        ) : (
          <div className={style.menuIconsOpen}>
            <AiOutlineArrowLeft
              onClick={handleClickmenu}
              className={style.arrow}
            />
            <div>
              <span>Summary</span>{" "}
              <AiOutlinePlus
                onClick={() => setOpenInput(!openInput)}
                className={style.plusIcon}
              />
            </div>
            <hr />
            {openInput && (
              <input
                contentEditable
                placeholder="Enter your document summary here.."
                className={style.textarea}
                name=""
                id=""
                cols="27"
                rows="4"
              />
            )}
            <div className={style.slidingDiv}>
              <span>Outline</span>
              <p>Headings that you add to the document well appear here.</p>
            </div>
          </div>
        )}

        <div

          id="my-div"
          ref={divRef}

        id="edit"
        ref={printDiv}

          contentEditable={true}
          className={style.mainContainer}
        ></div>
      </div>
    </div>
  );
}

export default Home;

