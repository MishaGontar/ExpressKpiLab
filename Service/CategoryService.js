import Category from "../Schemas/CategorySchema.js";

class CategoryService {

  async create(params) {
    return Category.create(params);
  }

  async getAll() {
    return Category.find()
  }
}

export default new CategoryService()