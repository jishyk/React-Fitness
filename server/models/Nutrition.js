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
    required: false
  },
  carbs: {
    type: Number,
    required: false
  },
  fats: {
    type: Number,
    required: false
  }
});

const Nutrition = model('nutrition', nutritionSchema);

module.exports = Nutrition;
