const clubDAO = require("../dao/club");

class ClubService {
  createClub(clubDto) {
    const {
      clubName,
      contact,
      email,
      openingTime,
      closingTime,
      instagramAccount,
      location,
    } = clubDto;
    return clubDAO.createClub(
      clubName,
      contact,
      email,
      openingTime,
      closingTime,
      instagramAccount,
      location
    );
  }

  deleteClub(clubId) {
    return clubDAO.deleteClub(clubId);
  }

  getClubs() {
    return clubDAO.getClubs();
  }

  updateClub(id, clubData) {
    const {
      clubName,
      contact,
      email,
      openingTime,
      closingTime,
      instagramAccount,
      location,
    } = clubData;
    return clubDAO.updateClub(
      id,
      clubName,
      contact,
      email,
      openingTime,
      closingTime,
      instagramAccount,
      location
    );
  }
}

module.exports = new ClubService();
