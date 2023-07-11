import React, { useRef, useState } from 'react';
import styled from "styled-components";
import Map from './Map';

import emailjs from '@emailjs/browser';
const Section = styled.div` 
height: 100vh;
padding:2px;

scroll-behavior: smooth;
`;
const Container = styled.div` 
width:100%;
display:flex;
justify-content:space-between;
gap:50px;
height:100%;
`;
const Left = styled.div` 
flex:1;
display:flex;
justify-content:flex-end;
align-items:center;
@media only screen and (max-width:768px){
  justify-content:center;
 
 }
`;


const Title = styled.h1` 
font-weight:200;

`;
const Input = styled.input`
padding:20px;
border:none;
border-radius:3px;
background-color:lightgrey;
`;


const TextArea = styled.input`
padding:20px;
border:none;
border-radius:3px;
background-color:lightgrey;
rows:10;
`;
const Button = styled.button`

background-color:pink;
color:white;
font-weight:bold;
cursor:pointer;
border-radius:3px;
border:none;
padding:20px;

`;
const Form = styled.form`
display:flex;
width:500px;
flex-direction:column;
gap:25px;
@media only screen and (max-width:768px){
 width:300px;
 
 }
`;

//gxg_uwsGN-T60eqbi //publickey
//service_rwhdd9y

//template_4akdsrt //template key

const Right = styled.div` 
height: 100vh;
padding:2px;
flex:1;
color:white;
scroll-behavior: smooth;
@media only screen and (max-width:768px){
 display:none;

}
`;

const Contact = () => {
  const ref = useRef();
  const [sucess, setSucess] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_rwhdd9y', 'template_4akdsrt', ref.current, 'gxg_uwsGN-T60eqbi')
      .then((result) => {
        console.log(result.text);
        setSucess(true);
      }, (error) => {
        console.log(error.text);
        setSucess(false);
      });
  };

  return (
    <Section>
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contact Us</Title>
            <Input placeholder="Name" name="name" />
            <Input placeholder="Email" name="email" />
            <TextArea placeholder="Write your message" name="message" />
            <Button type="submit"> Send </Button>
            {sucess && " Email has Sent "}
          </Form>
        </Left>
        <Right>
          <Map />
        </Right>
      </Container>
    </Section>
  )
}
export default Contact
