import React, { Fragment, useState, useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import { Calendar, Views, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import events from "../resources/events";
import { Container } from "../components/Container";

const localizer = momentLocalizer(moment); // or globalizeLocalizer

export default function Events() {
  const [myEvents, setEvents] = useState(events);

  const handleSelectSlot = useCallback(
    ({ start, end }) => {
      console.log(start);
      const title = window.prompt("New Event name");
      if (title) {
        setEvents((prev) => [...prev, { start, end, title }]);
      }
    },
    [setEvents]
  );

  const handleSelectEvent = useCallback((event) => {
    console.log(event);
    window.alert(event.title);
  }, []);

  return (
    <Container>
      <div className="mx-auto max-w-2xl lg:mx-0 py-10 sm:py-10">
        <h2
          id="speakers-title"
          className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl"
        >
          Request Help by adding tasks
        </h2>
        <p className="mt-4 font-display text-2xl tracking-tight text-blue-900">
          Boost your circle's alignment, efficiency, and productivity by
          customizing any task to fit your needs
        </p>
      </div>
      <div className="py-10 sm:py-10">
        <Calendar
          localizer={localizer}
          events={myEvents}
          onSelectEvent={handleSelectEvent}
          onSelectSlot={handleSelectSlot}
          selectable
          style={{ height: 700 }}
        />
      </div>
    </Container>
  );
}
