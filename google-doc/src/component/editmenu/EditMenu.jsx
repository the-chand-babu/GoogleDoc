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
import UndoIcon from "@mui/icons-material/Undo";
import RedoIcon from "@mui/icons-material/Redo";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
import SelectAllIcon from "@mui/icons-material/SelectAll";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import FindReplaceIcon from "@mui/icons-material/FindReplace";
import style from './EditMenu.module.css';

export default function EditMenu() {
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
          Edit
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
          className={style.Editbar}
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
                    <MenuItem onClick={handleClose}>
                      <UndoIcon />
                      &nbsp;&nbsp; Undo
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <RedoIcon />
                      &nbsp;&nbsp; Redu
                    </MenuItem>
                    <Divider />

                    <MenuItem onClick={handleClose}>
                      <ContentCutIcon />
                      &nbsp;&nbsp; Cut
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <ContentCopyIcon />
                      &nbsp;&nbsp; Copy
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <ContentPasteIcon />
                      &nbsp;&nbsp; Paste
                    </MenuItem>

                    <MenuItem onClick={handleClose}>
                      <ContentPasteSearchIcon />
                      &nbsp;&nbsp; Paste without formatting
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClose}>
                      <SelectAllIcon />
                      &nbsp;&nbsp; Select All
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <DeleteOutlineIcon />
                      &nbsp;&nbsp; Delete
                    </MenuItem>
                    <Divider />

                    <MenuItem onClick={handleClose}>
                      <FindReplaceIcon />
                      &nbsp;&nbsp; Find and Replace
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
