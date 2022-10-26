import NoteService from "../Service/NoteService.js";

class NoteController {
  async create(req, res) {
    try {
      const note = await NoteService.create(req.body);
      res.status(200).json(note)
    } catch (e) {
      res.status(500).json(e.message)
    }
  }

  async getAllNotesByIdUser(req, res) {
    try {
      const note = await NoteService.getAllNotesByIdUser(req.params);
      res.status(200).json(note)
    } catch (e) {
      res.status(500).json(e.message)
    }
  }

  async getAllNotesByIdUserAndIdCategory(req, res) {
    try {
      const note =
          await NoteService.getAllNotesByIdUserAndIdCategory(req.params);
      res.status(200).json(note)
    } catch (e) {
      res.status(500).json(e.message)
    }
  }
}

export default new NoteController()