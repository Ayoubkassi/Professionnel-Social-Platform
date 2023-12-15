import React , { useState } from 'react'
import { Container, Left , Right , Logo , Span , Rights , Title , Description , LogTitle ,LogInfo , ForgotPass , OrDiv , NewUser} from './Login.styles'
import TextField from '@mui/material/TextField';
import Button , { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';


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



const Signup = () => {

    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [userType , setUserType ] = useState('');
    const [error , setError] = useState('');
    const navigate = useNavigate();

    const handleSignUp = async () => {
        try {
          if(email !== '' && password != '' && userName != ''){

          const response = await axios.post('http://localhost:5000/api/v1/users', {
            email: email,
            password: password,
            username : userName,
            userType , userType
          });
    
          // Handle successful login here, e.g., redirect to another page
          console.log('Signup successful', response.data);
          // Redirect to the home page
          navigate('/');
        }else{
        //   console.error('Signup failed', error.response.data);
          setError('Invalid Username/Password');
          console.log("error : "+error);
        }
        } catch (error) {
          // Handle login error here
          console.error('Signup failed', error.response.data);
          setError('Invalid Username/Password');
          console.log("error : "+error);
        }
      };

      const handleChange = (event) => {
        setUserType(event.target.value);
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
            <LogTitle>Sign up in Talent Hunter</LogTitle>
            {/* <LogInfo style={{ marginBottom : '-30px' }}>Enter your email and password to signu up</LogInfo> */}
            <p style={{ color : 'red' , fontWeight : 'bold' , margin : '18px 0' }} >{error}</p>
            <TextField style={{ marginBottom: '20px' }} 
                id="outlined-basic" 
                label="Username" 
                variant="outlined"
                required
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              required={true}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              style={{ margin: '30px 0' }}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

        <FormControl fullWidth style={{ marginBottom : '15px' }} >
          <InputLabel id="demo-simple-select-label">User Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={userType}
            label="User Type"
            onChange={handleChange}
          >
            <MenuItem value="candidate">Candidate</MenuItem>
            <MenuItem value="recruiter">Recruiter</MenuItem>
        </Select>
        </FormControl>

        <BootstrapButton style={{ marginBottom : '20px' }} variant="contained" disableRipple onClick={handleSignUp}>
            Sign Up
        </BootstrapButton>
        <ForgotPass>Forgot your password?</ForgotPass>

        <OrDiv>Or</OrDiv>
        <NewUser>Already have account in Talent Hunter?<br/><br/>
        <BootstrapButton variant="contained" disableRipple>
            <a style={{ color : 'white'  , textDecoration : 'none'}} href="/login"> Sign in into your account </a>
        </BootstrapButton>
        </NewUser>
       
        </Right>
    </Container>
  )
}

export default Signup
