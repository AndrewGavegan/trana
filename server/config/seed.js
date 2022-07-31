const db = require('./connection');
const { User, Workout, Exercise } = require('../models');

db.once('open', async () => {
  await Exercise.deleteMany();

  await Exercise.insertMany([
    { name: 'Bench Press' },
    { name: 'Front Squat' }
  ])

  await Workout.deleteMany();

  await User.deleteMany();

  await User.create({
    username: 'testUser',
    email: 'testEmail@test.com',
    password: 'testPassword',
    workouts: []
  });

  console.log('users seeded')

  process.exit();
});