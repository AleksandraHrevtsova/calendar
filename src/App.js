import React, { Component } from "react";
import Header from "./components/Calendar/Header";
import CalendarPage from "./pages/Calendar/CalendarPage";

export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <CalendarPage />
      </>
    );
  }
}
