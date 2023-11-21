const { Schema, model } = require('mongoose');

const fitEventSchema = new Schema({
    createdAt: {
        type: Date,
        default: Date.now(),
        get: function (value) {
            const formattedTime = value.toLocaleTimeString();
            return formattedTime;
        }
    },
    // At this point the fitEvent will have two possible values: 'nutrition' or 'exercise'. Decided to go with a string instead of a boolean in case we want to add more types later.
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
        ref: 'Nutrition',
    }, 
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },

});

const FitEvent = model('fitEvent', fitEventSchema);

module.exports = FitEvent;