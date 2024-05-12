import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import InputError from '@/Components/InputError';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useForm } from '@inertiajs/react';
import FormDialog from '../../../Components/FormDialog';
import InputFileUpload from '../../../Components/InputFileUpload';
import { router } from '@inertiajs/react'
import { createElement } from 'react';
import { createRoot } from 'react-dom/client';

export default function ShowPostForm() {

  const [open, setOpen] = React.useState(false);

  const titleInput = React.useRef();
  const descriptionInput = React.useRef();
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
      title: '',
      description: '',
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
        Show Post Form
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
           onSubmit: (event) => {
            event.preventDefault();
            console.log(data);
            put(route('api.post.create'))
            handleClose();
          },
        }}
      >
        <DialogTitle>Post</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            name="title"
            label="Post Title"
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
            label="Post Description"
            type="text"
            ref={descriptionInput}
            value={data.description}
            onChange={(e) => setData('description', e.target.value)}
            fullWidth
            variant="standard"
          />
          <InputError message={errors.description} className="mt-2" />
          <InputFileUpload
            inputRef={imageInput}
            value={data.image}
            onChange={(e) => {setData('image', e.target.value); console.log(e.target);}}
           />
           <InputError message={errors.image} className="mt-2" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Add Post</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
