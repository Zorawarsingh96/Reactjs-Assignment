import * as React from 'react';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {
    TextAreaField,
  } from "@aws-amplify/ui-react";
import Button from '@mui/material/Button';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props:any) {

  return (
    <div>
      <Modal
        open={props.openEditBasicPhrase}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>    
        <TextAreaField
          label="Message"
          value={props.simplePhrase}
          onChange={props.editSimpleOne}
          name="message"
          rows={6}
        />
          </Typography>
          <Typography>
          <Button 
                color="error"
                variant="contained"
                id="basicmodal"
                name="basicmodal"
                style={{width: '100%'}}
                onClick={props.openBasicModal}>Save</Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}