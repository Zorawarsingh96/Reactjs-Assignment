import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
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


export default function EditEmailAndPhoneNumberSideBar(props:any) {
  return (
      <div>
      
      <Modal
        open={props.openEditPhoneEmailPopUp}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <KeyboardBackspaceIcon onClick={event => props.showEditPhoneAndEmail(null,event)}/>
             <b>Contacts</b>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Please provide link to socail media account and website of company
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {
                props.emailInputField.map((input,index) => {
                    return(
                     <div key={index}>
                      <b>Email Id</b>
                        <TextField
                            id="email"
                            name="email"
                            placeholder='eg, abc@gmail.com'
                            defaultValue={input.email}
                            onChange={event => props.handleFormChange(index, event)}
                            fullWidth
                            />                           
                     </div>
                    )
                })
            }
                        <Button 
                            color="error"
                            variant="contained"
                            id="email"
                            style={{width: '100%'}}
                            onClick={event => props.addFields(event)}>
                              <ControlPointIcon/>Add More
                        </Button> 
            {
                props.phInputField.map((input, index) => {
                    return(
                        <div key={index}>
                          <b>Phone Number</b>
                            <TextField
                            id="phNo"
                            name="phNo"
                            type='number'
                            placeholder='eg, 85123456'
                            defaultValue={input.phno}
                            onChange={event => props.handleFormChange(index, event)}
                            fullWidth
                            />
                        </div>
                    )
                })
            }
            <Typography  sx={{ mb: 5.5 }}>
                       <Button 
                            color="error"
                            variant="contained"
                            id="phno"
                            style={{width: '100%'}}
                            onClick={event => props.addFields(event)}><ControlPointIcon/>Add More</Button>  
            </Typography>
            <Typography>
                          <Button 
                            color="error"
                            variant="contained"
                            name="emailAndPhone"
                            style={{width: '100%'}}
                            onClick={event => props.showEditPhoneAndEmail(null,event)}>Save</Button>  
            </Typography> 
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}