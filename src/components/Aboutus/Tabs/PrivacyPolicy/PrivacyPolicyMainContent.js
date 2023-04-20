import '../TermsConditons/termscontent.css';
import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';

export const PrivacyPolicyMainContent = (props) => {
    return (
        <div className="content">
            <h2 id="first-header">Introduction</h2>
            <p>{props.dummyText}</p>
            <h2 id="second-header">Data we collect</h2>
            <p>{props.dummyText}</p>
            <h2 id="third-header">How we use your data</h2>
            <p>{props.dummyText}</p>
            <h2 id="fourth-header">How we share information</h2>
            <p>{props.dummyText}</p>
            <h2 id="fifth-header">Your choice and obligations</h2>
            <p>{props.dummyText}</p>
            <h2 id="sixth-header">Other important information</h2>
            <p>{props.dummyText}</p>
        </div>
    );
};
