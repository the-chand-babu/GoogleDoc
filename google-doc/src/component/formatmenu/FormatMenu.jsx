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
import FormatBoldOutlinedIcon from "@mui/icons-material/FormatBoldOutlined";
import ViewHeadlineOutlinedIcon from "@mui/icons-material/ViewHeadlineOutlined";
import FormatIndentIncreaseOutlinedIcon from "@mui/icons-material/FormatIndentIncreaseOutlined";
import FormatLineSpacingOutlinedIcon from "@mui/icons-material/FormatLineSpacingOutlined";
import TocOutlinedIcon from "@mui/icons-material/TocOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import CalendarViewDayOutlinedIcon from "@mui/icons-material/CalendarViewDayOutlined";
import TagOutlinedIcon from "@mui/icons-material/TagOutlined";
import FileOpenOutlinedIcon from "@mui/icons-material/FileOpenOutlined";
import TableChartOutlinedIcon from "@mui/icons-material/TableChartOutlined";
import BrokenImageOutlinedIcon from "@mui/icons-material/BrokenImageOutlined";
import HorizontalRuleOutlinedIcon from "@mui/icons-material/HorizontalRuleOutlined";
import FormatClearOutlinedIcon from "@mui/icons-material/FormatClearOutlined";

export default function FormatMenu() {
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
          Format
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
                      <FormatBoldOutlinedIcon />
                      &nbsp;&nbsp; Text
                    </MenuItem>

                    <Divider />
                    <MenuItem onClick={handleClose}>
                      <ViewHeadlineOutlinedIcon />
                      &nbsp;&nbsp; Paragraph styles
                    </MenuItem>

                    <MenuItem onClick={handleClose}>
                      <FormatIndentIncreaseOutlinedIcon />
                      &nbsp;&nbsp; Align & indent
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <FormatLineSpacingOutlinedIcon />
                      &nbsp;&nbsp; Line & paragraph spacing
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <TocOutlinedIcon />
                      &nbsp;&nbsp; Columns
                    </MenuItem>

                    <MenuItem onClick={handleClose}>
                      <ListOutlinedIcon />
                      &nbsp;&nbsp; Bullets & numbering{" "}
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClose}>
                      <CalendarViewDayOutlinedIcon />
                      &nbsp;&nbsp; Headers & footers
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <TagOutlinedIcon />
                      &nbsp;&nbsp; Page numbers
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <FileOpenOutlinedIcon />
                      &nbsp;&nbsp; Page orientation
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClose}>
                      <TableChartOutlinedIcon />
                      &nbsp;&nbsp; Table
                    </MenuItem>

                    <MenuItem onClick={handleClose}>
                      <BrokenImageOutlinedIcon />
                      &nbsp;&nbsp; Image
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <HorizontalRuleOutlinedIcon />
                      &nbsp;&nbsp; Border & lines
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClose}>
                      <FormatClearOutlinedIcon />
                      &nbsp;&nbsp; Clear formatting
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
