const categoryService = require("../service/category");

class CategoryController {
  async createCategory(req, res) {
    try {
      const id = await categoryService.createCategory(req.body);
      res.status(201).json(id);
    } catch (err) {
      console.error(err);
      res.status(500).json("Something went wrong");
    }
  }

  async deleteCategory(req, res) {
    try {
      const { id } = req.params;
      await categoryService.deleteCategory(id);
      res.status(201).json("Category successfully deleted");
    } catch (err) {
      console.error(err);
      res.status(500).json("Something went wrong");
    }
  }

  async getCategories(req, res) {
    try {
      const categories = await categoryService.getCategories();
      res.status(201).json(categories);
    } catch (err) {
      console.error(err);
      res.status(500).json("Something went wrong");
    }
  }

  async updateCategory(req, res) {
    try {
      const { id } = req.params;
      await categoryService.updateCategory(id, req.body);
      res.status(201).json("Category successfully updated");
    } catch (err) {
      console.error(err);
      res.status(500).json("Something went wrong");
    }
  }
}

module.exports = new CategoryController();
