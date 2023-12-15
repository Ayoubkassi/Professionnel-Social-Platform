import styled from 'styled-components';

export const Container = styled.div`
    display : flex;
    width : 100%;
    color : white;
    height : 100vh;
`
export const Left = styled.div`
    flex-basis: 60%;
    width : 60%;
    background : #0e1344;
    color : white;
    padding : 4rem;
    display : flex;
    flex-direction : column;
    justify-content : space-between;

`

export const ForgotPass = styled.a`
    font-size : 14px;
    font-weight : bold;
    color : #5565f9;
    text-decoration : none;
    margin-top : 20px;
    text-align : center;
`


export const OrDiv = styled.h4`
    color : black;
    position : relative;
    text-align : center;
    margin : 100px 0;
    &:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        right: 55%;
        height: 0.3em;
        border-top: 2px solid black;
        z-index: -1;
    }

    &:before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 55%;
        right: 0;
        height: 0.3em;
        border-top: 2px solid black;
        z-index: -1;
    }
`

export const Right = styled.div`
    flex-basis: 40%;
    width : 40%;
    color : white;
    padding : 4.5rem 7rem;
    color : black;

    display : flex;
    flex-direction : column;
`

export const LogTitle = styled.h2`
    line-height : 50px;
    color : #44444a;
`

export const LogInfo = styled.p`
    color : #a8a8ad;
    margin : 3rem 0;
`

export const Logo = styled.h1`
    color : white;
    color : #9485d6;
    flex-basis : 20%;
    text-align : left;

`

export const Span = styled.span`
    color : #3914db;
`

export const Rights = styled.div`
    color : #7d7d80;
    font-size : 14px;
    font-weight : 400;
`

export const Title = styled.h1`
    font-size : 46px;
    flex-basis : 10%;
    color : white;
    text-align : left;
    margin-bottom : 5px;

`

export const Description = styled.p`
    line-height : 62px;
    font-size : 20px;  
    flex-basis: 70%; 
`

export const NewUser = styled.h2`
    color : #a8a8ad;
    text-align: center;
`