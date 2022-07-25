const db = require('./connection');
const { User, Workout, Exercise } = require('../models');

db.once('open', async () => {
  await User.deleteMany();

  await User.create({
    username: 'testUser',
    email: 'testEmail@test.com',
    password: 'testPassword'
  });

  console.log('users seeded')

  process.exit();
});