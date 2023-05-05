import React from "react";
import MenuSection from "../../components/menusection/MenuSection";
import FormatingSection from "../../components/formatingsection/FormatingSection";
import { useRef, useState, useEffect } from "react";
import style from "./Home.module.css";
import { TbList } from "react-icons/tb";
import { AiOutlinePlus, AiOutlineArrowLeft } from "react-icons/ai";



function Home() {
  const [open, setOpen] = useState(true);
  const [openInput, setOpenInput] = useState(false);
  const divRef = useRef();
  const handleClickmenu = () => {
    setOpen(!open);
  };


  

  return (
    <div>
      <MenuSection />
    
      <FormatingSection divRef={divRef} />
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
        id="edit"
          ref={divRef}
          contentEditable={true}
          className={style.mainContainer}
        ></div>
      </div>
    </div>
  );
}

export default Home;
