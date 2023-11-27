// import the gql function for parsing GraphQL query strings
import { gql } from '@apollo/client';

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const REMOVE_USER = gql`
    mutation removeUser($userId: ID!) {
        removeUser(userId: $userId) {
            user {
                _id
                username
            }
        }
    }
`;

export const UPDATE_USER = gql`
    mutation updateUser($userId: ID!, $username: String!, $email: String!) {
        updateUser(userId: $userId, username: $username, email: $email) {
            user {
                _id
                username
                email
            }
        }
    }
`;

export const UPDATE_EXERCISE_GOAL = gql`
    mutation updateExerciseGoal($userId: ID!, $goalExercise: Int!) {
        updateExerciseGoal(userId: $userId, goalExercise: $goalExercise) {
            user {
                _id
                goalExercise
            }
        }
    }
`;

export const UPDATE_NUTRITION_GOAL = gql`
    mutation updateNutritionGoal($userId: ID!, $goalNutrition: Int!) {
        updateNutritionGoal(userId: $userId, goalNutrition: $goalNutrition) {
            user {
                _id
                goalNutrition
            }
        }
    }
`;

export const REMOVE_EXERCISE_GOAL = gql`
    mutation removeExerciseGoal($userId: ID!, $goalExercise: Int!) {
        removeExerciseGoal(userId: $userId, goalExercise: $goalExercise) {
            user {
                _id
                goalExercise
            }
        }
    }
`;

export const REMOVE_NUTRITION_GOAL = gql`
    mutation removeNutritionGoal($userId: ID!, $goalNutrition: Int!) {
        removeNutritionGoal(userId: $userId, goalNutrition: $goalNutrition) {
            user {
                _id
                goalNutrition
            }
        }
    }
`;

export const ADD_EXERCISE = gql`
    mutation addExercise($name: String!, $exercise: String!, $workoutLength: String!, $caloriesBurned: Int!, $feeling: String!) {
        addExercise(name: $name, exercise: $exercise, workoutLength: $workoutLength, caloriesBurned: $caloriesBurned, feeling: $feeling) {
            _id
            name
            exercise
            exerciseAuthor
            workoutLength
            caloriesBurned
            feeling
            createdAt
        }
    }
`;

export const ADD_NUTRITION = gql`
    mutation addNutrition($name: String!, $calories: Int!) {
        addNutrition(name: $name, calories: $calories) {
            nutrition {
                _id
                name
                calories
            }
        }
    }
`;

// export const ADD_FITEVENT = gql`
//     mutation addFitEvent(
//         $fitEventType: String!
//         $goalReachedExercise: Boolean!
//         $goalReachedNutrition: Boolean!
//         $exerciseId: ID
//         $nutritionId: ID
//         $userId: ID!
//         ) {
//             addFitEvent(
//                 fitEventType: $fitEventType
//                 goalReachedExercise: $goalReachedExercise
//                 goalReachedNutrition: $goalReachedNutrition
//                 exerciseId: $exerciseId
//                 nutritionId: $nutritionId
//                 userId: $userId
//                 ) {
//                     fitEvent {
//                         _id
//                         createdAt
//                         fitEventType
//                         goalReachedExercise
//                         goalReachedNutrition
//                         exerciseId
//                         nutritionId
//                         userId {
//                             _id
//                             username
//                         }
//             }
//         }
//     }
// `;

// export const UPDATE_FITEVENT = gql`
//     mutation updateFitEvent(
//         $_id: ID!
//         $fitEventType: String!
//         $goalReachedExercise: Boolean!
//         $goalReachedNutrition: Boolean!
//         $exerciseId: ID!
//         $nutritionId: ID!
//         $userId: ID!
//         ) {
//             updateFitEvent(
//                 _id: $_id
//                 fitEventType: $fitEventType
//                 goalReachedExercise: $goalReachedExercise
//                 goalReachedNutrition: $goalReachedNutrition
//                 exerciseId: $exerciseId
//                 nutritionId: $nutritionId
//                 userId: $userId
//                 ) {
//                     fitEvent {
//                         _id
//                         createdAt
//                         fitEventType
//                         goalReachedExercise
//                         goalReachedNutrition
//                         exerciseId
//                         nutritionId
//                         userId {
//                             _id
//                             username
//                         }
//                 }
//         }
//     }
// `;  

// export const REMOVE_FITEVENT = gql`
//     mutation removeFitEvent($_id: ID!) {
//         removeFitEvent(_id: $_id) {
//             fitEvent {
//                 _id
//                 createdAt
//                 fitEventType
//                 goalReachedExercise
//                 goalReachedNutrition
//                 exerciseId
//                 nutritionId
//                 userId {
//                     _id
//                     username
//                 }
//             }
//         }
//     }
// `;

export const UPDATE_EXERCISE = gql`
    mutation updateExercise(
        $_id: ID!
        $name: String!
        $exercise: String!
        $length: String!
        $caloriesBurned: Int!
        $feeling: String!
        ) {
            updateExercise(
                _id: $_id
                name: $name
                exercise: $exercise
                length: $length
                caloriesBurned: $caloriesBurned
                feeling: $feeling
                ) {
                    exercise {
                        _id
                        name
                        exercise
                        length
                        caloriesBurned
                        feeling
                    }
                }
        }
    
`;

export const UPDATE_NUTRITION = gql`
    mutation updateNutrition($_id: ID!, $name: String!, $calories: Int!) {
        updateNutrition(_id: $_id, name: $name, calories: $calories) {
            nutrition {
                _id
                name
                calories
            }
        }
    }
`;

export const REMOVE_EXERCISE = gql`
    mutation removeExercise($_id: ID!) {
            removeExercise(_id: $_id) {
                    exercise {
                        _id
                        name
                        exercise
                        length
                        caloriesBurned
                        feeling
                    }
                }
        }
`;

export const REMOVE_NUTRITION = gql`
    mutation removeNutrition($_id: ID!) {
        removeNutrition(_id: $_id) {
            nutrition {
                _id
                name
                calories
            }
        }
    }
`;