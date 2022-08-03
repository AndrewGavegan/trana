const db = require('./connection');
const { User, Workout, Exercise } = require('../models');

db.once('open', async () => {
  await Exercise.deleteMany();

  await Exercise.insertMany([
    {
      name: 'Bench Press'
    },
    {
      name: 'Front Squat'
    }
  ])


  await User.deleteMany();

  const user = await User.create({
    username: 'testUser',
    email: 'testEmail@test.com',
    password: 'testPassword',
    workouts: []
  });

  await Workout.deleteMany();

  await Workout.create({
    title: "First Workout",
    description: "It was Fun",
    exercises: [],
    created_by: user
  })

  console.log('users seeded')

  process.exit();
});