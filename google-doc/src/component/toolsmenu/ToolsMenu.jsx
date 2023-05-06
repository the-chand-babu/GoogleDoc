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
import SpellcheckOutlinedIcon from "@mui/icons-material/SpellcheckOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import SwapVertOutlinedIcon from "@mui/icons-material/SwapVertOutlined";
import TryOutlinedIcon from "@mui/icons-material/TryOutlined";
import AddLinkOutlinedIcon from "@mui/icons-material/AddLinkOutlined";
import ScreenSearchDesktopOutlinedIcon from "@mui/icons-material/ScreenSearchDesktopOutlined";
import TranslateOutlinedIcon from "@mui/icons-material/TranslateOutlined";
import KeyboardVoiceOutlinedIcon from "@mui/icons-material/KeyboardVoiceOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import FormatQuoteOutlinedIcon from "@mui/icons-material/FormatQuoteOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import AccessibilityNewOutlinedIcon from "@mui/icons-material/AccessibilityNewOutlined";

export default function ToolsMenu() {
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
          Tools
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
                    <MenuItem onClick={handleClose}>
                      <SpellcheckOutlinedIcon />
                      &nbsp;&nbsp; Spelling and Grammer
                    </MenuItem>

                    <MenuItem onClick={handleClose}>
                      <ArticleOutlinedIcon />
                      &nbsp;&nbsp; Word Count
                    </MenuItem>

                    <MenuItem onClick={handleClose}>
                      <RateReviewOutlinedIcon />
                      &nbsp;&nbsp; Review Suggested edits
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <CompareArrowsOutlinedIcon />
                      &nbsp;&nbsp; Compare documents
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <FormatQuoteOutlinedIcon />
                      &nbsp;&nbsp; Citations
                    </MenuItem>

                    <MenuItem onClick={handleClose}>
                      <TryOutlinedIcon />
                      &nbsp;&nbsp; Explore
                    </MenuItem>

                    <MenuItem onClick={handleClose}>
                      <AddLinkOutlinedIcon />
                      &nbsp;&nbsp; Linked objects
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <ScreenSearchDesktopOutlinedIcon />
                      &nbsp;&nbsp; Dictionary
                    </MenuItem>

                    <Divider />
                    <MenuItem onClick={handleClose}>
                      <TranslateOutlinedIcon />
                      &nbsp;&nbsp; Translate document
                    </MenuItem>

                    <MenuItem onClick={handleClose}>
                      <KeyboardVoiceOutlinedIcon />
                      &nbsp;&nbsp; Voice typing
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClose}>
                      <NotificationsNoneOutlinedIcon />
                      &nbsp;&nbsp; Notification settings
                    </MenuItem>

                    <MenuItem onClick={handleClose}>
                      <ManageAccountsOutlinedIcon />
                      &nbsp;&nbsp; Preferences
                    </MenuItem>

                    <MenuItem onClick={handleClose}>
                      <AccessibilityNewOutlinedIcon />
                      &nbsp;&nbsp; Accessbility
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
