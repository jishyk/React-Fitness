const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const exerciseSchema = new Schema({
    // exerciseId: {
    //     type: Schema.Types.ObjectId,
    //     default: () => new Types.ObjectId(),
    //     ref: 'Exercise',
    // },
    name: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280,
        trim: true
    },
    exerciseAuthor: {
        type: String,
        required: true,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
    exercise: {
        type: String,
        required: false,
        minLength: 1,
        maxLength: 280,
        trim: true
    },
    workoutLength: {
        type: String,
        required: false,
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
        required: false,
        minLength: 1,
        maxLength: 280,
        trim: true
    },
})

const Exercise = model('Exercise', exerciseSchema);

module.exports = Exercise;