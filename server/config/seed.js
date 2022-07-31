const db = require('./connection');
const { User, Exercise } = require('../models');

db.once('open', async () => {
  await Exercise.deleteMany();

  await Exercise.insertMany([
    { name: 'Bench Press' },
    { name: 'Front Squat' }
  ])

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