const drinkService = require("../service/drink");

class DrinkController {
  async createDrink(req, res) {
    try {
      const id = await drinkService.createDrink(req.body);
      res.status(201).json(id);
    } catch (err) {
      console.error(err);
      res.status(500).json("Something went wrong");
    }
  }

  async deleteDrink(req, res) {
    try {
      const { id } = req.params;
      await drinkService.deleteDrink(id);
      res.status(201).json("Drink successfully deleted");
    } catch (err) {
      console.error(err);
      res.status(500).json("Something went wrong");
    }
  }

  async getDrinks(req, res) {
    try {
      const drinks = await drinkService.getDrinks();
      res.status(201).json(drinks);
    } catch (err) {
      console.error(err);
      res.status(500).json("Something went wrong");
    }
  }

  async updateDrink(req, res) {
    try {
      const { id } = req.params;
      await drinkService.updateDrink(id, req.body);
      res.status(201).json("Drink successfully updated");
    } catch (err) {
      console.error(err);
      res.status(500).json("Something went wrong");
    }
  }
}

module.exports = new DrinkController();
