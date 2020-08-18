import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const CreateExercise = () => {
    const [username, setUsername] = useState('');
    const [description, setDescription] = useState('');
    const [duration, setDuration] = useState(0);
    const [date, setDate] = useState(new Date());
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:5000/users')
        .then(res => {
            if(res.data.length > 0) {
                setUsers(res.data.map(user => user.userName));
                setUsername(res.data[0].username);
            }
        });
    }, []);

    function onSubmit(e) {
      e.preventDefault();
      const exerciseLog = {
        username:username,
        description:description,
        duration:duration,
        date: date
      };
      axios.post('http://localhost:5000/exercises/add', exerciseLog)
      .then(res => console.log(res.data));

      window.location= '/';
    }

    return (
        <div>
            <h3>Create New Exercise Log</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>
                        Username:
                    </label>
                    <select className="form-control" required onChange={e => setUsername(e.target.value)} value={username}>
                        {
                          users.map(user => <option key={user} value={user}>{user}</option>)
                        }
                    </select>
                </div>
                <div className="form-group">
                    <label>
                        Description:
                    </label>
                    <input type="text" className="form-control" required onChange={(e) => setDescription(e.target.value)} value={description}/>
                </div>
                <div className="form-group">
                    <label>
                        Duration (in Minutes):
                    </label>
                    <input type="text" className="form-control" required onChange={(e) => setDuration(e.target.value)} value={duration}/>
                </div>
                <div className="form-group">
                    <label>
                        Date:
                    </label>
                    <div>
                       <DatePicker
                         selected={date}
                         onChange={(e) => setDate(e.target.value)}
                       />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Create Exercise Logger</button>
            </form>
        </div>
    );
}