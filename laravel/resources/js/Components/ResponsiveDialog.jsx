import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import InputError from '@/Components/InputError';

export default function ResponsiveDialog({ openErrors, setOpenErrors, status, errors }) {
  const [open, setOpen] = React.useState(false);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
    setOpenErrors(true)
  };

  const handleClose = () => {
    setOpen(false);
    setOpenErrors(false)
  };

  React.useEffect(() => {
    if (Object.keys(errors).length !== 0 || status !== null) {
       setOpen(true);
       //console.log(Object.keys(errors).length);
    }
    //console.log(status);
    // console.log(Object.keys(errors).length);
   }, []); // Empty dependency array ensures this runs only once when the component mounts
    //console.log(errors);
  return (
    <React.Fragment>
      <Dialog
        fullScreen={fullScreen}
        open={openErrors}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"STATUS"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {status && status.status}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
