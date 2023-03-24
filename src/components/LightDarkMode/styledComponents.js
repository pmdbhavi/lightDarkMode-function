import styled from 'styled-components'

export const Container=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
`

export const Contain=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color:${(props)=>(props.colour ? "#000000":"#ffffff")};
    border:${(props)=>(!props.colour && "2px solid black")};
    padding:20px;
    border-radius:10px;
`

export const Heading=styled.h1`
    font-size:30px;
    font-weight:bold;
    color:${(props)=>(!props.colour ? "black":"#ffffff")};
`

export const Button=styled.button`
    padding:10px;
`