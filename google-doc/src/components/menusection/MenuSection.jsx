import React from "react";
import { FcDocument } from "react-icons/fc";
import { AiOutlineStar } from "react-icons/ai";
import { MdDriveFileMoveOutline } from "react-icons/md";
import { MdOutlineMessage } from "react-icons/md";
import { BiVideo } from "react-icons/bi";
import { MdPersonAddAlt } from "react-icons/md";
import styles from "./MenuSection.module.css";
import Menu from "../../assets/menu/Menu";
import ProfileMenu from "../../assets/menus/profilemenu/ProfileMenu";
import { TbLock } from "react-icons/tb";

function MenuSection() {
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
              <span style={{ fontSize: "20px" }}>Untitled document</span>
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
