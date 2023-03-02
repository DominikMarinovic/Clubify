const db = require("../db/db");
const drink = require("../service/drink");

class DrinkDAO {
  async createDrink(drinkName, quantity, unit) {
    const [id] = await db("drink")
      .insert({
        drink_name: drinkName,
        quantity,
        quantity_unit: unit,
      })
      .returning("id");

    return id;
  }

  async deleteDrink(drinkId) {
    await db("drink").delete().where({ id: drinkId });
  }

  async getDrinks() {
    let drinks = [];
    await db("drink")
      .select("*")
      .then((result) => {
        result.forEach((drink) => {
          drinks.push(drink);
        });
      });

    return drinks;
  }

  async updateDrink(id, drinkName, quantity, unit) {
    await db("drink")
      .where({ id: id })
      .update({ drink_name: drinkName, quantity, quantity_unit: unit });
  }
}

module.exports = new DrinkDAO();
