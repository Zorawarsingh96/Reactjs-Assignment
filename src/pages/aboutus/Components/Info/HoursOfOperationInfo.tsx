import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
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


export default function HoursOfOperationSideBar(props:any) {
  return (
      <div>
      
      <Modal
        open={props.hoursOfOperations}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <KeyboardBackspaceIcon id="hours" onClick={props.showHoursOfOperationSideBar}/>
            <b>Hours Of Operations</b>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}