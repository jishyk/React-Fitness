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
    calroiesBurned: Int
    feeling: String
  }

  type Nutrition {
    _id: ID
    name: String
    calories: Int
    protein: Int
    carbs: Int
    fats: Int
  }

  type Query {
    users: [User]
    exercises: [Exercise]
    nutrition: [Nutrition]
  }

  type Mutation {
    addUser(username: String!, email: String!): User
    updateUser(userId: ID!, username: String!, email: String!): User
    updateExerciseGoal(userId: ID!, goalExercise: Int! ): User
    updateNutritionGoal(userId: ID!, goalNutrition: Int!): User
    removeUser(userId: ID!): User
    removeExerciseGoal(userId: ID!, goalExercise: Int!): User
    removeNutritionGoal(userId: ID!, goalNutrition: Int!): User
  }
`;

module.exports = typeDefs;