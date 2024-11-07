import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-datepicker/dist/react-datepicker.css';
import './Styles/CalendarStyle.css';
import boxicons from 'boxicons';

const localizer = momentLocalizer(moment);

function DynamicCalendar() {
  const [events, setEvents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({ title: '', start: new Date(), end: new Date() });

  // Function to handle opening the modal
  const openModal = () => {
    setNewEvent({ title: '', start: new Date(), end: new Date() });
    setIsModalOpen(true);
  };

  // Function to handle closing the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Function to handle form submission
  const handleAddEvent = (e) => {
    e.preventDefault();
    setEvents([...events, newEvent]);
    closeModal();
  };

  // Function to remove an event
  const removeEvent = (eventToRemove) => {
    setEvents(events.filter(event => event !== eventToRemove));
  };

  return (
    <div className="calendar-container">
      <button className="add-event-button" onClick={openModal}><box-icon name='plus-circle' color="white" size="lg"></box-icon></button>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        selectable
        onSelectEvent={removeEvent}
      />

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Add New Event</h3>
            <form onSubmit={handleAddEvent}>
              <label>
                Title:
                <input
                  type="text"
                  value={newEvent.title}
                  onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                  required
                />
              </label>
              <label>
                Start:
                <DatePicker
                  selected={newEvent.start}
                  onChange={(date) => setNewEvent({ ...newEvent, start: date })}
                  showTimeSelect
                  dateFormat="Pp"
                  className="react-datepicker-wrapper"  // Added DatePicker wrapper class
                />
              </label>
              <label>
                End:
                <DatePicker
                  selected={newEvent.end}
                  onChange={(date) => setNewEvent({ ...newEvent, end: date })}
                  showTimeSelect
                  dateFormat="Pp"
                  className="react-datepicker-wrapper"  // Added DatePicker wrapper class
                />
              </label>
              <button type="submit">Add Event</button>
              <button type="button" class="cancel" onClick={closeModal}>Cancel</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default DynamicCalendar;
