const { User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
const { Exercise } = require('../models');
const { Nutrition } = require('../models');

const resolvers = {
    Query: {
        users: async () => {
            return User.find().populate('exercises').populate('nutritions').populate('goalExercise').populate('goalNutrition');
        },
        user: async (parent, { username }) => {
            return User.findOne({ username }).populate('exercises').populate('nutritions').populate('goalExercise').populate('goalNutrition');
        },
        // fitEvent: async (parent, { _id }) => {
        //     return FitEvent.findOne({ _id }).populate('exerciseId').populate('nutritionId').populate('userId');
        // },
        // todayFitEvents: async (parent, { _id }) => {
        //     try {
        //         // Get the current date
        //         const currentDate = new Date();

        //         // Set the start and end of the current day
        //         const startOfDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
        //         const endOfDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 1);

        //         // Query for FitEvent records within the current day associated with the specified user _id
        //         const fitEvents = await FitEvent.find({
        //             createdAt: {
        //                 $gte: startOfDay,
        //                 $lt: endOfDay,
        //             },
        //             userId: _id,
        //         });

        //         return fitEvents;
        //     } catch (err) {
        //         console.error(err);
        //         throw new Error('Failed to fetch fit events for the current day');
        //     }
        // },
        // fitEvents: async () => {
        //     return FitEvent.find().sort({ createdAt: -1 }).populate('exerciseId').populate('nutritionId').populate('userId');
        // },
        exercise: async (parent, { exerciseId }) => {
            return Exercise.findOne({ _id: exerciseId });
        },
        exercises: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Exercise.find(params).sort({ createdAt: -1 });
        },
        nutrition: async (parent, { nutritionId }) => {
            return Nutrition.findOne({ _id: nutritionId });
        },
        nutritions: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Nutrition.find(params).sort({ createdAt: -1 });
        },
        goalExercise: async (parent, { username }) => {
            const params = username ? { username } : {};
            return User.find(params).sort({ createdAt: -1 });
        },
        goalNutrition: async (parent, { username }) => {
            const params = username ? { username } : {};
            return User.find(params).sort({ createdAt: -1 });
        },
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id }).populate('exercises').populate('nutritions');
            } throw AuthenticationError;
        }
    },
    Mutation: {
        // user mutations
        addUser: async (parent, { username, email, password, goalExercise, goalNutrition }) => {
            const user = await User.create({ username, email, password, goalExercise, goalNutrition });
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
        updateUser: async (parent, { username, email, password }, context) => {
            if (context.user) {
                return User.findOneAndUpdate({ _id: context.user._id },
                    { $set: { username, email, password } },
                    { new: true });
            }
            throw AuthenticationError;
        },
        // goal mutations
        addExerciseGoal: async (parent, { goalExercise }, context) => {
            console.log(goalExercise)
            if (context.user) {
               return User.findOneAndUpdate(
                    {
                        _id: context.user._id,
                    },
                    {
                    goalExercise,
                    },
                    {
                        new: true,
                    });
            }
            throw AuthenticationError;
        },
        addNutritionGoal: async (parent, { goalNutrition }, context) => {
            if (context.user) {
                const newNutritionGoal = await User.findOneAndUpdate({
                    goalNutrition
                },
                {
                    $addToSet: { goalNutrition: newNutritionGoal}
                }
                );
                console.log(newNutritionGoal);
                return {
                    goalNutrition: newNutritionGoal,
                }
            }
            throw AuthenticationError;
        },
        updateExerciseGoal: async (parent, { goalExercise }, context) => {
            if (context.user) {
                return User.findOneAndUpdate({ _id: context.user._id }, { $set: { goalExercise } }, { new: true });
            }
            throw AuthenticationError;
        },
        updateNutritionGoal: async (parent, { goalNutrition }, context) => {
            if (context.user) {
                return User.findOneAndUpdate({ _id: context.user._id }, { $set: { goalNutrition } }, { new: true });
            }
            throw AuthenticationError;
        },
        removeExerciseGoal: async (parent, { goalExercise }, context) => {
            if (context.user) {
                return User.findOneAndDelete({ _id: context.user._id },
                    { $pull: { goalExercise: goalExercise } }, { new: true }
                );
            }
            throw AuthenticationError;
        },
        removeNutritionGoal: async (parent, { goalNutrition }, context) => {
            if (context.user) {
                return User.findOneAndDelete({ _id: context.userId },
                    { $pull: { goalNutrition: goalNutrition } },
                    { new: true });
            }
            throw AuthenticationError;
        },
        // fitEvent mutations
        // addFitEvent: async (parent, { fitEventType, goalReachedExercise, goalReachedNutrition, exerciseId, nutritionId, userId }, context) => {
        //     if (context.user) {
        //         return FitEvent.create({ fitEventType, goalReachedExercise, goalReachedNutrition, exerciseId, nutritionId, userId });
        //     }
        //     throw AuthenticationError;
        // },
        // updatedFitEvent: async (parent, { _id, fitEventType, goalReachedExercise, goalReachedNutrition, exerciseId, nutritionId, userId }, context) => {
        //     if (context.user) {
        //         return FitEvent.findOneAndUpdate(
        //             { _id },
        //             { $set: { fitEventType, goalReachedExercise, goalReachedNutrition, exerciseId, nutritionId, userId } },
        //             { new: true });
        //     }
        //     throw AuthenticationError;
        // },
        // removeFitEvent: async (parent, { _id }, context) => {
        //     if (context.user) {
        //         return FitEvent.findOneAndDelete({ _id });
        //     }
        //     throw AuthenticationError;
        // },
        // exercise mutations
        addExercise: async (parent, { name, exercise, workoutLength, caloriesBurned, feeling }, context) => {
            if (context.user) {
                // const token = signToken(context.user);
                const newExercise = await Exercise.create({
                    name,
                    exercise,
                    workoutLength,
                    caloriesBurned,
                    feeling,
                    exerciseAuthor: context.user.username,
                });
                await User.findOneAndUpdate(
                    {
                        _id: context.user._id,
                    },
                    {
                        $addToSet: { exercises: newExercise }
                    },
                );
                console.log(newExercise);
                return {
                    // token: token,
                    exercises: newExercise,

                };
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
                return Exercise.findOneAndUpdate({ _id }, { $set: { name, exercise, length, caloriesBurned, feeling } }, { new: true });
            }
            throw AuthenticationError;
        },
        // nutrition mutations
        addNutrition: async (parent, { name, calories }, context) => {
            if (context.user) {
                const newNutrition = await Nutrition.create({
                    name,
                    calories,
                    nutritionAuthor: context.user.username,
                });
                await User.findOneAndUpdate(
                    {
                        _id: context.user._id,
                    },
                    {
                        $addToSet: { nutritions: newNutrition }
                    },
                );
                console.log(newNutrition);
                return {
                    nutritions: newNutrition,
                };
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
                return Nutrition.findOneAndUpdate({ _id }, { $set: { name } }, { new: true });
            }
            throw AuthenticationError;
        }
    }
};

module.exports = resolvers;
