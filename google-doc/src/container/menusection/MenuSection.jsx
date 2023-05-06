import React, { useEffect, useRef, useState } from "react";
import { FcDocument } from "react-icons/fc";
import { AiOutlineStar } from "react-icons/ai";
import { MdDriveFileMoveOutline } from "react-icons/md";
import { MdOutlineMessage } from "react-icons/md";
import { BiVideo } from "react-icons/bi";
import { MdPersonAddAlt } from "react-icons/md";
import styles from "./MenuSection.module.css";
import Menu from "../../component/menu/Menu";
import ProfileMenu from "../../component/profilemenu/ProfileMenu";
import { TbLock } from "react-icons/tb";

export let nameOfFile = "";
function MenuSection() {
  const [name, setName] = useState("Untitled document");
  useEffect(() => {
    nameOfFile = name;
  }, [name]);

  return (
    <div className={styles.mainContainer}>
      <div style={{ display: "flex" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: "10px",
          }}
        >
          <FcDocument fontSize={42} />
        </div>
        <div className={styles.fileNameContainer}>
          <div className={styles.fileName}>
            <div>
              <span>
                <input
                  type="text"
                  style={{
                    fontSize: "19px",
                    width: "10rem",
                    border: "none",
                    backgroundColor: "#F9FBFD",
                  }}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </span>
            </div>
            <div style={{ marginTop: "6px" }}>
              <span>
                <AiOutlineStar fontSize={17} />
                <MdDriveFileMoveOutline
                  fontSize={17}
                  style={{ marginLeft: "12px" }}
                />
              </span>
            </div>
          </div>
          <div>
            <Menu />
          </div>
        </div>
      </div>
      <div className={styles.headericons}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            width: "17rem",
          }}
        >
          <MdOutlineMessage fontSize={25} />
          <BiVideo fontSize={25} />
          <MdPersonAddAlt fontSize={25} />
          <button
            style={{
              border: "none",
              borderRadius: "50px",
              fontSize: "15px",
              backgroundColor: "#B2D7EF",
              padding: "10px 23px",
            }}
          >
            <TbLock style={{ marginTop: "1px" }} />
            &nbsp;Share
          </button>
        </div>
        <ProfileMenu />
      </div>
    </div>
  );
}

export default MenuSection;