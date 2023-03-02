const db = require("../db/db");

class EventDAO {
  async createEvent(eventName, description, date, time) {
    const [id] = await db("event")
      .insert({
        event_name: eventName,
        description,
        date,
        time,
      })
      .returning("id");

    return id;
  }

  async deleteEvent(eventId) {
    await db("event").delete().where({ id: eventId });
  }

  async getEvents() {
    let events = [];
    await db("event")
      .select("*")
      .then((result) => {
        result.forEach((event) => {
          events.push(event);
        });
      });

    return events;
  }

  async updateEvent(id, eventName, description, date, time) {
    await db("event")
      .where({ id: id })
      .update({ event_name: eventName, description, date, time });
  }
}

module.exports = new EventDAO();
