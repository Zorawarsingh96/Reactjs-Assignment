import './content.css';
import React from 'react';
// import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';


const Content = (props:any) => {

  return (
    <div className='content'>
      <h1>
        Your Privacy Matters
        <IconButton color="error" id="privacy" name="privacy" onClick={e => props.openBasicModal(e)}>
            <EditIcon/>
        </IconButton>

      </h1>
      <h2 id='first-header'>Introduction</h2>
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
  )
}

export default Content
