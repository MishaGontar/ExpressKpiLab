import NoteSchema from "../Schemas/NoteSchema.js";

class NoteService {
  async create(params) {
    return NoteSchema.create(params)
  }

  async getAllNotesByIdUser(params) {
    const user_id = params.user_id;
    if (!user_id) {
      throw new Error("Not found user id!")
    }
    return NoteSchema
    .find({user: {_id: `${user_id}`}})
    .populate({path: 'user'})
    .populate({path: 'category'})
  }

  async getAllNotesByIdUserAndIdCategory(params) {
    const user_id = params.user_id;
    const category_id = params.category_id;
    if (!user_id || !category_id) {
      throw new Error("Not found by user/category id !")
    }
    return NoteSchema
    .find({user: {_id: `${user_id}`}, category: `${category_id}`})
    .populate({path: 'user'})
    .populate({path: 'category'})
  }
}

export default new NoteService()