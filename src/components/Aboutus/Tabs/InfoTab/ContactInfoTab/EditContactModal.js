import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { colorBrewer } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import IconButton from '@mui/material/IconButton';
import './contact.css';
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

export default function EditContactModal(props) {
    return (
        <div>
            <Modal open={props.openEditPhoneEmailPopUp} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h3" component="h2">
                        <IconButton className="edit-contact-back-btn" onClick={(event) => props.showEditPhoneAndEmail(null, event)}>
                            <KeyboardBackspaceIcon />
                        </IconButton>

                        <b>Contacts</b>
                    </Typography>
                    <Typography id="modal-modal-title" variant="h6" component="h2" className="edit-contact-subheading">
                        Please provide the company's email & contacts
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {props.emailInputField.map((input, index) => {
                            return (
                                <div key={index}>
                                    <b>Email ID</b>
                                    <TextField
                                        id="email"
                                        name="email"
                                        placeholder="eg, abc@gmail.com"
                                        defaultValue={input.email}
                                        onChange={(event) => props.handleFormChange(index, event)}
                                        fullWidth
                                    />
                                </div>
                            );
                        })}
                        <Button variant="contained" id="email" className="edit-contact-addmore" onClick={(event) => props.addFields(event)}>
                            <ControlPointIcon />
                            Add More
                        </Button>
                        {props.phInputField.map((input, index) => {
                            return (
                                <div key={index}>
                                    <b>Contact Number</b>
                                    <TextField
                                        id="phNo"
                                        name="phNo"
                                        type="number"
                                        placeholder="eg, 85123456"
                                        defaultValue={input.phno}
                                        onChange={(event) => props.handleFormChange(index, event)}
                                        fullWidth
                                    />
                                </div>
                            );
                        })}
                        <Typography sx={{ mb: 5.5 }}>
                            <Button
                                variant="contained"
                                id="phno"
                                className="edit-contact-addmore"
                                onClick={(event) => props.addFields(event)}
                            >
                                <ControlPointIcon />
                                Add More
                            </Button>
                        </Typography>
                        <Typography>
                            <Button
                                variant="contained"
                                name="emailAndPhone"
                                className="edit-contact-save-btn"
                                onClick={(event) => props.showEditPhoneAndEmail(null, event)}
                            >
                                Save
                            </Button>
                        </Typography>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}
