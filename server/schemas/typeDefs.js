const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    goalExercise: Int
    goalNutrition: Int
    exercises: [Exercise]
    nutritions: [Nutrition]
  }

  type Exercise {
    _id: ID
    name: String
    exercise: String
    workoutLength: String
    caloriesBurned: Int
    feeling: String
    exerciseAuthor: String
    createdAt: String
  }

  type Nutrition {
    _id: ID
    name: String
    calories: Int
    nutritionAuthor: String
    createdAt: String
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

  type Auth {
    token: ID!
    user: User
  }

  type ExerciseResponse {
    token: ID
    exercise: Exercise
    user: User
  }

  type Query {
    users: [User]
    user(username: String): User
    exercises: [Exercise]
    exercise(_id: ID!): Exercise
    nutritions: [Nutrition]
    nutrition(_id: ID!): Nutrition
    fitEvents: [FitEvent]
    todayExercises(username: String!): [Exercise]
    todayNutritions(username: String!): [Nutrition]
    fitEvent(_id: ID!): FitEvent
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    removeUser(userId: ID!): User
    updateUser(userId: ID!, username: String!, email: String!): User
    updateExerciseGoal(userId: ID!, goalExercise: Int! ): User
    updateNutritionGoal(userId: ID!, goalNutrition: Int!): User
    removeExerciseGoal(userId: ID!, goalExercise: Int!): User
    removeNutritionGoal(userId: ID!, goalNutrition: Int!): User
    addExercise(name: String!, exercise: String!, workoutLength: String!, caloriesBurned: Int!, feeling: String!): Exercise
    addNutrition(name: String!, calories: Int!): Nutrition
    addFitEvent(fitEventType: String!, goalReachedExercise: Boolean!, goalReachedNutrition: Boolean!, exerciseId: ID, nutritionId: ID, userId: ID!): FitEvent
    updatedFitEvent(_id: ID!, fitEventType: String!, goalReachedExercise: Boolean!, goalReachedNutrition: Boolean!, exerciseId: ID!, nutritionId: ID!, userId: ID!): FitEvent
    removeFitEvent(_id: ID!): FitEvent
    updateExercise(_id: ID!, name: String!, exercise: String!, length: String!, caloriesBurned: Int!, feeling: String!): Exercise
    updateNutrition(_id: ID!, name: String!, calories: Int!): Nutrition
    removeExercise(_id: ID!): Exercise
    removeNutrition(_id: ID!): Nutrition
  }
`;

module.exports = typeDefs;