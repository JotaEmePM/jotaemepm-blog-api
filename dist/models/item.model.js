"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemModel = void 0;
const mongoose_1 = require("mongoose");
const ItemSchema = new mongoose_1.Schema({
    color: {
        type: String,
        required: true
    },
    gas: {
        type: String,
        enum: ['gasoline', 'electric'],
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    model: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
});
exports.ItemModel = (0, mongoose_1.model)('items', ItemSchema);
//# sourceMappingURL=item.model.js.map