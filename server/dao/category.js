const db = require("../db/db");

class CategoryDAO {
  async createCategory(categoryName) {
    const [id] = await db("category")
      .insert({
        category_name: categoryName,
      })
      .returning("id");

    return id;
  }

  async deleteCategory(categoryId) {
    await db("category").delete().where({ id: categoryId });
  }

  async getCategories() {
    let categories = [];
    await db("category")
      .select("*")
      .then((result) => {
        result.forEach((category) => {
          categories.push(category);
        });
      });

    return categories;
  }

  async updateCategory(id, categoryName) {
    await db("category")
      .where({ id: id })
      .update({ category_name: categoryName });
  }
}

module.exports = new CategoryDAO();
