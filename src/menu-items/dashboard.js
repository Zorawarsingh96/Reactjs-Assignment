// assets
import { DashboardOutlined } from '@ant-design/icons';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PaymentsIcon from '@mui/icons-material/Payments';
import { FaHandsHelping } from 'react-icons/fa';
import { FaCubes } from 'react-icons/fa';
import { BsBoxSeamFill } from 'react-icons/bs';

// icons
const icons = {
    DashboardOutlined,
    AnnouncementIcon,
    DashboardIcon,
    PeopleIcon,
    EmojiEventsIcon,
    PaymentsIcon,
    FaHandsHelping,
    FaCubes,
    BsBoxSeamFill
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
    id: 'group-dashboard',
    title: '',
    type: 'group',
    children: [
        {
            id: 'dashboard',
            title: 'Dashboard',
            type: 'item',
            url: '/dashboard/default',
            icon: icons.DashboardIcon,
            breadcrumbs: false
        },
        {
            id: 'orders',
            title: 'Orders',
            type: 'item',
            url: '/dashboard/default',
            icon: icons.BsBoxSeamFill,
            breadcrumbs: false
        },
        {
            id: 'team',
            title: 'Team Members',
            type: 'item',
            url: '/dashboard/default',
            icon: icons.PeopleIcon,
            breadcrumbs: false
        },
        {
            id: 'partners',
            title: 'Partners',
            type: 'item',
            url: '/dashboard/default',
            icon: icons.FaHandsHelping,
            breadcrumbs: false
        },
        {
            id: 'listing',
            title: 'Product Listing',
            type: 'item',
            url: '/dashboard/default',
            icon: icons.FaCubes,
            breadcrumbs: false
        },
        {
            id: 'awards',
            title: 'Awards & Honours',
            type: 'item',
            url: '/dashboard/default',
            icon: icons.EmojiEventsIcon,
            breadcrumbs: false
        },
        {
            id: 'aboutus',
            title: 'About us',
            type: 'item',
            url: '/aboutus',
            icon: icons.AnnouncementIcon,
            breadcrumbs: false
        },
        {
            id: 'payment',
            title: 'Payment Info',
            type: 'item',
            url: '/dashboard/default',
            icon: icons.PaymentsIcon,
            breadcrumbs: false
        }
    ]
};

export default dashboard;
