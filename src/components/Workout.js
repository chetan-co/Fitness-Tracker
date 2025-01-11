import React, { useState } from "react";

function Workout({ addWorkout }) {
  const [exercise, setExercise] = useState("");
  const [duration, setDuration] = useState("");
  const [calories, setCalories] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (exercise && duration && calories) {
      addWorkout({
        exercise,
        duration: parseInt(duration, 10),
        calories: parseInt(calories, 10),
      });
      setExercise("");
      setDuration("");
      setCalories("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Exercise"
        value={exercise}
        onChange={(e) => setExercise(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Duration (mins)"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Calories Burned"
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
        required
      />
      <button type="submit">Add Workout</button>
    </form>
  );
}

export default Workout;
