import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import resumePdf from './pdf/resume.pdf'; 
import resume from './images/resume.png'
import './Main.css';

export default function MaxWidthDialog() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = resumePdf;
    link.download = 'resume.pdf';
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
        fullWidth={true}
        maxWidth="md"
        open={open}
        onClose={handleClose}
      >
        <DialogContent className="dialog-content">
          <img src={resume} alt="" loading="lazy"/>
        </DialogContent>
        <DialogActions>
          <button className="dialog-close-button" onClick={handleSave}>Download</button>
          <button className="dialog-close-button" onClick={handleClose}>Close</button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
