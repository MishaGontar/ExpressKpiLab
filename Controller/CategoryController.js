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
}

export default new CategoryController()