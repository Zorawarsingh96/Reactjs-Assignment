// material-ui
import { Button, CardMedia, Link, Stack, Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';

// assets
import avatar from 'assets/images/users/help-icon-transparent-background-14.jpg';
import AnimateButton from 'components/@extended/AnimateButton';

// ==============================|| DRAWER CONTENT - NAVIGATION CARD ||============================== //

const NavCard = () => (
    <MainCard sx={{ bgcolor: 'grey.50', m: 3, marginTop: '-8%' }}>
        <Stack alignItems="center" sx={{ marginTop: '-13%' }}>
            <CardMedia component="img" image={avatar} sx={{ width: 46 }} />
            <Stack alignItems="center">
                <Typography variant="h5">Need Help?</Typography>
                <Typography variant="h6" color="secondary">
                    Our support team is <br /> <div>&nbsp; at your disposal</div>
                </Typography>
            </Stack>{' '}
            <br />
            <AnimateButton>
                <Button variant="contained" style={{ backgroundColor: 'black' }}>
                    Get Help
                </Button>
            </AnimateButton>
        </Stack>
    </MainCard>
);

export default NavCard;
