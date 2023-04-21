// project import
import NavCard from './NavCard';
import Navigation from './Navigation';
import SimpleBar from 'components/third-party/SimpleBar';

// ==============================|| DRAWER CONTENT ||============================== //

const DrawerContent = () => (
    <SimpleBar
        sx={{
            '& .simplebar-content': {
                display: 'flex',
                flexDirection: 'column',
                marginTop: '-5%'
            }
        }}
    >
        <Navigation />
        <NavCard />
    </SimpleBar>
);

export default DrawerContent;
