import styled from 'styled-components'

export const SideBar = styled.div`
    flex-basis = 0.2%;
    width : 20%;
    background-color : #0e1344;
    padding: 3rem;
    position : relative;
`

export const ItemNavbar = styled.li`
    text-decoration : none;
    list-style-type : none;
    display : flex;
    margin : 32px 0 0 15px;
    font-size : 22px;
    max-width : 180px;
    align-items : center;
    &:hover{
        cursor : pointer;
    }
    &:first-of-type {
        margin-top : 120px;
    }
`

export const Text = styled.p`
    margin-left : 20px;
`


export const Logout = styled.div`
    position : absolute ;
    bottom : 40px;
    left : 40px;
    display : flex;
    justify-content : space-between;
    width : 100px;
    align-items : center;
    cursor : pointer;
`