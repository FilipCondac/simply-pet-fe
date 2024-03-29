import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import React from "react";

const localizer = momentLocalizer(moment);

const MyCalendar = (props) => (
  <>
    <Calendar
      localizer={localizer}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500, width: "98%", margin: "auto" }}
    />
  </>
);

export default MyCalendar;
