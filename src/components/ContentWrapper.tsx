import styled from 'styled-components';

const ContentWrapper = styled.div`
  grid-area: content;
  overflow-y: auto;
  height: 100%;
  padding: 0 1rem 2rem;

  @media (max-width: 568px) { 
    padding: .5rem;
    height: calc(100vh - 72px - 1rem);
  }
`;

export default ContentWrapper;
