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
import HelpIcon from "@mui/icons-material/Help";
import SchoolIcon from "@mui/icons-material/School";
import CellTowerIcon from "@mui/icons-material/CellTower";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";
import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import KeyboardOutlinedIcon from "@mui/icons-material/KeyboardOutlined";

export default function HelpMenu() {
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
          Help
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
                      <HelpIcon />
                      &nbsp;&nbsp; Help
                    </MenuItem>

                    <MenuItem onClick={handleClose}>
                      <SchoolIcon />
                      &nbsp;&nbsp; Training
                    </MenuItem>

                    <MenuItem onClick={handleClose}>
                      <CellTowerIcon />
                      &nbsp;&nbsp; Updates
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClose}>
                      <FeedbackOutlinedIcon />
                      &nbsp;&nbsp; Help docs improve
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <ReportProblemOutlinedIcon />
                      &nbsp;&nbsp; Report abuse
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClose}>
                      <ArticleOutlinedIcon /> &nbsp;&nbsp; Privacy policy
                    </MenuItem>

                    <MenuItem onClick={handleClose}>
                      <ArticleOutlinedIcon /> &nbsp;&nbsp; Terms of services
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClose}>
                      <KeyboardOutlinedIcon />
                      &nbsp;&nbsp; Keyboard shortcuts
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
