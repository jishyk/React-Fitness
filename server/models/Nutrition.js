const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const nutritionSchema = new Schema({
//   nutritionId: {
//     type: Schema.Types.ObjectId,
//     default: () => new Types.ObjectId(),
//     ref: 'Nutrition',
// },
  name: {
    type: String,
    required: true
  },
  calories: {
    type: Number,
    required: true
  },
  nutritionAuthor: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
});

const Nutrition = model('Nutrition', nutritionSchema);

module.exports = Nutrition;
