const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now,
    get: (value) => dateFormat(value)
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
  exercises: [{
    type: Schema.Types.ObjectId,
    ref: 'Exercise'
  }],
  goals: [{
    type: Schema.Types.ObjectId,
    ref: 'Goal'
  }]
}, {
  toJSON: {
    getters: true
  }
});

const User = model('User', userSchema);

module.exports = User;
