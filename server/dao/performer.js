const db = require("../db/db");

class PerformerDAO {
  async createPeformer(performerName, performerSurname) {
    const [id] = await db("performer")
      .insert({
        performer_name: performerName,
        performer_surname: performerSurname,
      })
      .returning("id");

    return id;
  }

  async deletePerformer(performerId) {
    await db("performer").delete().where({ id: performerId });
  }

  async getPerformers() {
    let performers = [];
    await db("performer")
      .select("*")
      .then((result) => {
        result.forEach((performer) => {
          performers.push(performer);
        });
      });

    return performers;
  }

  async updatePerformer(id, performerName, performerSurname) {
    await db("performer").where({ id: id }).update({
      performer_name: performerName,
      performer_surname: performerSurname,
    });
  }
}

module.exports = new PerformerDAO();
