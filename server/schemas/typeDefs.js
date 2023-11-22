const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    goalExercise: [Exercise]
    goalNutrition: [Nutrition]
  }

  type Exercise {
    _id: ID
    name: String
    exercise: String
    length: String
    caloriesBurned: Int
    feeling: String
  }

  type Nutrition {
    _id: ID
    name: String
    calories: Int
  }

  type FitEvent {
    _id: ID
    createdAt: String
    fitEventType: String
    goalReachedExercise: Boolean
    goalReachedNutrition: Boolean
    exerciseId: Exercise
    nutritionId: Nutrition
    userId: User
  }

  type Query {
    users: [User]
    exercises: [Exercise]
    nutrition: [Nutrition]
    fitEvents: [FitEvent]
  }

  type Mutation {
    addUser(username: String!, email: String!): User
    removeUser(userId: ID!): User
    updateUser(userId: ID!, username: String!, email: String!): User
    updateExerciseGoal(userId: ID!, goalExercise: Int! ): User
    updateNutritionGoal(userId: ID!, goalNutrition: Int!): User
    removeExerciseGoal(userId: ID!, goalExercise: Int!): User
    removeNutritionGoal(userId: ID!, goalNutrition: Int!): User
    addExercise(name: String!, exercise: String!, length: String!, caloriesBurned: Int!, feeling: String!): Exercise
    addNutrition(name: String!, calories: Int!): Nutrition
    addFitEvent(fitEventType: String!, goalReachedExercise: Boolean!, goalReachedNutrition: Boolean!, exerciseId: ID!, nutritionId: ID!, userId: ID!): FitEvent
    updateFitEvent(_id: ID!, fitEventType: String!, goalReachedExercise: Boolean!, goalReachedNutrition: Boolean!, exerciseId: ID!, nutritionId: ID!, userId: ID!): FitEvent
    removeFitEvent(_id: ID!): FitEvent
    updateExercise(_id: ID!, name: String!, exercise: String!, length: String!, caloriesBurned: Int!, feeling: String!): Exercise
    updateNutrition(_id: ID!, name: String!, calories: Int!): Nutrition
    removeExercise(_id: ID!): Exercise
    removeNutrition(_id: ID!): Nutrition
  }
`;

module.exports = typeDefs;