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
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function AddressCard(props:any) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined" style={{height: '24vh'}}>
      <CardContent>
      <Typography variant="h6" component="div" sx={{ mb: 3.5 }}>
              <Grid container spacing={1}>
                  <Grid item xs={10}>
                  <LocationOnIcon color="disabled"  fontSize="small"/><b>{props.address}</b>
                  </Grid>
                  <Grid item xs={1}>
                    <Button color="error" id="address" onClick={props.showAddressSideMenu}>
                        <Icon as={MdModeEditOutline} />
                    </Button>
                  </Grid>
               </Grid>
        

      </Typography>
      <Typography variant="body2">
        {props.addressStates.specificAddress} {props.addressStates.locality} {props.addressStates.nearestLandMark} {props.addressStates.city} {props.addressStates.pincode}
      </Typography>
      {props.contactCount}
    </CardContent>
      </Card>
    </Box>
  );
}