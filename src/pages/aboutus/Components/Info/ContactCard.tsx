import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Icon } from "@aws-amplify/ui-react";
import {
    MdModeEditOutline,
  } from "react-icons/md";
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import Grid from '@mui/material/Grid';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';

export default function OutlinedCard(props:any) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined" style={{height: '24vh'}}>
      <CardContent>
        {
          props.contactCount !== 0 ?
          <div>
            <Typography  sx={{ mb: 3.5 }} variant="h6" component="div">
                <Grid container spacing={1}>
                  <Grid item xs={10}>
                      <PermContactCalendarIcon color="disabled"  fontSize="small"/>
                      <b>
                      {props.contactTile}
                      </b> 
                  </Grid>
                  <Grid item xs={1}>
                    <Button color="error" id="contact" onClick={props.showAndHideSideBar}>
                          <Icon as={MdModeEditOutline} />
                    </Button>
                  </Grid>
                </Grid> 
              </Typography>
              <Typography variant="body2">
              <Grid container spacing={1}>
                  <Grid item xs={11}>
                    <MailIcon color="disabled"  fontSize="small" /> <b>{props.contact.emailId}</b>
                  </Grid>
                  <Grid item xs={1}>
                  <p style={{color: 'red'}}>+{props.contactCount}</p>
                  </Grid>
               </Grid>
              </Typography>
              <Typography variant="body2">
              <PhoneIcon color="disabled"  fontSize="small" /> 
              <b>
                {props.contact.phNo}
              </b>
              </Typography>
              
          </div>
          :<Typography variant="h5" component="div">
              No values to show
          </Typography>
        }
      
    </CardContent>
      </Card>
    </Box>
  );
}