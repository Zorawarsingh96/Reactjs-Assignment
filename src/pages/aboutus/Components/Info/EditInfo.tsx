import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
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


export default function EditSideBar(props:any) {
  return (
      <div>
      
      <Modal
        open={props.showSideMenu}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <KeyboardBackspaceIcon id="contact" onClick={props.showAndHideSideBar}/>
            <b>Contacts</b>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Please provide company email and contact
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {
            props.contact.length !== 0 ?
            props.contact.map((e,index) => {
                return(
            <Card sx={{ minWidth: 275 }} key={index}>
                <CardContent>
                    <Typography variant="body2">
                    <Grid container spacing={1}>
                      <Grid item xs={10}>
                      <PermContactCalendarIcon color="disabled"  fontSize="small"/>
                         {
                            index === 0 ? 'Sales Team': 'Marketing Team'
                         }
                      </Grid>
                      <Grid item xs={2}>
                          <DeleteIcon fontSize="small" sx={{ color: 'red' }}  name='contactDelete' onClick={event => props.constDeleteContactVal(event,index)} />
                          <EditIcon fontSize="small" sx={{ color: 'red' }}  name="emailAndPhone" onClick={event => props.showEditPhoneAndEmail(index, event)}/>
                        
                      </Grid>
                     </Grid>
                       
                       
                        
                    </Typography>
                    
                    <Typography variant="body2">
                    <MailIcon color="disabled"  fontSize="small" />
                     {e.emailId}
                    </Typography>
                    <Typography variant="body2">
                    <PhoneIcon color="disabled"  fontSize="small" />
                     {e.phNo}
                    </Typography>
                </CardContent>
            </Card>
                )
            }):
            null
            
            }
          
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }} >    
               <Button color="error"
                variant="contained"
                 style={{width: '100%'}}
                 id="contact"
                 onClick={props.showAndHideSideBar}>Save</Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}