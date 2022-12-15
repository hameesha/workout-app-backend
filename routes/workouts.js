const express = require("express");
const {
  createWorkout,
  getWorkouts,
  getWorkout,
  updateWorkout,
  deleteWorkout,
} = require("../contollers/workoutController");

const router = express.Router();

// routes

//GET all workouts
router.get("/", getWorkouts);

//GET a single workout
router.get("/:id", getWorkout);

// POST a workout
router.post("/", createWorkout);

// DELETE a workout
router.delete("/:id", deleteWorkout);

//Update a workout
router.patch("/:id", updateWorkout);

module.exports = router;
