const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Exercise {
    _id: ID
    name: String
    workouts: [Workout]!
  }

  type Workout {
    _id: ID
    title: String
    description: String
    date: String
    exercises: [Exercise]!
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    workouts: [Workout]!
  }

  type Auth {
    token: ID
    user: User
  }

  input ExerciseInput {
    _id: ID
    name: String
  }

  type Query {
    getAllUsers: [User]
    getExercise(exerciseId: String!): Exercise
    getAllExercises: [Exercise]
    getWorkout(workoutId: String!): Workout
    getAllWorkouts: [Workout]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addWorkouts(userId: String!, workoutId: String!, title: String!, description: String!, date: String!): Workout
    addExercises(workoutId: String!, exerciseId: String!, exerciseName: String!): Workout
  }
`;

module.exports = typeDefs;