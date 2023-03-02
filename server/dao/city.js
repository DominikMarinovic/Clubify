const db = require("../db/db");

class CityDAO {
  async createCity(cityName, postalCode) {
    const [id] = await db("city")
      .insert({
        city_name: cityName,
        postal_code: postalCode,
      })
      .returning("id");

    return id;
  }

  async deleteCity(cityId) {
    await db("city").delete().where({ id: cityId });
  }

  async getCities() {
    let cities = [];
    await db("city")
      .select("*")
      .then((result) => {
        result.forEach((city) => {
          cities.push(city);
        });
      });

    return cities;
  }

  async updateCity(id, cityName, postalCode) {
    await db("city")
      .where({ id: id })
      .update({ city_name: cityName, postal_code: postalCode });
  }
}

module.exports = new CityDAO();
