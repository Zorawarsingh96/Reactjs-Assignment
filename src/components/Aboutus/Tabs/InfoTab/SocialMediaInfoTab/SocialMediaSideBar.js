import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import IconButton from '@mui/material/IconButton';

const style = {
    position: 'absolute',
    top: '50%',
    left: '85%',
    height: '100vh',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
};

export default function SocialMediaSideBar(props) {
    return (
        <div>
            <Modal open={props.showSocialMedia} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h3" component="h2">
                        <IconButton className="contact-modal-close-btn" id="spcialmedia" onClick={(e) => props.showSocialMediaAndLinks(e)}>
                            <KeyboardBackspaceIcon />
                        </IconButton>
                        <b>Social Media & Links</b>
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Please provide link to the socail media accounts and website of company
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Instagram
                            <TextField variant="outlined" placeholder="eg. www.instagram.com/companyname" fullWidth />
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Facebook
                            <TextField variant="outlined" placeholder="eg. www.facebook.com/companyname" fullWidth />
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Twitter
                            <TextField variant="outlined" placeholder="eg. www.twitter.com/companyname" fullWidth />
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Website
                            <TextField variant="outlined" placeholder="eg. www.companyname.com" fullWidth />
                        </Typography>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}
