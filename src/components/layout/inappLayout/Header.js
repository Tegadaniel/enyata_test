import { Divider, Grid } from "@mui/material";
import React from "react";
import bell from "../../../assets/bell.svg";
import account from "../../../assets/account.svg";
import threeDots from "../../../assets/threeDots.svg";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Settings from "@mui/icons-material/Settings";
import ListItemIcon from "@mui/material/ListItemIcon";
import Logout from "@mui/icons-material/Logout";

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="flex">
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="flex-start"
      >
        <div className="flex xl:flex-row xl:gap-12 cursor-pointer">
          <div className="hidden xl:flex">
            <img src={bell} className="w-5 h-5" alt="bell" />
          </div>
          <Divider
            className="hidden xl:flex"
            orientation="vertical"
            flexItem
          />

          <div className="flex xl:flex flex-row gap-3">
            <img src={account} className="w-5 h-5" alt="account" />
            <div className="hidden xl:flex md:flex">
            <p className=" font-light text-sm text-[#303B54]">John Doe</p>
            </div>
          </div>

          <div
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <img src={threeDots} className="w-5 h-5" alt="threedots" />
          </div>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              Settings
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </div>
      </Grid>
    </div>
  );
}
