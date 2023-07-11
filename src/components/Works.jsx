import React,{useState} from 'react'
import styled from "styled-components";
import ProductDesign from "./ProductDesign";
import Devlopment from "./Devlopment";
import WebDesign from "./WebDesign";
import Illustration from "./Illustration";

const data=[
"Web Design",
"Devlopment",
"Illustration",
"Product Design",
"Social Media",
];
const Section = styled.div` 
height: 100vh;
color:white;

padding:2px;
scroll-behavior: smooth;
display:flex;
justify-content:center;
position:relative;
`;
const Conatiner = styled.div` 
width:1400px;
display:flex;
justify-content:space-between;
@media only screen and (max-width:768px){
  width:100%;
  flex-direction:column;
}
`;
const Left = styled.div` 
flex:1;
align-items:center;
display:flex;
@media only screen and (max-width:768px){
  padding:20px;
  justify-content:center;

}
`;


const List =styled.ul`
list-style:none;
display:flex;
flex-direction:column;
gap:20px;

`;


const Listitem = styled.li`
  cursor: pointer;
  font-size: 85px;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;
  @media only screen and (max-width:768px){
    -webkit-text-stroke: 0px;
    font-size:30px;
    color:white;
  }
  &::before {
    content: "${(props)=>props.text}";
    position: absolute;
    top: 0;
    left: 0;
    right: 0px;
    bottom: 0px;
    color: pink;
    width:0px;
    overflow:hidden;
white-space:nowrap;
  }
  &:hover::before{
  
     animation:moveText 0.5s linear both;
     @keyframes moveText{  
      to{
      width:100%;
     }
    }
  }
`;
// Usage
const Right = styled.div` 
  flex:1;
  
`;
const Works = () => {
  const [work,setWork]=useState("");
  return (
    <Section>
      <Conatiner>
        <Left>
  <List>
{
  data.map(item=>(
    <Listitem
    key={item}
    text={item}
    onClick={() => setWork(item)}
  >
    {item}
  </Listitem>
  ))
}
  </List>

        </Left>
        <Right>

  {
    work==="Illustration"?(<Illustration />):
  work==="Web Design"?(<WebDesign />):
  work==="Devlopment"?(<Devlopment />):
  work==="Product Design"?(<ProductDesign />):null
}

        </Right>
      </Conatiner>
    </Section>
  )
}

export default Works
