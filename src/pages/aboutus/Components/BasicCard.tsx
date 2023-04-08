import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Icon } from "@aws-amplify/ui-react";
import {
    MdModeEditOutline
  } from "react-icons/md";
import Grid from '@mui/material/Grid';

export default function BasicCard(props:any) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
          <Typography>
          
          <Grid container spacing={1}>
            <Grid item xs={11}>
            {props.simplePhrase}
            </Grid>
            <Grid item xs={1}>
              <Button color="error" id="basic" name="basic" onClick={props.openBasicModal}>
                  <Icon as={MdModeEditOutline} id="basic" name="basic"/>
                </Button>
            </Grid>
          </Grid>

          </Typography >
      </CardContent>
    </Card>
  );
}