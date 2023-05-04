import React from "react";
import FileMenu from "../menus/filemenu/FileMenu";
import EditMenu from "../menus/editmenu/EditMenu";
import ViewMenu from "../menus/viewmenu/ViewMenu";
import InsertMenu from "../menus/insertmenu/InsertMenu";
import FormatMenu from "../menus/formatmenu/FormatMenu";
import ToolsMenu from "../menus/toolsmenu/ToolsMenu";
import ExtensionsMenu from "../menus/extensionsmenu/ExtensionMenu";
import HelpMenu from "../menus/helpmenu/HelpMenu";
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
