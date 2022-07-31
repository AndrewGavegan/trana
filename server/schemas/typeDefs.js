const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Exercise {
    _id: ID
    name: String!
  }

  type Workout {
    _id: ID!
    title: String!
    description: String
    date: String!
    created_by: String
    exercises: [Exercise]
  }

  type User {
    _id: ID
    username: String!
    email: String!
    workouts: [Workout]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    getAllUsers: [User]
    getExercise(name: String!): Exercise
    getAllExercises: [Exercise]
    getWorkout(title: String!): Workout
    getAllWorkouts: [Workout]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addWorkout(title: String!, description: String, date: String, created_by: String, exercises: [ID]): Workout
    addExerciseToWorkout(workoutId: String!): Workout
  }
`;

module.exports = typeDefs;