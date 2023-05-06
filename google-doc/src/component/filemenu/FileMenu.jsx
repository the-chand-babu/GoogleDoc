import * as React from "react";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import { Divider } from "@mui/material";
import ArticleIcon from "@mui/icons-material/Article";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import CopyAllIcon from "@mui/icons-material/CopyAll";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import RestoreIcon from "@mui/icons-material/Restore";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import PermDeviceInformationIcon from "@mui/icons-material/PermDeviceInformation";
import LanguageIcon from "@mui/icons-material/Language";
import DescriptionIcon from "@mui/icons-material/Description";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";

import {handleSavePdf} from '../../home/Home';


export default function FileMenu() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Stack direction="row" spacing={2}>
      <div>
        <Button
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? "composition-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          style={{ color: "black" }}
        >
          File
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
          sx={{zIndex:"10000"}}
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom-start" ? "left top" : "left bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem onClick={() => window.location.reload(true)}>
                      <ArticleIcon />
                      &nbsp;&nbsp; New
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <FolderOpenIcon />
                      &nbsp;&nbsp; Open
                    </MenuItem>

                    <MenuItem onClick={handleClose}>
                      <CopyAllIcon />
                      &nbsp;&nbsp; Make a Copy
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClose}>
                      <PersonAddAltIcon />
                      &nbsp;&nbsp; Share
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <MailOutlineIcon />
                      &nbsp;&nbsp; Email
                    </MenuItem>

                    <MenuItem onClick={() => handleSavePdf()}>
                      <SaveAltIcon />
                      &nbsp;&nbsp; Download
               </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClose}>
                      <DriveFileRenameOutlineIcon />
                      &nbsp;&nbsp; Rename
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <FolderOpenIcon />
                      &nbsp;&nbsp; Move
                    </MenuItem>

                    <MenuItem onClick={handleClose}>
                      <AddToDriveIcon />
                      &nbsp;&nbsp; Add Shortcut to drive
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <DeleteOutlineIcon />
                      &nbsp;&nbsp; Move to trash
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClose}>
                      <RestoreIcon />
                      &nbsp;&nbsp; Version history
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <CheckCircleOutlineIcon /> &nbsp;&nbsp; Make available
                      offline{" "}
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClose}>
                      <PermDeviceInformationIcon />
                      &nbsp;&nbsp; Details
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <LanguageIcon />
                      &nbsp;&nbsp; Language
                    </MenuItem>

                    <MenuItem onClick={handleClose}>
                      <DescriptionIcon /> &nbsp;&nbsp; Page setup
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <LocalPrintshopIcon /> &nbsp;&nbsp; Print
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
  );
}
