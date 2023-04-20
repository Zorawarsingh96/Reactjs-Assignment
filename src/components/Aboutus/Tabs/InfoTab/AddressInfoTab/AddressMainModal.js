import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import './address.css';
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

export function AddressMainModal(props) {
    console.log('Address');
    return (
        <>
            <Modal open={props.showAddressMenu} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h3" component="h2">
                        <IconButton className="address-modal-close-btn" id="address" onClick={props.showAddressSideMenu}>
                            <KeyboardBackspaceIcon />
                        </IconButton>
                        <b>Address</b>
                    </Typography>
                    <Typography id="modal-modal-description1" sx={{ mt: 2 }}>
                        <Typography sx={{ mt: 2 }}>
                            <TextField
                                id="specificAddress"
                                label="Floor Number / Block no / Office Name"
                                onChange={props.EditAddressVaalues}
                                fullWidth
                            />
                        </Typography>
                        <Typography sx={{ mt: 2 }}>
                            <TextField id="locality" label="Area / Locality" onChange={props.EditAddressVaalues} fullWidth />
                        </Typography>
                        <Typography sx={{ mt: 2 }}>
                            <TextField id="nearestLandMark" label="Nearest Landmark" onChange={props.EditAddressVaalues} fullWidth />
                        </Typography>
                        <Typography sx={{ mt: 2 }}>
                            <TextField id="city" label="Town / City" onChange={props.EditAddressVaalues} fullWidth />
                        </Typography>
                        <Typography sx={{ mt: 2 }}>
                            <TextField id="city" label="City" onChange={props.EditAddressVaalues} fullWidth />
                        </Typography>
                        <Typography sx={{ mt: 2 }}>
                            <TextField id="pincode" type="number" label="Pincode" onChange={props.EditAddressVaalues} fullWidth />
                        </Typography>
                    </Typography>
                    <Typography id="modal-modal-description2" className="address-modal-save-btn">
                        <Button
                            className="address-modal-icon-btn-color"
                            variant="contained"
                            id="address"
                            onClick={props.showAddressSideMenu}
                            fullWidth
                        >
                            Save
                        </Button>
                    </Typography>
                </Box>
            </Modal>
        </>
    );
}
