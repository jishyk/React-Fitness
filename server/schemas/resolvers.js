const { User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
const { Exercise } = require('../models');
const { Nutrition } = require('../models');
const { FitEvent } = require('../models');

const resolvers = {
    Query: {
        users: async () => {
            return User.find();
        },
        user: async (parent, { username }) => {
            return User.findOne( { username }, {new: true});
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
        },
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id });
            } throw AuthenticationError;
        }
    },
    Mutation: {
        // user mutations
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
      
            if (!user) {
              throw AuthenticationError;
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw AuthenticationError;
            }
      
            const token = signToken(user);
            console.log(token);
            console.log(user)
            return { token, user };
        },
        removeUser: async (parent, args, context) => {
            if (context.user) {
                return User.findOneAndDelete({ _id: context.user._id });
            }
            throw AuthenticationError;
        },
        updateUser: async (parent, {username, email, password}, context) => {
            if (context.user) {
                return User.findOneAndUpdate({ _id: context.user._id }, 
                    {$set: {username, email, password} }, 
                    { new: true });
            }
            throw AuthenticationError;
        },
        // goal mutations
        updateExerciseGoal: async (parent, { goalExercise }, context) => {
            if (context.user) {
            return User.findOneAndUpdate({ _id: user._id }, {$set: { goalExercise } }, { new: true });
            }
            throw AuthenticationError;
        },
        updateNutritionGoal: async (parent, { goalNutrition }, context) => {
            if (context.user) {
            return User.findOneAndUpdate({ _id: user._id }, {$set: { goalNutrition } }, { new: true });
            }
            throw AuthenticationError;
        },
        removeExerciseGoal: async (parent, { goalExercise }, context) => {
            if (context.user) {
            return User.findOneAndDelete({ _id: user._id }, 
                { $pull: { goalExercise: goalExercise } }, { new: true }
                );
        }
        throw AuthenticationError;
        },
        removeNutritionGoal: async (parent, { goalNutrition }, context) => {
            if (context.user) {
            return User.findOneAndDelete({ _id: userId },
                 {$pull: { goalNutrition: goalNutrition } }, 
                 { new: true });
        } 
        throw AuthenticationError;
        },
        // fitEvent mutations
        addFitEvent: async (parent, { fitEventType, goalReachedExercise, goalReachedNutrition, exerciseId, nutritionId, userId }, context) => {
            if (context.user) {
                return FitEvent.create({ fitEventType, goalReachedExercise, goalReachedNutrition, exerciseId, nutritionId, userId });
            }
            throw AuthenticationError;
        },
        updatedFitEvent: async (parent, { _id, fitEventType, goalReachedExercise, goalReachedNutrition, exerciseId, nutritionId, userId }, context) => {
            if (context.user) {
                return FitEvent.findOneAndUpdate(
                    { _id }, 
                    { $set: { fitEventType, goalReachedExercise, goalReachedNutrition, exerciseId, nutritionId, userId }}, 
                    { new: true });
            }
            throw AuthenticationError;
        },
        removeFitEvent: async (parent, { _id }, context) => {
            if (context.user) {
                return FitEvent.findOneAndDelete({ _id });
            }
            throw AuthenticationError;
        },
        // exercise mutations
        addExercise: async (parent, { name, exercise, length, caloriesBurned, feeling }, context) => {
            if(context.user){
                return Exercise.create({ name, exercise, length, caloriesBurned, feeling });
            }
            throw AuthenticationError;
        },
        removeExercise: async (parent, { _id }, context) => {
            if (context.user) {
                return Exercise.findOneAndDelete({ _id });
            }
            throw AuthenticationError;
        },
        updateExercise: async (parent, { _id, name, exercise, length, caloriesBurned, feeling }, context) => {
            if (context.user) {
                return Exercise.findOneAndUpdate({ _id }, {$set: { name, exercise, length, caloriesBurned, feeling } }, { new: true });
            }
            throw AuthenticationError;
        },
        // nutrition mutations
        addNutrition: async (parent, { name, calories }, context) => {
            if (context.user) {
                return Nutrition.create({ name, calories });
            }
            throw AuthenticationError;
        },
        removeNutrition: async (parent, { _id }, context) => {
            if (context.user) {
                return Nutrition.findOneAndDelete({ _id });
            }
            throw AuthenticationError;
        },
        updateNutrition: async (parent, { _id, name }, context) => {
            if (context.user) {
                return Nutrition.findOneAndUpdate({ _id }, {$set: { name } }, { new: true });
            }
            throw AuthenticationError;
        }
    }
};

module.exports = resolvers;
