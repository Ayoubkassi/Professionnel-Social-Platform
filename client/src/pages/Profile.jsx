import Header from '../components/Header'
import '../App.css'
import './Profile.css'
import { useNavigate } from 'react-router-dom';


import React from 'react'

function Profile() {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear() ;
         navigate('/login');
    }

  return (
    <div className='app profile'>
        <Header />
        <div className="profile__body">
            <h1 className='profileTitle'>Profile</h1>
            <div class="float-right">
                <button className='btn btn-danger' onClick={ handleLogout } >Logout</button>
            </div><br />
            <div class="jumbotron" style={{ marginTop : '55px' , textAlign : 'left !important'  }}>
                <h1 class="display-4 mb-4" >Ayoub KASSI</h1>
                <p class="lead">Email : ayoub@gmail.com</p>
                <p class="lead">School : IMT Mines Ales</p>
                <p class="lead">Gender : Man</p>
                <p class="lead">User Type : Candidate</p>
                <hr class="my-4" />
                <p>Skills : CP , JAVA , GO , RUST , GraalVM , DalvikVM</p>
                <p>Description : I’m just a super curious guy , I spend a lot of time building software , i’m an ambitious, hardworking individual with strong motivations and dedication. I’m a fast learner and I have the ability to solve problems using my skills and knowledge to the fullest</p>
                <p class="lead">
                    <a class="btn btn-primary btn-lg" href="/edit" role="button">Edit Profile</a>
                </p>
                </div>
        </div>
      
    </div>
  )
}

export default Profile
