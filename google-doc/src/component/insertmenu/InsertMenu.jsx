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
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import TableChartOutlinedIcon from "@mui/icons-material/TableChartOutlined";
import DnsOutlinedIcon from "@mui/icons-material/DnsOutlined";
import InsertChartOutlinedOutlinedIcon from "@mui/icons-material/InsertChartOutlinedOutlined";
import HorizontalRuleOutlinedIcon from "@mui/icons-material/HorizontalRuleOutlined";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import DatasetLinkedOutlinedIcon from "@mui/icons-material/DatasetLinkedOutlined";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";
import NotesOutlinedIcon from "@mui/icons-material/NotesOutlined";
import PostAddOutlinedIcon from "@mui/icons-material/PostAddOutlined";
import EuroSymbolOutlinedIcon from "@mui/icons-material/EuroSymbolOutlined";
import EmojiSymbolsOutlinedIcon from "@mui/icons-material/EmojiSymbolsOutlined";
import DevicesOtherOutlinedIcon from "@mui/icons-material/DevicesOtherOutlined";
import CalendarViewDayOutlinedIcon from "@mui/icons-material/CalendarViewDayOutlined";
import TagOutlinedIcon from "@mui/icons-material/TagOutlined";
import InsertPageBreakOutlinedIcon from "@mui/icons-material/InsertPageBreakOutlined";
import InsertLinkOutlinedIcon from "@mui/icons-material/InsertLinkOutlined";

export default function InsertMenu() {
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
          Insert
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
                      <ImageOutlinedIcon />
                      &nbsp;&nbsp; Image
                    </MenuItem>

                    <MenuItem onClick={handleClose}>
                      <TableChartOutlinedIcon />
                      &nbsp;&nbsp; Table
                    </MenuItem>

                    <MenuItem onClick={handleClose}>
                      <DnsOutlinedIcon />
                      &nbsp;&nbsp; Drawing
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <InsertChartOutlinedOutlinedIcon />
                      &nbsp;&nbsp; Chart
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <HorizontalRuleOutlinedIcon />
                      &nbsp;&nbsp; Horizontal line
                    </MenuItem>

                    <MenuItem onClick={handleClose}>
                      <EmojiEmotionsOutlinedIcon />
                      &nbsp;&nbsp; Emoji
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <DatasetLinkedOutlinedIcon />
                      &nbsp;&nbsp; Smart Chips
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <ArrowDropDownCircleOutlinedIcon />
                      &nbsp;&nbsp; Dropdown
                    </MenuItem>

                    <MenuItem onClick={handleClose}>
                      <NotesOutlinedIcon />
                      &nbsp;&nbsp; Footnote
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClose}>
                      <PostAddOutlinedIcon />
                      &nbsp;&nbsp; Building blocks
                    </MenuItem>
                    <Divider />

                    <MenuItem onClick={handleClose}>
                      <EuroSymbolOutlinedIcon />
                      &nbsp;&nbsp; Special Characters
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <EmojiSymbolsOutlinedIcon />
                      &nbsp;&nbsp; Equation
                    </MenuItem>
                    <Divider />

                    <MenuItem onClick={handleClose}>
                      <DevicesOtherOutlinedIcon />
                      &nbsp;&nbsp; Watermark
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <CalendarViewDayOutlinedIcon />
                      &nbsp;&nbsp; Headers & Footers
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <TagOutlinedIcon />
                      &nbsp;&nbsp; Page numbers
                    </MenuItem>

                    <MenuItem onClick={handleClose}>
                      <InsertPageBreakOutlinedIcon />
                      &nbsp;&nbsp; Break
                    </MenuItem>
                    <Divider />

                    <MenuItem onClick={handleClose}>
                      <InsertLinkOutlinedIcon />
                      &nbsp;&nbsp; Link
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
