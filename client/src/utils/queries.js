import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
    query users {
        users {
            _id
            username
            email
            goalExercise
            goalNutrition
            exercises {
                _id
                name
                exercise
                exerciseAuthor
                workoutLength
                caloriesBurned
                feeling
                createdAt
            }
            nutritions {
                _id
                name
                calories
            }
        }
    }
`;

export const QUERY_USER = gql`
    query user($username: String!) {
        user(username: $username) {
            _id
            username
            email
            goalExercise
            goalNutrition
            exercises {
                _id
                name
                exercise
                exerciseAuthor
                workoutLength
                caloriesBurned
                feeling
                createdAt
            }
            nutritions {
                _id
                name
                calories
            }
        }
    }
`;

export const QUERY_EXERCISES = gql`
    query exercises {
        exercises {
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

export const QUERY_EXERCISE = gql`
    query exercise($_id: ID!) {
        exercise(_id: $_id) {
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

export const QUERY_NUTRITIONS = gql`
    query nutritions {
        nutritions {
            _id
            name
            calories
            nutritionAuthor
            createdAt
        }
    }
`;

export const QUERY_NUTRITION = gql`
    query nutrition($_id: ID!) {
        nutrition(_id: $_id) {
            _id
            name
            calories
            nutritionAuthor
            createdAt
        }
    }
`;

export const QUERY_GOAL_EXERCISE = gql`
    query goalExercise($username: String!) {
        goalExercise(username: $username) {
            goalExercise
        }
    }
`;

export const QUERY_GOAL_NUTRITION = gql`
    query goalNutrition($username: String!) {
        goalNutrition(username: $username) {
            goalNutrition
        }
    }
`;

// export const QUERY_FITEVENTS = gql`
//     query fitEvents {
//         fitEvents {
//             _id
//             createdAt
//             fitEventType
//             goalReachedExercise
//             goalReachedNutrition
//             exerciseId {
//                 _id
//                 name
//                 exercise
//                 length
//                 caloriesBurned
//                 feeling
//             }
//             nutritionId {
//                 _id
//                 name
//                 calories
//                 }
//             userId {
//                 _id
//                 username
//                 goalExercise
//                 goalNutrition
//             }
//         }
//     }
// `;

// export const QUERY_FITEVENT = gql`
//     query fitEvent($_id: ID!) {
//         fitEvent(_id: $_id) {
//             _id
//             createdAt
//             fitEventType
//             goalReachedExercise
//             goalReachedNutrition
//             exerciseId {
//                 _id
//                 name
//                 exercise
//                 length
//                 caloriesBurned
//                 feeling
//             }
//             nutritionId {
//                 _id
//                 name
//                 calories
//                 }
//             userId {
//                 _id
//                 username
//                 goalExercise
//                 goalNutrition
//             }
//         }
//     }
// `;

export const QUERY_TODAYEXERCISES = gql`
    query todayExercises($username: String!) {
        todayExercises(username: $username) {
            _id
            name
            exercise
            workoutLength
            caloriesBurned
            feeling
            exerciseAuthor
            createdAt
        }
    }
`;

export const QUERY_TODAYNUTRITIONS = gql`
    query todayNutritions($username: String!) {
        todayNutritions(username: $username) {
            _id
            name
            calories
            nutritionAuthor
            createdAt
        }
    }
`;

export const QUERY_ME = gql`
    query me {
        me {
            _id
            username
            email
            goalExercise
            goalNutrition
            exercises {
                _id
                name
                exercise
                exerciseAuthor
                workoutLength
                caloriesBurned
                feeling
                createdAt
            }
            nutritions {
                _id
                name
                calories
            }
        }
    }
`;