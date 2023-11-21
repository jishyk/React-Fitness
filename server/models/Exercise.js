const { Schema, model } = require('mongoose');

const exerciseSchema = new Schema({
    exerciseId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    name: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280,
        trim: true
    },
    exercise: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280,
        trim: true
    },
    length: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280,
        trim: true
    },
    caloriesBurned: {
        type: Number,
        required: true
    },
    feeling: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280,
        trim: true
    },
})

const Exercise = model('exercise', exerciseSchema);

module.exports = Exercise;