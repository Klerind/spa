import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useForm } from '@inertiajs/react';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const widgetInput = React.useRef();

  const {
      data,
      setData,
      put,
      delete: destroy,
      processing,
      reset,
      errors,
  } = useForm({
      widget: '',
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Create Widget
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            console.log(data.widget);
            put(route('widget.sendwidgetName'))
            handleClose();
          },
        }}
      >
        <DialogTitle>New widget</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="widget"
            name="widget"
            label="Widget name"
            type="text"
            ref={widgetInput}
            value={data.widget}
            onChange={(e) => setData('widget', e.target.value)}
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Add New widget</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
