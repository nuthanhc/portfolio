import * as React from 'react';
import { Link } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import resumeimg from './images/resume.jpg';
import './Main.css';

export default function MaxWidthDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Link onClick={handleClickOpen} style={{cursor:"pointer"}}>
        <i class="bi bi-images"></i>
      </Link>
      <Dialog
        fullWidth='md' // 'lg' is not a valid value, use true or false
        maxWidth='md' // Disable the maximum width limit
        open={open}
        onClose={handleClose}
      >
        <DialogContent className="dialog-content">
          <img src={resumeimg} alt="" loading="lazy"/>
        </DialogContent>
        <DialogActions>
          <button className="dialog-close-button" onClick={handleClose}>Close</button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
