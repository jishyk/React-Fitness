const { User } = require('../models');

const resolvers = {
    Query: {
        users: async () => {
            return User.find();
        },
        user: async (parent, { username }) => {
            return User.findOne({ username })
        },
        fitEvent: async (parent, { _id }) => {
            return FitEvent.findOne({ _id });
        },
        fitEvents: async () => {
            return FitEvent.find().sort({ createdAt: -1 });
        },
        exercise: async (parent, { _id }) => {
            return Exercise.findOne({ _id });
        },
        exercises: async () => {
            return Exercise.find();
        },
        nutrition: async (parent, { _id }) => {
            return Nutrition.findOne({ _id });
        },
        nutritions: async () => {
            return Nutrition.find();
        }
    },
    Mutation: {
        // user mutations
        addUser: async (parent, { username, email }) => {
            return User.create({ username, email });
        },
        removeUser: async (parent, { userId }) => {
            return User.findOneAndDelete({ _id: userId });
        },
        updateUser: async (parent, { userId, username, email, goalExercise, goalNutrition }) => {
            return User.findOneAndUpdate({ _id: userId }, { username, email, goalExercise, goalNutrition }, { new: true });
        },
        // goal mutations
        updateExerciseGoal: async (parent, { userId, goalExercise }) => {
            return User.findOneAndUpdate({ _id: userId }, { goalExercise }, { new: true });
        },
        updateNutritionGoal: async (parent, { userId, goalNutrition }) => {
            return User.findOneAndUpdate({ _id: userId }, { goalNutrition }, { new: true });
        },
        removeExerciseGoal: async (parent, { userId, goalExercise }) => {
            return User.findOneAndDelete({ _id: userId }, { goalExercise }, { new: true });
        },
        removeNutritionGoal: async (parent, { userId, goalNutrition }) => {
            return User.findOneAndDelete({ _id: userId }, { goalNutrition }, { new: true });
        },
        // fitEvent mutations
        addFitEvent: async (parent, { fitEventType, goalReachedExercise, goalReachedNutrition, exerciseId, nutritionId, userId }) => {
            return FitEvent.create({ fitEventType, goalReachedExercise, goalReachedNutrition, exerciseId, nutritionId, userId });
        },
        updatedFitEvent: async (parent, { _id, fitEventType, goalReachedExercise, goalReachedNutrition, exerciseId, nutritionId, userId }) => {
            return FitEvent.findOneAndUpdate({ _id}, { fitEventType, goalReachedExercise, goalReachedNutrition, exerciseId, nutritionId, userId }, { new: true });
        },
        removeFitEvent: async (parent, { _id }) => {
            return FitEvent.findOneAndDelete({ _id });
        },
        // exercise mutations
        addExercise: async (parent, { name, exercise, length, caloriesBurned, feeling }) => {
            return Exercise.create({ name, exercise, length, caloriesBurned, feeling });
        },
        removeExercise: async (parent, { _id }) => {
            return Exercise.findOneAndDelete({ _id });
        },
        updateExercise: async (parent, { _id, name, exercise, length, caloriesBurned, feeling }) => {
            return Exercise.findOneAndUpdate({ _id }, { name, exercise, length, caloriesBurned, feeling }, { new: true });
        },
        // nutrition mutations
        addNutrition: async (parent, { name, calories }) => {
            return Nutrition.create({ name, calories });
        },
        removeNutrition: async (parent, { _id }) => {
            return Nutrition.findOneAndDelete({ _id });
        },
        updateNutrition: async (parent, { _id, name }) => {
            return Nutrition.findOneAndUpdate({ _id }, { name, calories }, { new: true });
        }
    }

};