const db = require("../db/db");

class ClubDAO {
  async createClub(
    clubName,
    contact,
    email,
    openingTime,
    closingTime,
    instagramAccount,
    location
  ) {
    const [id] = await db("club")
      .insert({
        club_name: clubName,
        contact,
        email,
        opening_time: openingTime,
        closing_time: closingTime,
        instagram_account: instagramAccount,
        location,
      })
      .returning("id");

    return id;
  }

  async deleteClub(clubId) {
    await db("club").delete().where({ id: clubId });
  }

  async getClubs() {
    let clubs = [];
    await db("club")
      .select("*")
      .then((result) => {
        result.forEach((club) => {
          clubs.push(club);
        });
      });

    return clubs;
  }

  async updateClub(
    id,
    clubName,
    contact,
    email,
    openingTime,
    closingTime,
    instagramAccount,
    location
  ) {
    await db("club").where({ id: id }).update({
      club_name: clubName,
      contact,
      email,
      opening_time: openingTime,
      closing_time: closingTime,
      instagram_account: instagramAccount,
      location,
    });
  }
}

module.exports = new ClubDAO();
