import CategoryService from "../Service/CategoryService.js";

class CategoryController {

  async create(req, res) {
    try {
      const category = await CategoryService.create(req.body)
      res.status(200).json(category)
    } catch (e) {
      res.status(500).json(e.message)
    }
  }

  async getAll(req, res) {
    try {
      const categories = await CategoryService.getAll()
      res.status(200).json(categories)
    } catch (e) {
      res.status(500).json(e.message)
    }
  }
}

export default new CategoryController()