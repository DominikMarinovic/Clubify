const cityDAO = require("../dao/city");

class CityService {
  createCity(cityDto) {
    const { cityName, postalCode } = cityDto;
    return cityDAO.createCity(cityName, postalCode);
  }

  deleteCity(cityId) {
    return cityDAO.deleteCity(cityId);
  }

  getCities() {
    return cityDAO.getCities();
  }

  updateCity(id, cityData) {
    const { cityName, postalCode } = cityData;
    return cityDAO.updateCity(id, cityName, postalCode);
  }
}

module.exports = new CityService();
