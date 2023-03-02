const clubService = require("../service/club");

class ClubController {
  async createClub(req, res) {
    try {
      const id = await clubService.createClub(req.body);
      res.status(201).json(id);
    } catch (err) {
      console.error(err);
      res.status(500).json("Something went wrong");
    }
  }

  async deleteClub(req, res) {
    try {
      const { id } = req.params;
      await clubService.deleteClub(id);
      res.status(201).json("Club successfully deleted");
    } catch (err) {
      console.error(err);
      res.status(500).json("Something went wrong");
    }
  }

  async getClubs(req, res) {
    try {
      const clubs = await clubService.getClubs();
      res.status(201).json(clubs);
    } catch (err) {
      console.error(err);
      res.status(500).json("Something went wrong");
    }
  }

  async updateClub(req, res) {
    try {
      const { id } = req.params;
      await clubService.updateClub(id, req.body);
      res.status(201).json("Club successfully updated");
    } catch (err) {
      console.error(err);
      res.status(500).json("Something went wrong");
    }
  }
}

module.exports = new ClubController();
