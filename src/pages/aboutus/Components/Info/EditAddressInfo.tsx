import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '85%',
  height: '100vh',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export default function EditAddressSideBar(props:any) {
  return (
      <div>
      
      <Modal
        open={props.showAddressMenu}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <KeyboardBackspaceIcon id="address" onClick={props.showAddressSideMenu}/>
            <b>Address</b>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <TextField
              id="specificAddress"
              label='Floor No./Office Name'
              onChange={props.EditAddressVaalues}
              fullWidth
            />
            <TextField
              id="locality"
              label='Area/Locality'
              onChange={props.EditAddressVaalues}
              fullWidth
            />
            <TextField
              id="nearestLandMark"
              label='Nearest Landmark'
              onChange={props.EditAddressVaalues}
              fullWidth
            />
            <TextField
              id="city"
              label='Town/City'
              onChange={props.EditAddressVaalues}
              fullWidth
            />
            <TextField
              id="city"
              label='City'
              onChange={props.EditAddressVaalues}
              fullWidth
            />
            <TextField
              id="pincode"
              label='Pincode'
              onChange={props.EditAddressVaalues}
              fullWidth
            />
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }} >    
               <Button 
               color="error" 
               variant="contained" 
               style={{width: '100%'}} 
               id="address"
               onClick={props.showAddressSideMenu}>Save</Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}