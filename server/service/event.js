const eventDAO = require("../dao/event");

class EventService {
  createEvent(eventDto) {
    const { eventName, description, date, time } = eventDto;
    return eventDAO.createEvent(eventName, description, date, time);
  }

  deleteEvent(eventId) {
    return eventDAO.deleteEvent(eventId);
  }

  getEvents() {
    return eventDAO.getEvents();
  }

  updateEvent(id, eventData) {
    const { eventName, description, date, time } = eventData;
    return eventDAO.updateEvent(id, eventName, description, date, time);
  }
}

module.exports = new EventService();
