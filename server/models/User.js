const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
},
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  goalExercise: {
    type: Number,
    required: true
  },
  goalNutrition: {
    type: Number,
    required: true
  },
});

const User = model('User', userSchema);

module.exports = User;
