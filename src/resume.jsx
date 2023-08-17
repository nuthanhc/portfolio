import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Resume from './images/resume.jpg';
import './Main.css';

export default function MaxWidthDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = Resume;
    link.download = 'resume.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        RESUME
      </Button>
      <Dialog
        fullWidth='md' // 'lg' is not a valid value, use true or false
        maxWidth='md' // Disable the maximum width limit
        open={open}
        onClose={handleClose}
      >
        <DialogContent className="dialog-content">
          <img src={Resume} alt="" />
        </DialogContent>
        <DialogActions>
          <button className="dialog-close-button" onClick={handleSave}>Save</button>
          <button className="dialog-close-button" onClick={handleClose}>Close</button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
