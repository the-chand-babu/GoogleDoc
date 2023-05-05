import React from "react";
import MenuSection from "../container/navbar/MenuSection";
import FormatingSection from "../container/bottomNav/FormatingSection";
import { useRef, useState, useEffect } from "react";
import style from "./Home.module.css";
import { TbList } from "react-icons/tb";
import { AiOutlinePlus, AiOutlineArrowLeft } from "react-icons/ai";
import { jsPDF } from "jspdf";
import { nameOfFile } from "../container/navbar/MenuSection";



export let handleSavePdf;


function Home() {
  const printDiv = useRef();
  const [open, setOpen] = useState(true);
  const [openInput, setOpenInput] = useState(false);


  handleSavePdf = () => {
    const input = document.getElementById("my-div");
    const pdf = new jsPDF();
    pdf.text(input.innerText, 10, 10);
    pdf.save(`${nameOfFile}.pdf`);
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

 

 


  return (
    <div>
      <MenuSection />

      <FormatingSection printDiv={printDiv} />

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
          ref={printDiv}
          contentEditable={true}
          className={style.mainContainer}
          spellCheck={false}
        ></div>
      </div>
    </div>
  );
}

export default Home;
