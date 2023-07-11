

import Works from './components/Works';
import Hero from './components/Hero';
import Who from './components/Who';
import Contact from './components/Contact';
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-padding: none; /* Optional: Adjust the space between snapped elements */
  scrollbar-width:none;
   background:url("./img/bg.jpeg");
`;

const ScrollableElement = styled.div`
  scroll-behavior: smooth;
  scroll-snap-align: start; /* Optional: Control the alignment of snapped elements */
`;


function App() {
  return (
    <Container>
      <ScrollableElement><Hero /></ScrollableElement>
       <ScrollableElement><Who /></ScrollableElement>  
   <ScrollableElement><Works /></ScrollableElement>
    
    <ScrollableElement><Contact /></ScrollableElement>
   
    </Container>
  );
}

export default App;
