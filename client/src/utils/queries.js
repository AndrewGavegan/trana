import { gql } from '@apollo/client';

export const GET_YOURSELF = gql`
query GetYourself {
  getYourself {
    _id
    username
    email
    workouts {
      _id
      title
      description
      created_by {
        _id
        username
      }
      exercises {
        _id
        name
      }
    }
  }
}
`

export const GET_ALL_USERS = gql`
  query GetAllUsers {
  getAllUsers {
    _id
    username
    email
    workouts {
      _id
      title
      description
      date
      created_by {
        _id
        username
      }
      exercises {
        _id
        name
      }
    }
  }
}
`

export const GET_EXERCISE = gql`
query GetExercise($exerciseId: String!) {
  getExercise(exerciseId: $exerciseId) {
    _id
    name
  }
}
`

export const GET_ALL_EXERCISES = gql`
query GetAllExercises {
  getAllExercises {
    _id
    name
  }
}
`

export const GET_WORKOUT = gql`
query GetWorkout($workoutId: String!) {
  getWorkout(workoutId: $workoutId) {
    _id
    title
    description
    date
    created_by {
      _id
      username
    }
    exercises {
      _id
      name
    }
  }
}
`

export const GET_ALL_WORKOUTS = gql`
  query GetAllWorkouts {
  getAllWorkouts {
    _id
    title
    description
    date
    created_by {
      _id
      username
    }
    exercises {
      _id
      name
    }
  }
}
`;