import React, { useState }  from 'react';
import axios from 'axios';

export const CreateUser = () => {
    const [username, setUsername] = useState('');

    function onSubmit(e) {
        e.preventDefault();
        const user = {
          username:username
        };
        console.log(user);

        axios.post('http://localhost:5000/users/add', user)
        .then(res => console.log(res.data));
        
        setUsername('');
      }

    return (
        <div>
        <h3>Create New Exercise Log</h3>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label>
                    Username:
                </label>
                <input type='text' className="form-control" required onChange={e => setUsername(e.target.value)} value={username} />
            </div>
            <button type="submit" className="btn btn-primary">Create User</button>
        </form>
    </div>
    );
}