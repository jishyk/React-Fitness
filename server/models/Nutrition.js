const { Schema, model } = require('mongoose');

const nutritionSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now,
    get: (value) => dateFormat(value)
  },
  name: {
    type: String,
    required: true
  },
  calories: {
    type: Number,
    required: true
  },
  protein: {
    type: Number,
    required: true
  },
  carbs: {
    type: Number,
    required: true
  },
  fats: {
    type: Number,
    required: true
  }
}, {
  toJSON: {
    getters: true
  }
});

const Nutrition = model('Nutrition', nutritionSchema);

module.exports = Nutrition;
