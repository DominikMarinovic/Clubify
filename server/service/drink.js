const drinkDAO = require("../dao/drink");

class DrinkService {
  createDrink(drinkDto) {
    const { drinkName, quantity, unit } = drinkDto;
    return drinkDAO.createDrink(drinkName, quantity, unit);
  }

  deleteDrink(drinkId) {
    return drinkDAO.deleteDrink(drinkId);
  }

  getDrinks() {
    return drinkDAO.getDrinks();
  }

  updateDrink(id, drinkData) {
    const { drinkName, quantity, unit } = drinkData;
    return drinkDAO.updateDrink(id, drinkName, quantity, unit);
  }
}

module.exports = new DrinkService();
