import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import RoomIcon from '@mui/icons-material/Room';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import { BiLinkAlt } from 'react-icons/bi';
import { FaQuoteLeft } from 'react-icons/fa';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';
import FacebookIcon from '@mui/icons-material/Facebook';
import { AiFillInstagram } from 'react-icons/ai';
import { FaInstagram } from 'react-icons/fa';
import InstagramIcon from '@mui/icons-material/Instagram';
import { BsFacebook } from 'react-icons/bs';
import './interactiveList.css';

export default function BasicCard(props) {
    return (
        <Card sx={{ maxWidth: 275, height: '24vh' }}>
            <CardHeader
                avatar={
                    props.basicName === 'contact' ? (
                        <img
                            src={process.env.PUBLIC_URL + '/app-icon-new-contact-32.png'}
                            alt="logo"
                            width="100%"
                            height="32vh"
                            color="#DCDCDC"
                        />
                    ) : props.basicName === 'address' ? (
                        <RoomIcon color="disabled" />
                    ) : props.basicName === 'hofos' ? (
                        <WorkHistoryIcon color="disabled" />
                    ) : props.basicName === 'spcialmedia' ? (
                        <BiLinkAlt className="card-social-icon" />
                    ) : props.basicName === 'statement' ? (
                        <FaQuoteLeft className="card-statment-icon" disabled />
                    ) : null
                }
                action={
                    <IconButton color="error" id={props.basicName} name={props.basicName} onClick={props.showAndHideSideBar}>
                        <EditIcon fontSize="small" />
                    </IconButton>
                }
                title={
                    <Typography sx={{ fontSize: 17 }} className="title-list">
                        <div>
                            {props.basicName === 'contact' ? (
                                <b> Contacts </b>
                            ) : props.basicName === 'address' ? (
                                <b> Address </b>
                            ) : props.basicName === 'hofos' ? (
                                <b> Hours of operations </b>
                            ) : props.basicName === 'spcialmedia' ? (
                                <b> Social Media & Links </b>
                            ) : props.basicName === 'statement' ? (
                                <b> Statements </b>
                            ) : null}
                        </div>
                    </Typography>
                }
            />
            <CardContent>
                <Typography sx={{ mb: 0.5 }} className="card-mainright-side">
                    <CardHeader
                        avatar={props.basicName === 'contact' ? <EmailIcon color="disabled" /> : null}
                        action={
                            props.basicName === 'contact' ? (
                                <div style={{ marginTop: '303%' }}>
                                    <Avatar aria-label="recipe" sx={{ bgcolor: '#FBCEB1' }} className="card-mainright-side-contact-avatar">
                                        <b className="card-mainright-side-contact-avatar-data">+{props.length}</b>
                                    </Avatar>
                                </div>
                            ) : props.basicName === 'statement' ? (
                                <div style={{ marginTop: '303%' }}>
                                    <Avatar
                                        aria-label="recipe"
                                        sx={{ bgcolor: '#FBCEB1' }}
                                        className="card-mainright-side-statement-avatar"
                                    >
                                        <b className="card-mainright-side-contact-avatar-data">+{props.statements}</b>
                                    </Avatar>
                                </div>
                            ) : null
                        }
                        title={
                            props.basicName === 'contact' ? (
                                <div className="card-contact-title">
                                    <b> {props.topContactVals.emailId} </b>
                                </div>
                            ) : props.basicName === 'address' ? (
                                <Typography color="text.secondary" className="card-address-title">
                                    {' '}
                                    {props.addressStates.specificAddress}, {props.addressStates.locality},{' '}
                                    {props.addressStates.nearestLandMark}-{props.addressStates.pincode}, {props.addressStates.city},{' '}
                                    {props.addressStates.country}
                                </Typography>
                            ) : props.basicName === 'hofos' ? (
                                <Typography color="text.secondary" className="card-address-title">
                                    Monday to Friday - 09:00 Am to 06:00 Pm
                                </Typography>
                            ) : props.basicName === 'spcialmedia' ? (
                                <div className="card-social-media-top">
                                    <IconButton disabled>
                                        <span>
                                            <LanguageIcon className="card-social-media-icons" />
                                            <br /> <b className="card-social-media-icon-fonts">Website</b>
                                        </span>
                                    </IconButton>
                                    <IconButton disabled className="card-social-distance">
                                        <span>
                                            <InstagramIcon className="card-social-media-icons" />
                                            <br /> <b className="card-social-media-icon-fonts">Instagram</b>
                                        </span>
                                    </IconButton>
                                    <IconButton disabled className="card-social-distance">
                                        <span>
                                            <FacebookIcon className="card-social-media-icons" />
                                            <br /> <b className="card-social-media-icon-fonts">Facebook</b>
                                        </span>
                                    </IconButton>

                                    <IconButton disabled className="card-social-distance">
                                        <span>
                                            <TwitterIcon className="card-social-media-icons" />
                                            <br /> <b className="card-social-media-icon-fonts">Twitter</b>
                                        </span>
                                    </IconButton>
                                </div>
                            ) : props.basicName === 'statement' ? (
                                <Typography color="text.secondary" className="card-social-media-top">
                                    {' '}
                                    You think it we link it{' '}
                                </Typography>
                            ) : null
                        }
                    />
                </Typography>
                <Typography sx={{ mb: 0.5 }} className="card-contact-title-thirld-row">
                    <CardHeader
                        avatar={props.basicName === 'contact' ? <LocalPhoneIcon color="disabled" /> : null}
                        title={
                            props.basicName === 'contact' ? (
                                <div
                                    style={{
                                        marginLeft: '-5%'
                                    }}
                                >
                                    <b> {props.topContactVals.phNo} </b>
                                </div>
                            ) : null
                        }
                    />
                </Typography>
            </CardContent>
            {/* <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions> */}
        </Card>
    );
}
