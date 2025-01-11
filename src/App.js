import React, { useState } from "react";
import Header from "./components/Header";
import Workout from "./components/Workout";
import Worklist from "./components/Worklist";
import TotalCalories from "./components/TotalCalories";
import "./App.css";

function App() {
  const [workouts, setWorkouts] = useState([]);

  const addWorkout = (workout) => {
    setWorkouts([...workouts, workout]);
  };

  const totalCalories = workouts.reduce(
    (sum, workout) => sum + workout.calories,
    0
  );

  return (
    <div className="App">
      <Header />
      <Workout addWorkout={addWorkout} />
      <Worklist workouts={workouts} />
      <TotalCalories totalCalories={totalCalories} />
    </div>
  );
}

export default App;
