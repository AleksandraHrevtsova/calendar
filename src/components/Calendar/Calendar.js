import React, { Component } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import classes from "./Calendar.module.css";
import "../../App.css";

export default class Calendar extends Component {
  render() {
    return (
      <div className={classes.calendar}>
        <div>
          <h2 className={classes.calendar_title}>calendar</h2>
        </div>
        <div className={classes.fullCalendar}>
          <FullCalendar
            defaultView="dayGridMonth"
            plugins={[dayGridPlugin]}
            weekends={false}
            events={[
              { title: "event 1", date: "2019-08-30" },
              { title: "event 2", date: "2019-08-29" }
            ]}
          />
        </div>
      </div>
    );
  }
}
