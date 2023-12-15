import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import '../App.css';
import './Profile.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const id = localStorage.getItem('userId');
        const response = await axios.get(`http://localhost:5000/api/v1/users/${id}`);
        setUser(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Fetching user data failed', error.response?.data || 'Unknown error');
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <div className='app profile'>
      <Header />
      <div className="profile__body">
        <h1 className='profileTitle'>Profile</h1>
        <div className="float-right">
          <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
        </div><br />
        <div className="jumbotron" style={{ marginTop: '55px', textAlign: 'left !important' }}>
          <h1 className="display-4 mb-4">{user.username}</h1>
          <p className="lead">Email: {user.email}</p>
          <p className="lead">School: {user.education}</p>
          <p className="lead">User Type: {user.userType}</p>
          <hr className="my-4" />
          <p>Skills: {user.skills}</p>
          <p>Description: {user.workExperience}</p>
          <p className="lead">
            <a className="btn btn-primary btn-lg" href="/edit" role="button">Edit Profile</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
