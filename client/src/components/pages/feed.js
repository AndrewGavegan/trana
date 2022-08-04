import React from 'react'


const Feed = ({ workouts, title }) => {
  if (!workouts.length) {
    return <h1>No workouts yet!</h1>
  }

  const sortedWorkouts = Array.from(workouts).reverse()

  return (
    <div>
      <h1 className="titleTitle">{title}</h1>
      {sortedWorkouts &&
        sortedWorkouts.map((workout) => (
          <div key={workout._id} className="card">
            <h2 className="card-header titleCard">{workout.title}</h2>
            <h3 className="titleAuthor">
              <span className="orange">{workout.created_by.username || ''}</span>'s workout
            </h3>
            <div className="card-body">
              <h3 className="titleCard">The rundown:</h3>
              <p>{workout.description}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Feed;