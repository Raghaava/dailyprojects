import React, { useState, useEffect }  from 'react';
import axios from 'axios';
import Exercise from '../components/Exercise.js';

export const ExercisesList = () => {
    const [exercises, setExercises] = useState([]);
     
    useEffect(() => {
        axios.get('http://localhost:5000/exercises')
        .then(res => setExercises(res.data))
        .catch(err => console.log(err));
    },[]);

    const deleteExercise = (id) =>  {
        axios.delete(`http://localhost:5000/exercises/${id}`)
        .then(res => console.log(res.data));

        setExercises(exercises.filter(el => el._id !== id));
    }

    const exercisesList = () => {
       return exercises.map(ex => <Exercise exercise={ex} deleteExercise = {deleteExercise} key={ex._id}/>)
    }

    return (
      <div>
          <h3>Logged Exercises</h3>
          <table className="table">
              <thead className="thead-light">
                  <tr>
                      <th>Username</th>
                      <th>Description</th>
                      <th>Duration</th>
                      <th>Date</th>
                      <th>Actions</th>
                  </tr>
              </thead>
              <tbody>
                  {exercisesList()}
              </tbody>
          </table>
      </div>
    );
}