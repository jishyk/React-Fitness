const { Schema, model, Types } = require('mongoose');

const fitEventSchema = new Schema({
    fitEventId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
        ref: 'FitEvent',
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        get: function (value) {
          const formattedDate = value.toLocaleDateString();
          const formattedTime = value.toLocaleTimeString();
          return `${formattedDate} ${formattedTime}`;
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
        required: false,
    }, 
    nutritionId: {
        type: Schema.Types.ObjectId,
        ref: 'Nutrition',
        required: false,
    }, 
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },

});

const FitEvent = model('FitEvent', fitEventSchema);

module.exports = FitEvent;