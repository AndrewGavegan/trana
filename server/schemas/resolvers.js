const { AuthenticationError } = require('apollo-server-express');
const { User, Workout, Exercise } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    getYourself: async (parent, { _id }, context) => {
      if (context.user) {
        try {
          const user = await User.findOne({ _id })
            .populate({
              path: 'workouts',
              populate: [{
                path: 'exercises',
                model: 'Exercise'
              }]
            });
          return user;
        } catch (err) {
          throw new Error(`${err.message}`);
        }
      } else {
        throw new AuthenticationError('Must be logged in')
      }
    },
    getAllUsers: async (parent, { args }, context) => {
      if (context.user) {
        try {
          const user = await User.find()
            .populate({
              path: 'workouts',
              populate: [{
                path: 'exercises',
                model: 'Exercise'
              }]
            });
          return user;
        } catch (err) {
          throw new Error(`${err.message}`)
        }
      } else {
        throw new AuthenticationError('Must be logged in')
      }
    },
    getExercise: async (parent, { exerciseId }, context) => {
      if (context.user) {
        try {
          const exercise = await Exercise.findOne({ _id: exerciseId });
          if (!exercise) {
            throw new Error("No exercise with that name")
          }
          return exercise;
        } catch (err) {
          throw new Error(`${err.message}`);
        }
      } else {
        throw new AuthenticationError('Must be logged in');
      }
    },
    getAllExercises: async (parent, { args }, context) => {
      if (context.user) {
        try {
          const exercises = await Exercise.find()

          return exercises;
        } catch (err) {
          throw new Error(`${err.message}`)
        }
      } else {
        throw new AuthenticationError('Must be logged in');
      }
    },
    getWorkout: async (parent, { workoutId }, context) => {
      if (context.user) {
        try {
          const workout = await Workout.findOne({ _id: workoutId });
          if (!workout) {
            throw new Error("No workout with that title")
          }
          return workout.populate('exercises');
        } catch (err) {
          throw new Error(`${err.message}`);
        }
      } else {
        throw new AuthenticationError('Must be logged in');
      }
    },
    getAllWorkouts: async (parent, { args }, context) => {
      if (context.user) {
        try {
          const workouts = await Workout.find().populate('exercises');

          return workouts;
        } catch (err) {
          throw new Error(`${err.message}`)
        }
      } else {
        throw new AuthenticationError('Must be logged in');
      }
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
    createWorkout: async (parent, { title, description, date, exercises }, context) => {
      if (context.user) {
        try {
          const created_by = context.user._id;
          const workout = await Workout.create({ title, description, date, exercises, created_by });
          return workout;
        } catch (err) {
          throw new Error(`${err.message}`);
        }
      } else {
        throw new AuthenticationError('Must be logged in')
      }
    },
    addWorkoutsToUser: async (parent, { userId, workoutId, }, context) => {
      if (context.user) {
        try {
          // const created_by = context.user._id;
          const addWorkout = await User.findOneAndUpdate(
            { _id: userId },
            {
              $push: {
                workouts: {
                  _id: workoutId,
                }
              }
            },
            { new: true }
          )
          return addWorkout;
        } catch (err) {
          throw new Error(`${err.message}`);
        }
      } else {
        throw new AuthenticationError('Must be logged in');
      }
    },
    addExercisesToWorkout: async (parent, { workoutId, exerciseId }, context) => {
      if (context.user) {
        try {
          const addedExercises = await Workout.findOneAndUpdate(
            { _id: workoutId },
            {
              $push: {
                exercises: {
                  _id: exerciseId
                }
              }
            },
            { new: true }
          );
          return addedExercises;
        } catch (err) {
          throw new Error(`${err.message}`)
        }
      } else {
        throw new AuthenticationError('Must be logged in');
      }
    }
  }
};

module.exports = resolvers;