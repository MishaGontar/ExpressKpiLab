import CurrencyService from "../Service/CurrencyService.js";

class CurrencyController {

    async create(req, res) {
        try {
            const currency = await CurrencyService.create(req.body)
            res.status(200).json(currency)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    async getAll(req, res) {
        try {
            const currency = await CurrencyService.getAll()
            res.status(200).json(currency)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
}

export default new CurrencyController()