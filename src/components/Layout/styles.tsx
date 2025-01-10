import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-areas: "menu content";
  height: 100%;
  overflow: hidden;

  @media (max-width: 568px) {
    grid-template-areas:
      "content"
      "menu";
    grid-template-columns: auto;
  }
`;
