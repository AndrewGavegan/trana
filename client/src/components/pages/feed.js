import React from 'react'

export default function Feed({ workouts, title }) {
  return (
    <div>
      <h1>{title}</h1>
      {workouts &&
        workouts.map((workout) => (
          <div key={workout._id} className="card mb-3">
            <h2 className="card-header">{workout.title}</h2>
            <h3 className="card-header">
              {workout.created_by.username}
            </h3>
            <div className="card-body">
              <p>{workout.description}</p>
              <ul>
                {workouts.map((workout) => (
                  <li key={workout.exercises._id} className="">{workout.exercises.name}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
    </div>
  );
};