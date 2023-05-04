import React, { useRef, useState,useEffect } from "react";
import style from "./mainContent.module.css";
import { TbList } from "react-icons/tb";
import { AiOutlinePlus, AiOutlineArrowLeft } from "react-icons/ai";

function MainContent() {
  const [open, setOpen] = useState(true);
  const [content, setContent] = useState("");
  const [openInput, setOpenInput] = useState(false);
  const divRef=useRef()

  useEffect(() => {
    const range = document.createRange();
    const target = divRef.current;
    range.selectNodeContents(target);
    range.collapse(false);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  }, [content]);

  const handleClickmenu = () => {
    setOpen(!open);
  };

  const handlekeyup = (e) => {
    setContent(e.target.innerText);
  };

  return (
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
        onKeyUp={handlekeyup}
        ref={divRef}
        dangerouslySetInnerHTML={{ __html: content }}
        contentEditable={true}
        className={style.mainContainer}
      ></div>
    </div>
  );
}

export default MainContent;
