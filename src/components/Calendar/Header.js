import React, { Component } from "react";
import Icon from "../../components/Icon/Icon.jsx";
// import IconButton from "@material-ui/core/IconButton";
// import SvgIcon from "@material-ui/core/SvgIcon";
// import Typography from "@material-ui/core/Typography";
import classes from "./Header.module.css";

export default class Header extends Component {
  render() {
    return (
      <div className={classes.container}>
        <div className={classes.header_title}>
          <h2>impekable</h2>
        </div>
        <div className={classes.header_nav}>
          <p>
            <Icon icon="Search" />
            <input
              className={classes.search}
              type="text"
              placeholder="Search transactions, invoices or help"
            />
          </p>
          <ul className={classes.icons}>
            <li>
              <Icon icon="Help_center" />
            </li>
            <li>
              <Icon icon="Chut_Room" />
            </li>
            <li>
              <Icon icon="Notifications" />
            </li>
            <hr />
            <li>NickName</li>
          </ul>
        </div>
      </div>
    );
  }
}
