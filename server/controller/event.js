const eventService = require("../service/event");

class EventContoller {
  async createEvent(req, res) {
    try {
      const id = await eventService.createEvent(req.body);
      res.status(201).json(id);
    } catch (err) {
      console.error(err);
      res.status(500).json("Something went wrong");
    }
  }

  async deleteEvent(req, res) {
    try {
      const { id } = req.params;
      await eventService.deleteEvent(id);
      res.status(201).json("Event successfully deleted");
    } catch (err) {
      console.error(err);
      res.status(500).json("Something went wrong");
    }
  }

  async getEvents(req, res) {
    try {
      const events = await eventService.getEvents();
      res.status(201).json(events);
    } catch (err) {
      console.error(err);
      res.status(500).json("Something went wrong");
    }
  }

  async updateEvent(req, res) {
    try {
      const { id } = req.params;
      await eventService.updateEvent(id, req.body);
      res.status(201).json("Event successfully updated");
    } catch (err) {
      console.error(err);
      res.status(500).json("Something went wrong");
    }
  }
}

module.exports = new EventContoller();
