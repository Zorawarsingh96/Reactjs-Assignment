/*eslint-disable*/
import { Fragment } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
};

export function BasicModal(props) {
    return (
        <Fragment>
            <Modal open={props.basicModal} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Text in a modal
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                <TextField
                                    id="simple-text"
                                    label="Multiline"
                                    multiline
                                    rows={6}
                                    defaultValue={props.findWhichText === 'terms' ? props.tempText2 : props.tempText}
                                    onChange={props.handleAndSaveChanges}
                                    fullWidth
                                />
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button
                                color="error"
                                variant="contained"
                                id="saveSimpleChanges"
                                name="saveSimpleChanges"
                                style={{ width: '100%' }}
                                onClick={e => props.handleAndSaveChanges(e, props.tempText)}
                            >
                                Save
                            </Button>
                        </CardActions>
                    </Card>
                </Box>
            </Modal>
        </Fragment>
    );
}
