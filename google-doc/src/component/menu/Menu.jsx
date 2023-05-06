import React from "react";
import FileMenu from "../filemenu/FileMenu";
import EditMenu from "../editmenu/EditMenu";
import ViewMenu from "../viewmenu/ViewMenu";
import InsertMenu from "../insertmenu/InsertMenu";
import FormatMenu from "../formatmenu/FormatMenu";
import ToolsMenu from "../toolsmenu/ToolsMenu";
import ExtensionsMenu from "../extensionsmenu/ExtensionMenu";
import HelpMenu from "../helpmenu/HelpMenu";
import styles from "./Menu.module.css";

function Menu() {
  return (
    <div style={{ display: "flex" }}>
      <FileMenu />
      <EditMenu />
      <ViewMenu />
      <InsertMenu />
      <FormatMenu />
      <ToolsMenu />
      <ExtensionsMenu />
      <HelpMenu />
    </div>
  );
}

export default Menu;
