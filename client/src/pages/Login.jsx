import React , { useState } from 'react'
import { Container, Left , Right , Logo , Span , Rights , Title , Description , LogTitle ,LogInfo , ForgotPass , OrDiv , NewUser} from './Login.styles'
import TextField from '@mui/material/TextField';
import Button , { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    height : '45px',
    lineHeight: 1.5,
    backgroundColor: '#0e1344',
    '&:hover': {
      backgroundColor: '#3838e8',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  });



const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error , setError] = useState('');
  const navigate = useNavigate();


  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/v1/users/login', {
        userlogin: email,
        passlogin: password,
      });


      // Handle successful login here, e.g., redirect to another page
      console.log('Login successful', response.data);
      // Redirect to the home page
      console.log('data' , response.data.id);
      localStorage.setItem('userId', response.data.id);
      navigate('/');
    } catch (error) {
      // Handle login error here
      console.error('Login failed', error.response.data);
      setError('Invalid Username/Password');
    }
  };

  return (
    <Container>
        <Left>
            <Logo>Talent Hunter Co<Span>nn</Span>ect</Logo>
            <Title>WELCOME TO <br/>TALENT HUNTER CONNECT</Title>
            <Description>🌐 Bridge the gap between recruiters and job seekers effortlessly 🚀. Post, connect, hire – all in one place</Description>
            <Rights>2023 © Talent Hunter Technologies. All Rights Reserved.</Rights>
        </Left>
        <Right>
            <LogTitle>Log in to Talent Hunter</LogTitle>
            <LogInfo>Enter your email and password to log in</LogInfo>
            <p style={{ color : 'red' , fontWeight : 'bold' , margin : '18px 0' }} >{error}</p>
            <TextField
              id="outlined-basic"
              label="Username"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              style={{ margin: '30px 0' }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
        <BootstrapButton variant="contained" disableRipple onClick={handleLogin}>
            Login 
        </BootstrapButton>
        <ForgotPass>Forgot your password?</ForgotPass>

        <OrDiv>Or</OrDiv>
        <NewUser>New to Talent Hunter ?<br/><br/>
        <BootstrapButton variant="contained" disableRipple>
        <a style={{ color : 'white'  , textDecoration : 'none'}} href="/signup"> Create an account </a>
        </BootstrapButton>
        </NewUser>
       
        </Right>
    </Container>
  )
}

export default Login
