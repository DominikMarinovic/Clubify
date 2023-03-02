const performerDAO = require("../dao/performer");

class PerformerService {
  createPerformer(perfomerDto) {
    const { performerName, performerSurname } = perfomerDto;
    return performerDAO.createPeformer(performerName, performerSurname);
  }

  deletePerformer(performerId) {
    return performerDAO.deletePerformer(performerId);
  }

  getPerformers() {
    return performerDAO.getPerformers();
  }

  updatePerformer(id, performerData) {
    const { performerName, performerSurname } = performerData;
    return performerDAO.updatePerformer(id, performerName, performerSurname);
  }
}

module.exports = new PerformerService();
