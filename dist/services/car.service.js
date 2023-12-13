"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCar = exports.updateCar = exports.getCar = exports.getCars = exports.insertCar = void 0;
const item_model_1 = require("../models/item.model");
const insertCar = (item) => __awaiter(void 0, void 0, void 0, function* () {
    const responseInsert = yield item_model_1.ItemModel.create(item);
    return responseInsert;
});
exports.insertCar = insertCar;
const getCars = () => __awaiter(void 0, void 0, void 0, function* () {
    const responseItems = yield item_model_1.ItemModel.find({});
    return responseItems;
});
exports.getCars = getCars;
const getCar = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const responseItems = yield item_model_1.ItemModel.findOne({ _id: id });
    return responseItems;
});
exports.getCar = getCar;
const updateCar = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const responseItem = yield item_model_1.ItemModel.findOneAndUpdate({
        _id: id
    }, data, {
        new: true
    });
    return responseItem;
});
exports.updateCar = updateCar;
const deleteCar = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const responseItem = yield item_model_1.ItemModel.findOneAndDelete({ _id: id });
    return responseItem;
});
exports.deleteCar = deleteCar;
