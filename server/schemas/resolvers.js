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
            return User.findOne( { username });
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
                return User.findOne({ _id: user._id });
            } throw new AuthenticationError('You need to be logged in!');
        }
    },
    Mutation: {
        // user mutations
        addUser: async (parent, { username, email }) => {
            const user = await User.create({ username, email });
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
            return { token, user };
        },
        removeUser: async (parent, args, context) => {
            if (context.user) {
                return User.findOneAndDelete({ _id: user._id });
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        updateUser: async (parent, {username, email, password}, context) => {
            if (context.user) {
                return User.findOneAndUpdate({ _id: user._id }, 
                    {$set: {username, email, password} }, 
                    { new: true });
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        // goal mutations
        updateExerciseGoal: async (parent, { goalExercise }, context) => {
            if (context.user) {
            return User.findOneAndUpdate({ _id: user._id }, {$set: { goalExercise } }, { new: true });
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        updateNutritionGoal: async (parent, { goalNutrition }, context) => {
            if (context.user) {
            return User.findOneAndUpdate({ _id: user._id }, {$set: { goalNutrition } }, { new: true });
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        removeExerciseGoal: async (parent, { goalExercise }, context) => {
            if (context.user) {
            return User.findOneAndDelete({ _id: user._id }, 
                { $pull: { goalExercise: goalExercise } }, { new: true }
                );
        }
        throw new AuthenticationError('You need to be logged in!');
        },
        removeNutritionGoal: async (parent, { goalNutrition }, context) => {
            if (context.user) {
            return User.findOneAndDelete({ _id: userId },
                 {$pull: { goalNutrition: goalNutrition } }, 
                 { new: true });
        } 
        throw new AuthenticationError('You need to be logged in!');
        },
        // fitEvent mutations
        addFitEvent: async (parent, { fitEventType, goalReachedExercise, goalReachedNutrition, exerciseId, nutritionId, userId }, context) => {
            if (context.user) {
                return FitEvent.create({ fitEventType, goalReachedExercise, goalReachedNutrition, exerciseId, nutritionId, userId });
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        updatedFitEvent: async (parent, { _id, fitEventType, goalReachedExercise, goalReachedNutrition, exerciseId, nutritionId, userId }) => {
            if (context.user) {
                return FitEvent.findOneAndUpdate(
                    { _id }, 
                    { $set: { fitEventType, goalReachedExercise, goalReachedNutrition, exerciseId, nutritionId, userId }}, 
                    { new: true });
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        removeFitEvent: async (parent, { _id }) => {
            if (context.user) {
                return FitEvent.findOneAndDelete({ _id });
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        // exercise mutations
        addExercise: async (parent, { name, exercise, length, caloriesBurned, feeling }, context) => {
            if(context.user){
                return Exercise.create({ name, exercise, length, caloriesBurned, feeling });
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        removeExercise: async (parent, { _id }) => {
            if (context.user) {
                return Exercise.findOneAndDelete({ _id });
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        updateExercise: async (parent, { _id, name, exercise, length, caloriesBurned, feeling }, context) => {
            if (context.user) {
                return Exercise.findOneAndUpdate({ _id }, {$set: { name, exercise, length, caloriesBurned, feeling } }, { new: true });
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        // nutrition mutations
        addNutrition: async (parent, { name, calories }, context) => {
            if (context.user) {
                return Nutrition.create({ name, calories });
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        removeNutrition: async (parent, { _id }, context) => {
            if (context.user) {
                return Nutrition.findOneAndDelete({ _id });
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        updateNutrition: async (parent, { _id, name }, context) => {
            if (context.user) {
                return Nutrition.findOneAndUpdate({ _id }, {$set: { name } }, { new: true });
            }
            throw new AuthenticationError('You need to be logged in!');
        }
    }

};

module.exports = resolvers;
