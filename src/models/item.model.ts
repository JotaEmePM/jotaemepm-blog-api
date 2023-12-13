import { Schema, model } from 'mongoose'
import { Car } from '../interfaces/car.interface'

const ItemSchema = new Schema<Car>({
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
})

export const ItemModel = model('items', ItemSchema)