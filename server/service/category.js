const categoryDAO = require("../dao/category");

class CategoryService {
  createCategory(categoryDto) {
    const { categoryName } = categoryDto;
    return categoryDAO.createCategory(categoryName);
  }

  deleteCategory(categoryId) {
    return categoryDAO.deleteCategory(categoryId);
  }

  getCategories() {
    return categoryDAO.getCategories();
  }

  updateCategory(id, categoryData) {
    const { categoryName } = categoryData;
    return categoryDAO.updateCategory(id, categoryName);
  }
}

module.exports = new CategoryService();
