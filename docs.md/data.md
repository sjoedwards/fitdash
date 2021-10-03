
session HAS MANY exercises
exercises HAS MANY sessions
- need a separate table

session-exercise HAS ONE session
session HAS MANY session-exercises
- Foreign key on session exercise

workout HAS ONE session
session HAS MANY workouts
- Foreign key on workout

workout HAS MANY session_exercise
session_exercise HAS MANY workouts
- need a separate table

workout
- id
- session_id
- date

workout-exercise
- id
- workout_id
- session_exercise_id

workout-exercise-set
- workout_id
- weight
- split (boolean)

session-exercise
- id
- session_id
- exercise_id
- reps
- sets
- order

session
- id
- name

exercise
- id
- name