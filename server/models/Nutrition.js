const { Schema, model, Types } = require('mongoose');

const nutritionSchema = new Schema({
  nutritionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
    ref: 'Nutrition',
},
  name: {
    type: String,
    required: true
  },
  calories: {
    type: Number,
    required: true
  }
});

const Nutrition = model('Nutrition', nutritionSchema);

module.exports = Nutrition;
