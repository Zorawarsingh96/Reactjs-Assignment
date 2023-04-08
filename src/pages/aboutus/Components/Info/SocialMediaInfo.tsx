import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField  from '@mui/material/TextField';
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


export default function SocialMediaSideBar(props:any) {
  return (
      <div>
      
      <Modal
        open={props.showSocialMedia}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <KeyboardBackspaceIcon id="social" onClick={e=> props.showSocialMediaAndLinks(e)}/>
            <b>Social Media & Links</b>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Please provide link to socail media account and website of company
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Instagram
          <TextField 
             variant="outlined" 
            placeholder='instagram'
            fullWidth
            />
            Facebook
          <TextField 
             variant="outlined" 
              placeholder='Facebook'
              fullWidth
            />
            Twitter
          <TextField 
             variant="outlined" 
              placeholder='Twitter'
              fullWidth
            />
            Website
          <TextField 
             variant="outlined" 
              placeholder='Website'
              fullWidth
            />
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}