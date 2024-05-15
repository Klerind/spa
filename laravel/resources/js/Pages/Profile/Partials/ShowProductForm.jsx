import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useForm } from '@inertiajs/react';
import FormDialog from '../../../Components/FormDialog';
import TextInput from '../../../Components/TextInput';
import InputLabel from '../../../Components/InputLabel';
import InputFileUpload from '../../../Components/InputFileUpload';
import { router } from '@inertiajs/react'
import { createElement } from 'react';
import { createRoot } from 'react-dom/client';

export default function ShowProductForm() {

  const [open, setOpen] = React.useState(false);

  const nameInput = React.useRef();
  const descriptionInput = React.useRef();
  const priceInput = React.useRef();
  const imageInput = React.useRef();

  const {
      data,
      setData,
      put,
      delete: destroy,
      processing,
      reset,
      errors,
  } = useForm({
      name: '',
      description: '',
      price: '',
      image: '',
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  //const root = createRoot(document.getElementById('root'));
   //const types3 = put(route('api.types'))
   //const types3 = router.get('api/types')

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Show Product Form
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
           onSubmit: (event) => {
            event.preventDefault();
            console.log(data);
            //put(route('widget.sendwidgetName'))
            handleClose();
          },
        }}
      >
        <DialogTitle>Product</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="name"
            label="Product Name"
            type="text"
            ref={nameInput}
            value={data.name}
            onChange={(e) => setData('name', e.target.value)}
            fullWidth
            variant="standard"
          />
          <TextField
            required
            margin="dense"
            id="description"
            name="description"
            label="Product Description"
            type="text"
            ref={descriptionInput}
            value={data.description}
            onChange={(e) => setData('description', e.target.value)}
            fullWidth
            variant="standard"
          />
          <InputLabel value='Product Price' />
          <TextInput
            type='number'
            ref={priceInput}
            value={data.price}
            onChange={(e) => {setData('price', e.target.value)
          console.log(e)}}
           />
          <InputFileUpload
            inputRef={imageInput}
            value={data.image}
            onChange={(e) => {setData('image', e.target.files[0])
          console.log(e.target)}}
           />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Add Product</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
