// example typeDefs to resvole server error -abel

const typeDefs = `
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
`;

module.exports = typeDefs;