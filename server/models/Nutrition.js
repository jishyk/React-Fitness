const { Schema, model } = require('mongoose');

const nutritionSchema = new Schema({
  nutritionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
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

const Nutrition = model('nutrition', nutritionSchema);

module.exports = Nutrition;
