const pricelistDAO = require("../dao/pricelist");

class PricelistService {
  createPricelist(pricelistDto) {
    const { pricelistName } = pricelistDto;
    return pricelistDAO.createPricelist(pricelistName);
  }

  deletePricelist(pricelistId) {
    return pricelistDAO.deletePricelist(pricelistId);
  }

  getPricelists() {
    return pricelistDAO.getPricelists();
  }

  updatePricelist(id, pricelistData) {
    const { pricelistName } = pricelistData;
    return pricelistDAO.updatePricelist(id, pricelistName);
  }
}

module.exports = new PricelistService();
