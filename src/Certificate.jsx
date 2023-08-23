import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogTitle from '@mui/material/DialogTitle';
import CertificateImage from './images/certificate.jpg';
import './Main.css';

export default function CertificateDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <div className="internship-card" onClick={handleClickOpen}>
        <div className="card-content">
          <div className="card-details">
            <div className='content-text'>
              <h6 className="text-title">Certificate</h6>
            </div>
          </div>
          <div className="card-arrow">
            <i className="bi bi-patch-check"></i>
          </div>
        </div>
      </div>
      <Dialog
        fullWidth='md'
        maxWidth='md'
        open={open}
        onClose={handleClose}
      >
        {/* <DialogTitle>Certificate</DialogTitle> */}
        <DialogContent className="dialog-content"> 
          <img src={CertificateImage} alt="Certificate" loading="lazy"/>
        </DialogContent>
        <DialogActions>
          <button className="dialog-close-button" onClick={handleClose}>Close</button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
