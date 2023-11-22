// seed.js
const mongoose = require('mongoose');
const db = require('../config/connection');
const Exercise = require('../models/Exercise');
const Nutrition = require('../models/Nutrition');
const FitEvent = require('../models/FitEvent');
const User = require('../models/User');

const exerciseData = require('./ExerciseData.json');
const fitEventData = require('./FitEventData.json');
const nutritionData = require('./NutritionData.json');
const userData = require('./UserData.json');

db.once('open', async () => {
  try {
    // Clear existing data
    await Exercise.deleteMany({});
    await FitEvent.deleteMany({});
    await Nutrition.deleteMany({});
    await User.deleteMany({});

    // Seed new data
    await Exercise.insertMany(exerciseData);
    await FitEvent.insertMany(fitEventData);
    await Nutrition.insertMany(nutritionData);
    await User.insertMany(userData);

    console.log('All data seeded!');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
});
