import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Icon } from "@aws-amplify/ui-react";
import {
    MdModeEditOutline,
    MdLanguage,
    MdFacebook
  } from "react-icons/md";
import TwitterIcon from '@mui/icons-material/Twitter';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import { FaInstagram } from 'react-icons/fa';

export default function SocailMediaCard(props:any) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined" style={{height: '24vh'}}>
      <CardContent>
      <Typography variant="h6" component="div">
                <Grid container spacing={1}>
                  <Grid item xs={10}>
                    <InsertLinkIcon color="disabled"  fontSize="small"/>
                    <b>{props.socailMedia}</b>
                  </Grid>
                  <Grid item xs={1}>
                  <Button color="error" id="social" onClick={props.showSocialMediaAndLinks}>
                      <Icon as={MdModeEditOutline} />
                  </Button>
                  </Grid>
                </Grid>
        
        
      </Typography>
      <Typography variant="body2">
      <IconButton aria-label="delete" disabled color="primary">
          <Icon as={MdLanguage} />
      </IconButton>
      <IconButton aria-label="delete" disabled color="primary">
          <Icon as={MdFacebook} />
      </IconButton>
      <IconButton aria-label="delete" disabled color="primary">
          <TwitterIcon/>
      </IconButton>
      <IconButton aria-label="delete" disabled color="primary">
           <FaInstagram/>
      </IconButton>
      
      </Typography>
    </CardContent>
      </Card>
    </Box>
  );
}