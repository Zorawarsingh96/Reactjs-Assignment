import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {
    TextAreaField,
  } from "@aws-amplify/ui-react";

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

export default function EditStements(props:any) {
  return (
    <Modal
    open={props.openEditStements}
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
            onChange={props.editStatements}
            name="statements"
            rows={6}
            />
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>  
      {
        props.tempStatementIndex !== undefined ?
             <Button 
                color="error"
                variant="contained"
                name="contactSideBar"
                style={{width: '100%'}}
                onClick={event => props.showStatementsPopup(null,event)}>Save</Button>  
                :
                <Button 
                color="error"
                variant="contained"
                name="contactSideBar"
                style={{width: '100%'}}
                onClick={props.addStatements}>Save</Button>
      }  
               
                
      </Typography>
    </Box>
  </Modal>
  );
}