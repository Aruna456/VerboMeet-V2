const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

require('./config/passport')(passport);

mongoose.connect(process.env.MONGO_URI, {})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));

const app = express();
const PORT = process.env.PORT || 5000;

app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false, 
    httpOnly: true,
    sameSite: 'lax',
  },
}));
app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
// Routes
app.use('/', require('./routes/authRoutes'));
// Add this to server.js
app.use('/debates', require('./routes/debateRoutes'));

// Start Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
