import './termscontent.css';
import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';

export const TermsConditonMainContent = (props) => {
    return (
        <div className="content">
            <h2 id="first-header">Agreement</h2>
            <p>{props.dummyText1}</p>
            <h2 id="second-header">Service & Paid Subscription</h2>
            <p>{props.dummyText1}</p>
            <h2 id="third-header">Rights & Laws</h2>
            <p>{props.dummyText1}</p>
            <h2 id="fourth-header">3rd Party Appication</h2>
            <p>{props.dummyText1}</p>
            <h2 id="fifth-header">Right your grant us</h2>
            <p>{props.dummyText1}</p>
        </div>
    );
};
