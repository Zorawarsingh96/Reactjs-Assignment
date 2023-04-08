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
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

export default function StatementOfCompanyCard(props:any) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined" style={{height: '24vh'}}>
      <CardContent>
      <Typography variant="h6" component="div">
      <Grid container spacing={1}>
                  <Grid item xs={10}>
                     <FormatQuoteIcon color="disabled"  fontSize="small"/><b>Statemet</b>
                  </Grid>
                  <Grid item xs={1}>
                  <Button color="error" id="statements" onClick={props.showStatemetsSection}>
                      <Icon as={MdModeEditOutline} />
                  </Button>
                  </Grid>
                  </Grid>
        

      </Typography>
      <Typography variant="body2">
      <Grid container spacing={1}>
        <Grid item xs={10}>
        You think it we link it
        </Grid>
        <Grid item xs={1}>
           <p style={{color: 'red'}}>+{props.statementsCount}</p>
        </Grid>
      </Grid>
          
      </Typography>
      
    </CardContent>
      </Card>
    </Box>
  );
}