'use client'
import React, { useEffect, useState } from 'react'
import Fullcalendar from "@fullcalendar/react";
import dayGridPluggin from "@fullcalendar/daygrid"
import timeGridPluggin from "@fullcalendar/timegrid"
import interActionPluggin from "@fullcalendar/interaction"
import { DateSelectArg, EventApi, EventClickArg, EventInput, EventRemoveArg } from '@fullcalendar/core/index.js';



function Calendar() {
  const storedEvents =
  typeof localStorage !== 'undefined'
    ? JSON.parse(localStorage.getItem('calendarEvents') || '[]')
    : [];
  const [events, setEvents] = useState<Array<EventApi>>(storedEvents)
  let [id, setId] = useState(1);

  const handleDateSelect=(selectionInfo:DateSelectArg) => {
    let title = prompt("Add event's title");
    let calendarApi =selectionInfo.view.calendar
    calendarApi.unselect()
    if (title) {
      const newEvent = {
        id: String(id++),
        title,
        start: selectionInfo.startStr,
        end: selectionInfo.endStr,
        allDay: selectionInfo.allDay,
      };
      calendarApi.addEvent(newEvent);
      setId(id);
      setEvents([...events, newEvent as unknown as EventApi]); // Update events state
    }
  }

  const handleEventClick = (clickInfo: EventClickArg) => {
    if (window.confirm("Delete Event?")) {
      clickInfo.event.remove();
      const updatedEvents = events.filter((event) => event.id !== clickInfo.event.id);
      setEvents(updatedEvents);
    }
  }

  const handleEvents = (events: EventApi[]) => {
    setEvents(events);
    console.log('Events updated:', events);
  }

  useEffect(() => {
    localStorage.setItem('calendarEvents', JSON.stringify(events));
  }, [events]);
  
  // Load events from localStorage on component mount
  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem('calendarEvents') || '[]');
    setEvents(storedEvents);
  }, []);
 
  return (
    
      <Fullcalendar
      plugins={[dayGridPluggin, timeGridPluggin, interActionPluggin]}
      initialView={'dayGridMonth'}
      initialEvents={events.map((event) => ({
        id: event.id,
        title: event.title,
        start: event.start,
        end: event.end,
        allDay: event.allDay,
      } as EventInput))}
      
      selectable={true}
      editable={true}
      select={handleDateSelect}
      eventClick={handleEventClick}
      
      eventRemove={(e:EventRemoveArg) => {
        console.log("event deleted")
      }}
      eventsSet={handleEvents}
      headerToolbar={{
        start: "today prev,next", 
        center:"title",
        end: "dayGridMonth,timeGridWeek,timeGridDay", 
      }}
      height={"80vh"}
      
      aspectRatio={5}
      />
    
  )
}

export default Calendar
