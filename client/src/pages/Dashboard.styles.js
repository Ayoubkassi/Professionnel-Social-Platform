import styled from 'styled-components'


export const Container = styled.div`
    width : 100%;
    color : white;
    min-height : 100vh;
    // display : flex;
`


export const Main = styled.div`
    // flex-basis = 0.8%;
    // width : 80%;
    padding : 5rem;
    color : black;
`


export const Cards = styled.div`
    display : flex;
    justify-content : space-between ;
    align-items : center;
    color : white;
    margin-bottom : 60px;
`

export const Card = styled.div`
    width : 22vw;
    height : 13vh;
    background-color : #0e1344;
    display : flex ; 
    flex-direction : column;
    padding : 10px;
    align-items : center;
    justify-content : center;
    cursor : pointer;
`


export const Title = styled.h3`
    margin : 30px 0;
`
