import React from "react";

function Worklist({ workouts }) {
  return (
    <div>
      <h2>Workout History</h2>
      <ul>
        {workouts.map((workout, index) => (
          <li key={index}>
            {workout.exercise} - {workout.duration} mins - {workout.calories} cal
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Worklist;
