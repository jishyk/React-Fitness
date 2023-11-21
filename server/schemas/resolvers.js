const { User } = require('../models');

const resolvers = {
    Query: {
        users: async () => {
            return User.find();
        },
        user: async (parent, { username }) => {
            return User.findOne({ username })
        },
    },
    Mutation: {
        addUser: async (parent, { username, email }) => {
            return User.create({ username, email });
        },
        updateUser: async (parent, { userId, username, email, goalExercise, goalNutrition }) => {
            return User.findOneAndUpdate({ _id: userId }, { username, email, goalExercise, goalNutrition }, { new: true });
        },
        updateExerciseGoal: async (parent, { userId, goalExercise }) => {
            return User.findOneAndUpdate({ _id: userId }, { goalExercise }, { new: true });
        },
        updateNutritionGoal: async (parent, { userId, goalNutrition }) => {
            return User.findOneAndUpdate({ _id: userId }, { goalNutrition }, { new: true });
        },
        removeUser: async (parent, { userId }) => {
            return User.findOneAndDelete({ _id: userId });
        },
        removeExerciseGoal: async (parent, { userId, goalExercise }) => {
            return User.findOneAndDelete({ _id: userId }, { goalExercise }, { new: true });
        },
        removeNutritionGoal: async (parent, { userId, goalNutrition }) => {
            return User.findOneAndDelete({ _id: userId }, { goalNutrition }, { new: true });
        },
    }

};