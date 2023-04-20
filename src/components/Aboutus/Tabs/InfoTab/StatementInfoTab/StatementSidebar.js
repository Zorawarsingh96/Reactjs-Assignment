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
import IconButton from '@mui/material/IconButton';
import CardHeader from '@mui/material/CardHeader';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { FaQuoteLeft } from 'react-icons/fa';
import './statement.css';

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

export default function StatementsSideBar(props) {
    return (
        <div>
            <Modal open={props.showStatement} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h3" component="h2">
                        <Grid container spacing={1}>
                            <Grid item xs={10}>
                                <IconButton className="contact-modal-close-btn" id="statement" onClick={props.showStatemetsSection}>
                                    <KeyboardBackspaceIcon />
                                </IconButton>
                                <b>Statements</b>
                            </Grid>
                            <Grid item xs={2}>
                                <Button color="error" name="contactSideBar" onClick={(event) => props.showStatementsPopup(null, event)}>
                                    <ControlPointIcon /> Add
                                </Button>
                            </Grid>
                        </Grid>
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Write down the statement of the company in to convey your vision to the potential customer
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {props.statements.map((values, index) => {
                            return (
                                <Card sx={{ minWidth: 275 }} key={index} className="card-margin">
                                    <CardHeader
                                        avatar={<FaQuoteLeft className="card-statment-icon" disabled />}
                                        action={
                                            <>
                                                <IconButton
                                                    className="card-margin-icon-btn-color"
                                                    component="label"
                                                    id="statementDelete"
                                                    onClick={(event) => props.constDeleteContactVal(event, index)}
                                                >
                                                    <RiDeleteBin6Fill />
                                                </IconButton>
                                                <IconButton
                                                    className="card-margin-icon-btn-color"
                                                    component="label"
                                                    id="contactSideBar"
                                                    onClick={(event) => props.showStatementsPopup(index, event)}
                                                >
                                                    <EditIcon fontSize="small" />
                                                </IconButton>
                                            </>
                                        }
                                    />
                                    <CardContent className="card-margin-text">
                                        <Grid container spacing={1}>
                                            <Grid item xs={10}>
                                                <b>
                                                    eg.{''} {values.name.substring(0, 120) + '.'}
                                                </b>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}
