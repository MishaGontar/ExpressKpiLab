import Currency from "../Schemas/CurrencySchema.js";

class CurrencyService {

    async create(params) {
        return Currency.create(params);
    }

    async getAll() {
        return Currency.find()
    }
}

export default new CurrencyService()