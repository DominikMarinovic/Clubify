const performerService = require("../service/performer");

class PerformerContoller {
  async createPerformer(req, res) {
    try {
      const id = await performerService.createPerformer(req.body);
      res.status(201).json(id);
    } catch (err) {
      console.error(err);
      res.status(500).json("Something went wrong");
    }
  }

  async deletePerformer(req, res) {
    try {
      const { id } = req.params;
      await performerService.deletePerformer(id);
      res.status(201).json("Event successfully deleted");
    } catch (err) {
      console.error(err);
      res.status(500).json("Something went wrong");
    }
  }

  async getPerformers(req, res) {
    try {
      const performers = await performerService.getPerformers();
      res.status(201).json(performers);
    } catch (err) {
      console.error(err);
      res.status(500).json("Something went wrong");
    }
  }

  async updatePerformer(req, res) {
    try {
      const { id } = req.params;
      await performerService.updatePerformer(id, req.body);
      res.status(201).json("Performer successfully updated");
    } catch (err) {
      console.error(err);
      res.status(500).json("Something went wrong");
    }
  }
}

module.exports = new PerformerContoller();
