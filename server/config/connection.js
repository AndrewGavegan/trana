const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/trana', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;


// 'mongodb+srv://AndrewGavegan:password1234@cluster0.omy9u.mongodb.net/?retryWrites=true&w=majority' ||