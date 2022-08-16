const express = require('express');
const {
  create_workout,
  get_workout,
  get_workouts,
  delete_workout,
  update_workout,
} = require('../controllers/workoutController');
const requireAuth = require('../middleware/requireAuth');

const router = express.Router();

// require auth for all workout routes
router.use(requireAuth);

// GET all workouts
router.get('/', get_workouts);

// GET single workout
router.get('/:id', get_workout);

// POST new workout
router.post('/', create_workout);

// DELETE a workout
router.delete('/:id', delete_workout);

//UPDATE a workout
router.patch('/:id', update_workout);

module.exports = router;
