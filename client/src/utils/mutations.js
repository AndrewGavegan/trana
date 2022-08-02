import { gql } from "@apollo/client";

export const SIGNUP = gql`
    mutation AddUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
                email
                workouts {
                    _id
                    title
                }
            }
        }
    }
`

export const LOGIN = gql`
    mutation Login($email: String!, $password: String!) {
        login(email: $email, password: $password ) {
            token,
            user {
                username
            }
        }
    }
`

export const CREATE_WORKOUT = gql`
    mutation CreateWorkout($title: String!, $description: String, $date: String, $exercises: [ID]) {
        createWorkout(title: $title, description: $description, date: $date, exercises: $exercises) {
            _id
            title
            description
            date
            exercises {
                _id
                name
            }
            created_by {
                _id
                username
            }
        }
    }
`

export const ADD_WORKOUT_TO_USER = gql`
    mutation AddWorkoutsToUser( $workoutId: String!) {
        addWorkoutsToUser(workoutId: $workoutId) {
            _id
            username
            workouts {
                _id
                title
                description
                date
                exercises {
                    name
                }
            }
        }
    }
`

export const ADD_EXERCISES_TO_WORKOUT = gql`
    mutation AddExercisesToWorkout($workoutId: String!, $exerciseId: String!) {
        addExercisesToWorkout(workoutId: $workoutId, exerciseId: $exerciseId) {
            _id
            title
            description
            date
            exercises {
                _id
                name
            }
        }
    }
`