import express from "express";
import CurrencyController from "../Controller/CurrencyController.js";

const currencyRouter = new express

currencyRouter.post('/currency', CurrencyController.create)
currencyRouter.get('/currencies', CurrencyController.getAll)

export default currencyRouter