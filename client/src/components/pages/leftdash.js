import React from 'react'


const LeftDash = ({ me, title }) => {
  if (!me.workouts) {
    return <h1>No workouts yet!</h1>
  }


  return (
    <div>
      <h1>{title}</h1>
      {me &&
        me.workouts.map((workout) => (
          <div key={workout._id} className="card">
            <h2 className="card-header">{workout.title}</h2>
            <h3 className="card-header">
              {workout.created_by || ''}
            </h3>
            <div className="card-body">
              <h3>What I did</h3>
              <ul>
                {workout.exercises.map((sub) =>
                  <li>{sub.name}</li>
                )}
              </ul>
              <h3>The rundown</h3>
              <p>{workout.description}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default LeftDash;