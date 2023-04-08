import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Icon } from "@aws-amplify/ui-react";
import {
    MdModeEditOutline
  } from "react-icons/md";
import Grid from '@mui/material/Grid';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';

export default function HoursOfOperationCard(props:any) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined" style={{height: '24vh'}}>
      <CardContent>
      <Typography  sx={{ mb: 3.5 }} variant="h6" component="div">
              <Grid container spacing={1}>
                  <Grid item xs={10}>
                     <WorkHistoryIcon color="disabled"  fontSize="small"/> 
                    <b>Hours of operations</b>
                  </Grid>
                  <Grid item xs={1}>
                  <Button color="error" id="hours" onClick={props.showHoursOfOperationSideBar}>
                      <Icon as={MdModeEditOutline} />
                  </Button>
                  </Grid>
              </Grid>
       
       
      </Typography>
      <Typography variant="body2">
             Monday to Friday 9am to 6pm
      </Typography>
      {props.contactCount}
    </CardContent>
      </Card>
    </Box>
  );
}