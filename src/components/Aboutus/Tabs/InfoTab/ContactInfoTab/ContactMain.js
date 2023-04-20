import { Fragment } from 'react';
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
import IconButton from '@mui/material/IconButton';
import CardHeader from '@mui/material/CardHeader';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { RiDeleteBin6Fill } from 'react-icons/ri';
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

export function ContactModal(props) {
    return (
        <Fragment>
            <Modal open={props.showContactModal} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h3" component="h2">
                        <IconButton className="contact-modal-close-btn" id="contact" onClick={props.showAndHideSideBar}>
                            <KeyboardBackspaceIcon />
                        </IconButton>

                        <b>Contacts</b>
                    </Typography>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Please provide the company's email & contacts
                    </Typography>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {props.contactVals.map((vals, index) => (
                            <Card className="contact-modal-card-gap">
                                <CardHeader
                                    avatar={
                                        <img
                                            src={process.env.PUBLIC_URL + '/app-icon-new-contact-32.png'}
                                            alt="logo"
                                            width="100%"
                                            height="32vh"
                                            color="grey"
                                        />
                                    }
                                    action={
                                        <>
                                            <IconButton
                                                className="contact-modal-icon-btn-color"
                                                aria-label="upload picture"
                                                component="label"
                                                name="contactDelete"
                                                onClick={(event) => props.constDeleteContactVal(event, index)}
                                            >
                                                <RiDeleteBin6Fill />
                                            </IconButton>
                                            <IconButton
                                                className="contact-modal-icon-btn-color"
                                                aria-label="upload picture"
                                                component="label"
                                                name="emailAndPhone"
                                                onClick={(event) => props.showEditPhoneAndEmail(index, event)}
                                            >
                                                <EditIcon fontSize="small" />
                                            </IconButton>
                                        </>
                                    }
                                    title={
                                        index === 0 ? (
                                            <b className="contact-modal-heading">Sales Team</b>
                                        ) : (
                                            <b className="contact-modal-heading">Marketing Team</b>
                                        )
                                    }
                                />
                                <CardHeader
                                    className="contact-modal-card-internal-gap"
                                    avatar={<EmailIcon color="disabled" fontSize="small" className="contact-modal-card-icons" />}
                                    title={<b>{vals.emailId}</b>}
                                />
                                <CardHeader
                                    className="contact-modal-card-internal-gap"
                                    avatar={<LocalPhoneIcon color="disabled" fontSize="small" className="contact-modal-card-icons" />}
                                    title={<b>{vals.phNo}</b>}
                                />
                            </Card>
                        ))}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <Button variant="contained" className="contact-modal-save-btn" id="contact" onClick={props.showAndHideSideBar}>
                            Save
                        </Button>
                    </Typography>
                </Box>
            </Modal>
        </Fragment>
    );
}
