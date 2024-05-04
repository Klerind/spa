import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useForm } from '@inertiajs/react';
import BasicSelect from '../../../Components/BasicSelect';
import FormDialog from '../../../Components/FormDialog';

export default function CreateWidget() {
  const [open, setOpen] = React.useState(false);
  const [type, setType] = React.useState('');
  const widgetInput = React.useRef();
  const fieldInput = React.useRef();

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
      field: '',
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addField = () => {
    data.type = type
  };

  const types = [
    {'id': 123,
    'type': 'text'},
    {'id': 456,
    'type': 'number'},
    {'id': 789,
    'type': 'email'}
  ]

   const types3 = put(route('api.types'))
   console.log(types3);
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
          <TextField
            autoFocus
            required
            margin="dense"
            id="field"
            name="field"
            label="Field name"
            type="text"
            ref={fieldInput}
            value={data.field}
            onChange={(e) => setData('field', e.target.value)}
            fullWidth
            variant="standard"
          />
          <BasicSelect menuItems={types} type={type} setType={setType} />
          <Button onClick={addField} className="mt-6 flex justify-end">Add Field3</Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Add New widget</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
