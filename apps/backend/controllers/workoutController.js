const Workout = require('../models/workoutModel');
const mongoose = require('mongoose');

// get all workouts
const get_workouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({ createdAt: -1 });
  res.status(200).json(workouts);
};

// get single workout
const get_workout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such workout' });
  }

  const workout = await Workout.findById(id);

  if (!workout) {
    return res.status(404).json({ error: 'No such workout' });
  } else {
    res.status(200).json(workout);
  }
};

// create new workout
const create_workout = async (req, res) => {
  const { title, load, reps } = req.body;
  // add doc to db
  try {
    const workout = await Workout.create({
      title,
      load,
      reps,
    });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error);
  }
};

// delete a workout

// update a workout

module.exports = {
  get_workouts,
  get_workout,
  create_workout,
};
