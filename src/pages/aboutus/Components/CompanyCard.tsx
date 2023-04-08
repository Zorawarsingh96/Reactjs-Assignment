import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Logo from '../../../components/Logo';
import Link from '@mui/material/Link';
import VerifiedIcon from '@mui/icons-material/Verified';


export default function CompanyCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
      <Grid container spacing={2}>
        <Grid item xs={1} sm container>
              <Typography gutterBottom variant="subtitle1" component="div">
                 <Logo/>
              </Typography>
          <Grid item xs={2}>
          <Typography component="div">
                <b>A.T. Links</b> 
            </Typography>
            <Typography sx={{ mb: 1.5 }}>
                Digital Links
            </Typography>
          </Grid>
          <Grid item>
          <Typography component="div">
            <VerifiedIcon color="disabled"/>
             <Link href="#">Verified Company</Link>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
        
      </CardContent>
    </Card>
  );
}