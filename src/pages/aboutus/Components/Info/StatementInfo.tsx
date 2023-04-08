import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import Grid from '@mui/material/Grid';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

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


export default function StatementsSideBar(props:any) {
  return (
      <div>
      
      <Modal
        open={props.showStatement}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
         <Grid container spacing={1}>
                  <Grid item xs={10}>
                  <KeyboardBackspaceIcon id="statements" onClick={props.showStatemetsSection}/>
                   <b>Statements</b> 
                  </Grid>
                  <Grid item xs={2}>
                  <Button color="error" name="contactSideBar" onClick={event => props.showStatementsPopup(null, event)}>
                    <ControlPointIcon/> Add 
                  </Button>
                  </Grid>
          </Grid>
          
          
           
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Please provide link to socail media account and website of company
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {
              props.statements.map((values, index) =>  {
                return(
                    <Card sx={{ minWidth: 275 }} key={index}>
                    <CardContent>
                    <Grid container spacing={1}>
                        <Grid item xs={10}>
                        <FormatQuoteIcon color="disabled"  fontSize="small"/>
                         {values.name.substring(0,60) + '...'}
                        </Grid>
                        <Grid item xs={2}>
                          <DeleteIcon fontSize="small" sx={{ color: 'red' }}  id='statementDelete' onClick={event => props.constDeleteContactVal(event,index)} />
                          <EditIcon fontSize="small" sx={{ color: 'red' }}  id="contactSideBar" onClick={event => props.showStatementsPopup(index, event)}/>
                       
                        </Grid>
                    </Grid>
                    
                        
                    </CardContent>
                    </Card>
                )
              })
            }
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}