import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
// import SvgIcon from "@material-ui/core/SvgIcon";
import Typography from "@material-ui/core/Typography";
import Icon from "../../components/Icon/Icon.jsx";
import classes from "./Navigation.module.css";

export default class Navigation extends Component {
  render() {
    return (
      <div className={classes.navigation}>
        <ul>
          <li>
            <IconButton>
              <Icon icon="Home" fill="white" />
              <Typography className={classes.navigation_title}>home</Typography>
            </IconButton>
          </li>
          <li>
            <IconButton>
              <Icon icon="Dashboard" fill="white" />
              <Typography className={classes.navigation_title}>
                dashboard
              </Typography>
            </IconButton>
          </li>
          <li>
            <IconButton>
              <Icon icon="Inbox" fill="white" />
              <Typography className={classes.navigation_title}>
                inbox
              </Typography>
            </IconButton>
          </li>
          <li>
            <IconButton>
              <Icon icon="Products" fill="white" />
              <Typography className={classes.navigation_title}>
                products
              </Typography>
            </IconButton>
          </li>
          <li>
            <IconButton>
              <Icon icon="Invoices" fill="white" />
              <Typography className={classes.navigation_title}>
                invoices
              </Typography>
            </IconButton>
          </li>
          <li>
            <IconButton>
              <Icon icon="Customers" fill="white" />
              <Typography className={classes.navigation_title}>
                customers
              </Typography>
            </IconButton>
          </li>
          <li>
            <IconButton>
              <Icon icon="Chut_Room" fill="white" />
              <Typography className={classes.navigation_title}>
                chut room
              </Typography>
            </IconButton>
          </li>
          <li>
            <IconButton>
              <Icon icon="Calendar" fill="white" />
              <Typography className={classes.navigation_title}>
                calendar
              </Typography>
            </IconButton>
          </li>
          <li>
            <IconButton>
              <Icon icon="Help_center" fill="white" />
              <Typography className={classes.navigation_title}>
                help center
              </Typography>
            </IconButton>
          </li>
          <li>
            <IconButton>
              <Icon icon="Settings" fill="white" />
              <Typography className={classes.navigation_title}>
                settings
              </Typography>
            </IconButton>
          </li>
        </ul>
      </div>
    );
  }
}
