import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function Font() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        style={{ backgroundColor: ' background-color: rgb(238, 244, 248);', color: 'black' }}

      
      >
        Font
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
      <MenuItem onClick={handleClose}>Arial</MenuItem>
        <MenuItem onClick={handleClose}>Lora</MenuItem>
        <MenuItem onClick={handleClose}>font1</MenuItem>
        <MenuItem onClick={handleClose}>font2</MenuItem>
        <MenuItem onClick={handleClose}>font3</MenuItem>
        <MenuItem onClick={handleClose}>font4</MenuItem>
        <MenuItem onClick={handleClose}>font5</MenuItem>
        <MenuItem onClick={handleClose}>font6</MenuItem>
      </Menu>
    </div>
  );
}