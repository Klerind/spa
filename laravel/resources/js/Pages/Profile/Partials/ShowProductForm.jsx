import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputError from '@/Components/InputError';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useForm, usePage } from '@inertiajs/react';
import FormDialog from '../../../Components/FormDialog';
import TextInput from '../../../Components/TextInput';
import InputLabel from '../../../Components/InputLabel';
import InputFileUpload from '../../../Components/InputFileUpload';
import ResponsiveDialog from '../../../Components/ResponsiveDialog';
import { createElement } from 'react';
import { createRoot } from 'react-dom/client';

export default function ShowProductForm({ status }) {

  const productErrors = usePage().props.errors;

  const [open, setOpen] = React.useState(false);
  const [openErrors, setOpenErrors] = React.useState(false);

  const titleInput = React.useRef();
  const descriptionInput = React.useRef();
  const priceInput = React.useRef();
  const imageInput = React.useRef();

  const {
      data,
      setData,
      post,
      delete: destroy,
      errors,
      processing,
      reset,
  } = useForm({
      title: '',
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
            event.preventDefault()
            post('api/product/create')
            if (Object.keys(errors).length === 0)
            {
              handleClose()
              reset()
            }
            setOpenErrors(true)
          },
        }}
      >
        <DialogTitle>Product</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            name="title"
            label="Product Name"
            type="text"
            ref={titleInput}
            value={data.title}
            onChange={(e) => setData('title', e.target.value)}
            fullWidth
            variant="standard"
          />
          <InputError message={errors.title} className="mt-2" />
          <TextField
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
          <InputError message={errors.description} className="mt-2" />
          <InputLabel value='Product Price' />
          <TextInput
            type='number'
            ref={priceInput}
            value={data.price}
            onChange={(e) => {setData('price', e.target.value)}}
           />
          <InputError message={errors.price} className="mt-2" />
          <InputFileUpload
            inputRef={imageInput}
            value={data.image}
            onChange={(e) => {setData('image', e.target.files[0])}}
           />
          <InputError message={errors.image} className="mt-2" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Add Product</Button>
        </DialogActions>
      </Dialog>
      {errors && <ResponsiveDialog
                                 openErrors={openErrors}
                                 setOpenErrors={setOpenErrors}
                                 status={status}
                                 errors={errors}
                                />}
    </React.Fragment>
  );
}
