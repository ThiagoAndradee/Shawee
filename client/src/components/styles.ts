import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: 100%;

  background: var(--black);
  background: linear-gradient(270deg, var(--black) 55%, var(--red) 100%);

  align-content: center;

  overflow-y: hidden;
`;

export const Container = styled.div`
  margin: 5% 5% 5% 0;
`;

export const Virus = styled.div`
  position: -10%;
  align-items: center;

  display: flex;

  > img{
    margin: 0 10px 10px 0;
    width: 16%;
    height: 16%;
  }
`;