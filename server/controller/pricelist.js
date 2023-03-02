const { deletePricelist } = require("../dao/pricelist");
const pricelistService = require("../service/pricelist");

class PricelistContoller {
  async createPricelist(req, res) {
    try {
      const id = await pricelistService.createPricelist(req.body);
      res.status(201).json(id);
    } catch (err) {
      console.error(err);
      res.status(500).json("Something went wrong");
    }
  }

  async deletePricelist(req, res) {
    try {
      const { id } = req.params;
      await pricelistService.deletePricelist(id);
      res.status(201).json("Pricelist successfully deleted");
    } catch (err) {
      console.error(err);
      res.status(500).json("Something went wrong");
    }
  }

  async getPricelists(req, res) {
    try {
      const pricelists = await pricelistService.getPricelists();
      res.status(201).json(pricelists);
    } catch (err) {
      console.error(err);
      res.status(500).json("Something went wrong");
    }
  }

  async updatePricelist(req, res) {
    try {
      const { id } = req.params;
      await pricelistService.updatePricelist(id, req.body);
      res.status(201).json("Pricelist successfully updated");
    } catch (err) {
      console.error(err);
      res.status(500).json("Something went wrong");
    }
  }
}

module.exports = new PricelistContoller();
