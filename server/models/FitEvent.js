const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const fitEventSchema = new Schema({
    createdAt: {
        type: Date,
        default: Date.now(),
        get: function (value) {
            const formattedTime = value.toLocaleTimeString();
            return formattedTime;
        }
    },
    fitEventType: {
        type: String,
        required: true,
    },
    
    goalReachedExercise: {
        type: Boolean,
        required: true,
    },
    goalReachedNutrition: {
        type: Boolean,
        required: true,
    },
    exerciseId: {
        type: Schema.Types.ObjectId,
        ref: 'Exercise',
    }, 
    nutritionId: {
        type: Schema.Types.ObjectId,
        ref: 'Exercise',
    }, 

});

const FitEvent = model('fitEvent', fitEventSchema);

module.exports = FitEvent;