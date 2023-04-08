import React from "react";
import PeopleIcon from '@mui/icons-material/People';
import HandshakeIcon from '@mui/icons-material/Handshake';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PaymentsIcon from '@mui/icons-material/Payments';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import ViewInArIcon from '@mui/icons-material/ViewInAr';

export const baseConfig = {
  projectLink: "/", // GitHub link in the navbar
  docsRepositoryBase: "", // base URL for the docs repository
  titleSuffix: "",
  search: true,
  header: true,
  headerText: "Logo",
  footer: true,
  footerText: (
    <>
      <span>
        © MIT {new Date().getFullYear()}, Made with ❤️ by {""}
        <a href="https://github.com/mrtzdev" target="_blank" rel="noreferrer">
          Mrtzdev
        </a>
      </span>
    </>
  ),

  logo: (
    <>
      <img
        src={process.env.PUBLIC_URL + "/logo.png"}
        alt="logo"
        width="88%"
        height="50vh"
      />
    </>
  ),
};

/// Navigation sidebar
export const appNavs = [
  {
    eventKey: "dashboard",
    icon: <DashboardIcon />,
    title: "Dashboard",
    to: "/",
  },

  // {
  //   eventKey: "tables",
  //   icon: <Icon as={MdOutlineTableChart} />,
  //   title: "Tables",
  //   to: "/tables",
  //   children: [
  //     {
  //       eventKey: "basic-table",
  //       title: "Basic Table",
  //       to: "/tables",
  //     },
  //     {
  //       eventKey: "users",
  //       title: "Users Table",
  //       to: "/users-table",
  //     },
  //   ],
  // },
  {
    eventKey: "profile",
    icon: <Inventory2Icon/>,
    title: "Orders",
    to: "/profile1",
  },
  {
    eventKey: "profile",
    icon: <PeopleIcon/>,
    title: "Team Members",
    to: "/profile2",
  },
  {
    eventKey: "profile",
    icon: <HandshakeIcon />,
    title: "Partners",
    to: "/profile3",
  },
  {
    eventKey: "profile",
    icon: <ViewInArIcon />,
    title: "Product Listings",
    to: "/profile4",
  },
  {
    eventKey: "profile",
    icon: <EmojiEventsIcon />,
    title: "Awards & Honours",
    to: "/profile5",
  },
 
  {
    eventKey: "aboutus",
    icon: <AnnouncementIcon/>,
    title: "About us",
    to: "/aboutus",
  },
  {
    eventKey: "profile",
    icon: <PaymentsIcon/>,
    title: "Payment Info",
    to: "/profile6",
  },
];
