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

const User = model('user', userSchema);

module.exports = User;
