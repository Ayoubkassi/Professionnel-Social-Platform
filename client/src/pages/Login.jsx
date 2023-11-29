import React from 'react'
import { Container, Left , Right , Logo , Span , Rights , Title , Description , LogTitle ,LogInfo , ForgotPass , OrDiv , NewUser} from './Login.styles'
import TextField from '@mui/material/TextField';
import Button , { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';



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
            <TextField id="outlined-basic" label="Email" variant="outlined" />
            <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                style={{margin : '30px 0'}}
            />
        <BootstrapButton variant="contained" disableRipple>
            Login 
        </BootstrapButton>
        <ForgotPass>Forgot your password?</ForgotPass>

        <OrDiv>Or</OrDiv>
        <NewUser>New to Talent Hunter ?<br/><br/>
        <BootstrapButton variant="contained" disableRipple>
            Create an account 
        </BootstrapButton>
        </NewUser>
       
        </Right>
    </Container>
  )
}

export default Login
