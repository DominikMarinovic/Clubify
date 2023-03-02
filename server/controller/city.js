const cityService = require("../service/city");

class CityController {
  async createCity(req, res) {
    try {
      const id = await cityService.createCity(req.body);
      res.status(201).json(id);
    } catch (err) {
      console.error(err);
      res.status(500).json("Something went wrong");
    }
  }

  async deleteCity(req, res) {
    try {
      const { id } = req.params;
      await cityService.deleteCity(id);
      res.status(201).json("City successfully deleted");
    } catch (err) {
      console.error(err);
      res.status(500).json("Something went wrong");
    }
  }

  async getCities(req, res) {
    try {
      const cities = await cityService.getCities();
      res.status(201).json(cities);
    } catch (err) {
      console.error(err);
      res.status(500).json("Something went wrong");
    }
  }

  async updateCity(req, res) {
    try {
      const { id } = req.params;
      await cityService.updateCity(id, req.body);
      res.status(201).json("City successfully updated");
    } catch (err) {
      console.error(err);
      res.status(500).json("Something went wrong");
    }
  }
}

module.exports = new CityController();
