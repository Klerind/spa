import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({menuItems, type, setType}) {

  const handleChange = (event) => {
    setType(event.target.value);
  };

const typesList = menuItems.map((menuItem) => <MenuItem value={menuItem.field_type_id}>{menuItem.type}</MenuItem>)

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={type}
          label="Age"
          onChange={handleChange}
        > {typesList}
        </Select>
      </FormControl>
    </Box>
  );
}
