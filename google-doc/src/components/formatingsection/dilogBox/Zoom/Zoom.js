import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function BasicMenu() {
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
        Zoom
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
      <MenuItem onClick={handleClose}>Fit</MenuItem>
        <MenuItem onClick={handleClose}>50%</MenuItem>
        <MenuItem onClick={handleClose}>75%</MenuItem>
        <MenuItem onClick={handleClose}>90%</MenuItem>
        <MenuItem onClick={handleClose}>100%</MenuItem>
        <MenuItem onClick={handleClose}>1255</MenuItem>
        <MenuItem onClick={handleClose}>150%</MenuItem>
        <MenuItem onClick={handleClose}>200%</MenuItem>
      </Menu>
    </div>
  );
}