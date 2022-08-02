const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Exercise {
    _id: ID
    name: String
  }

  type Workout {
    _id: ID
    title: String
    description: String
    date: String
    exercises: [Exercise]
    created_by: User
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    workouts: [Workout]
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
    getYourself(_id: ID!): User
    getAllUsers: [User]
    getExercise(exerciseId: String!): Exercise
    getAllExercises: [Exercise]
    getWorkout(workoutId: String!): Workout
    getAllWorkouts: [Workout]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    createWorkout(title: String!, description: String, date: String, exercises: [ID] ): Workout
    addWorkoutsToUser(userId: String!, workoutId: String!): User
    addExercisesToWorkout(workoutId: String!, exerciseId: String!): Workout
  }
`;

module.exports = typeDefs;