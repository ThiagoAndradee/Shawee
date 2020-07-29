import React from 'react';
import {Content, Virus, Container} from './styles';
import virus_img from '../assets/virus.png';

const Background: React.FC = () => {
  return(
    <Content>
      <Container>
      <Virus>
        <img src={virus_img} alt="virus"/>
        <img src={virus_img} alt="virus"/>
        <img src={virus_img} alt="virus"/>
      </Virus>
      <Virus>
        <img src={virus_img} alt="virus"/>
        <img src={virus_img} alt="virus"/>
        <img src={virus_img} alt="virus"/>
      </Virus>
      <Virus>
        <img src={virus_img} alt="virus"/>
        <img src={virus_img} alt="virus"/>
        <img src={virus_img} alt="virus"/>
      </Virus>
      </Container>
    </Content>
  );
};

export default Background