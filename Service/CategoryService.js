import Category from "../Schemas/CategorySchema.js";

class CategoryService {

  async create(params) {
    return Category.create(params);
  }
}

export default new CategoryService()