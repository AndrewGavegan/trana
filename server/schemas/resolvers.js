const { AuthenticationError } = require('apollo-server-express');
const { User, Workout, Exercise } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    getExercise: async (parent, { _id }) => {
      // if (context.user) {
      try {
        const exercise = await Exercise.findOne({ _id });
        if (!exercise) {
          throw new Error("No exercise with that ID")
        }
        return exercise;
      } catch (err) {
        throw new Error(`${err.message}`);
      }
      // } else {
      //   throw new AuthenticationError('Must be logged in');
      // }
    },
    getAllExercises: async (parent, args) => {
      // if (context.user) {
      try {
        const exercises = await Exercise.find()

        return exercises;
      } catch (err) {
        throw new Error(`${err.message}`)
      }
      // } else {
      //   throw new AuthenticationError('Must be logged in');
      // }
    },
    getWorkout: async (parent, { _id }) => {
      // if (context.user) {
      try {
        const workout = await Workout.findOne({ _id });
        if (!workout) {
          throw new Error("No wokrout with that ID")
        }
        return workout.populate(exercises);
      } catch (err) {
        throw new Error(`${err.message}`);
      }
      // } else {
      //   throw new AuthenticationError('Must be logged in');
      // }
    },
    getAllWorkouts: async (parent, args) => {
      // if (context.user) {
      try {
        const workouts = await Workout.find()

        return workouts;
      } catch (err) {
        throw new Error(`${err.message}`)
      }
      // } else {
      //   throw new AuthenticationError('Must be logged in');
      // }
    }
  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      try {
        const user = await User.create({ username, email, password });

        const token = signToken(user)
        return { token, user };
      } catch (err) {
        throw new Error(`${err.message}`);
      }
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addWorkout: async (parent, { title, description, date, exercises }) => {
      // if (context.user) {
      try {
        const created_by = context.user._id;
        const workout = await Workout.create({ title, description, date, created_by, exercises });
        return workout.populate(created_by);
      } catch (err) {
        throw new Error(`${err.message}`);
      }
      // } else {
      //   throw new AuthenticationError('Must be logged in');
      // }
    },
    updateWorkout: async (parent, { _id, title, description, exercises }) => {
      // if (context.user) {
      try {
        return await Workout.findByIdAndUpdate(_id, { $inc: { title, description, exercises } }, { new: true });
      } catch (err) {
        throw new Error(`${err.message}`);
      }
      // } else {
      //   throw new AuthenticationError('Must be logged in');
      // }
    }
  }
}

module.exports = resolvers;