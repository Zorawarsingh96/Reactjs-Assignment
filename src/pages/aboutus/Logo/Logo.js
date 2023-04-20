import { Fragment } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import VerifiedIcon from '@mui/icons-material/Verified';

export function LogoDetail() {
    return (
        <Fragment>
            <Grid container spacing={2}>
                <Grid item xs={1} sm container>
                    <Typography gutterBottom variant="subtitle1" component="div">
                        <img src={process.env.PUBLIC_URL + '/logo.png'} alt="logo" width="99%" height="45vh" />
                    </Typography>
                    <Grid item xs={2} style={{ marginLeft: '1%' }}>
                        <Typography component="div" variant="h4">
                            <b>A.T. Links</b>
                        </Typography>
                        <Typography sx={{ mb: 1.5 }}>Digital Links</Typography>
                    </Grid>
                    <Grid item style={{ marginLeft: '-6%' }}>
                        <Typography component="div">
                            <VerifiedIcon color="disabled" fontSize="small" />
                            <Link href="#">Verified Company</Link>
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Fragment>
    );
}
