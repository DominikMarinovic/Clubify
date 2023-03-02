const db = require("../db/db");

class PricelistDAO {
  async createPricelist(pricelistName) {
    const [id] = await db("pricelist")
      .insert({
        pricelist_name: pricelistName,
      })
      .returning("id");
    return id;
  }

  async deletePricelist(pricelistId) {
    await db("pricelist").delete().where({ id: pricelistId });
  }

  async getPricelists() {
    let pricelists = [];
    await db("pricelist")
      .select("*")
      .then((result) => {
        result.forEach((pricelist) => {
          pricelists.push(pricelist);
        });
      });

    return pricelists;
  }

  async updatePricelist(id, pricelistName) {
    await db("pricelist")
      .where({ id: id })
      .update({ pricelist_name: pricelistName });
  }
}

module.exports = new PricelistDAO();
