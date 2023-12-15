import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Widgets from './components/Widgets';
import Login from './pages/Login';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function App({ isLogin = !false }) {

  const navigate = useNavigate();

  
  useEffect(() => {
    // Retrieve user ID from localStorage
    const userId = localStorage.getItem('userId');
    if( userId == null ){
      navigate('/login');
    }
      

    // Do something with the user ID, e.g., log it to the console
    console.log('User ID:', userId);

    
  }, []); 


  

  return (
    <div>
      {!isLogin ? (
        <Login />
      ) : (
        <div className='app'>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;