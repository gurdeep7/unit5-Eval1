import styled from "styled-components"

export const Form = styled.form`
    width: 25%;
    height: 400px;
    display: inline-block;
background-color: lightblue;

& > h1{
    color: orange;
}

& > input{
    width: 80%;
    height:30px;
    margin: 20px;
}

& > input:hover{
    background-color: lightgray;
}
`
export const Div = styled.div`
width: 75%;
height: 400px;
overflow: auto;
background-color: lightgreen;
display: inline-block;

&> button{
    float: right;
    background-color: pink;
    color: purple;
}
`;

export const Divm = styled.div`
display: flex;
`;

export const Divr = styled.div`
position: relative;
display: flex;
height: 150px;
background-color: lightpink;
border: solid black;
border-radius: 10px;
margin: 30px 200px;
& > img{
position: absolute;
right: 20px;
width:150px;
height: 150px;
}
`