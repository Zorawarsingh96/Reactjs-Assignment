import React from "react";
import { Menu, MenuItem, MenuButton } from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";
// import { AiFillGithub } from "react-icons/ai";
import { baseConfig } from "../../config";
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const HeaderNav = () => {
  const navigate = useNavigate();
  return (
    <>
      {baseConfig.projectLink ? (
        <div className="header-search-bar">
            <Button variant="contained" 
             color='primary'
            style={{width:"100%", backgroundColor:'black'}}><ShoppingCartIcon/> Checkout (200)</Button>
        </div>
      ) : (
        <></>
      )}

      <Menu
        menuAlign="end"
        trigger={
          <MenuButton variation="menu">
            <div className="header-avatar">
              <img alt="avatar" src={"https://i.pravatar.cc/150?img=3"}></img>
            </div>
          </MenuButton>
        }
      >
        <MenuItem onClick={() => navigate("/profile")}>Profile</MenuItem>
        <MenuItem>Settings</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default HeaderNav;
