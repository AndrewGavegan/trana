const db = require('./connection');
const { User, Exercise } = require('../models');

db.once('open', async () => {
  await Exercise.deleteMany();

  const exercises = await Exercise.insertMany([
    { name: 'Bench Press' },
    { name: 'Front Squat' }
  ])

  await User.deleteMany();

  await User.create({
    username: 'testUser',
    email: 'testEmail@test.com',
    password: 'testPassword',
    workouts: [
      {
        exercises: [exercises[0]._id, exercises[1]._id]
      }
    ]
  });

  console.log('users seeded')

  process.exit();
});