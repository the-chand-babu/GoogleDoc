import React from "react";
import MenuSection from "../container/menusection/MenuSection";
import FormatingSection from "../container/formatingsection/FormatingSection";
import { useRef, useState, useEffect } from "react";
import style from "./Home.module.css";
import { TbList } from "react-icons/tb";
import { AiOutlinePlus, AiOutlineArrowLeft } from "react-icons/ai";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { nameOfFile } from "../container/menusection/MenuSection";

export let handleSavePdf;

function Home() {

  const [image, setImage] = useState("");
  const [open, setOpen] = useState(true);
  const [content, setContent] = useState("");
  const [openInput, setOpenInput] = useState(false);
  const printDiv = useRef();
  const handleClickmenu = () => {
    setOpen(!open);
  };


  handleSavePdf = () => {
  
    const mainContent = printDiv.current;
    html2canvas(mainContent).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 0, 0);
      pdf.save(`${nameOfFile}.pdf`);
});};



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
},[]);



  return (
    <div>
      <MenuSection />
      <FormatingSection printDiv={printDiv} setImage={setImage} />
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

        {/* <div
          ref={printDiv}
          contentEditable={true}
          className={style.mainContainer}
        ></div> */}

<div
          id="my-div"
          ref={printDiv}
          contentEditable={true}
          className={style.mainContainer}
          spellCheck={false}
        >
          {image && (
            <img
              src={image}
              alt="local-image"
              style={{ width: "100%", height: "40%" }}
            />
          )}
</div>
      </div>
    </div>
  );
}

export default Home;
