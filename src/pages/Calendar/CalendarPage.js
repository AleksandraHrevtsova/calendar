import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import Calendar from "../../components/Calendar/Calendar";
import classes from "./CalendarPage.module.css";

const CalendarPage = () => {
  return (
    <div clasName={classes.page}>
      <Navigation />
      <Calendar />
    </div>
  );
};

export default CalendarPage;
