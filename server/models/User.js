const { Schema, Types, model } = require('mongoose');

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
    required: false
  },
  goalNutrition: {
    type: Number,
    required: false
  },
});

// Do we need to have a password field? -abel

const User = model('User', userSchema);

module.exports = User;
