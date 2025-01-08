import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  overflow: hidden;

  > :last-child {
    flex: 1;
    overflow-y: auto;
    padding: 1rem 2rem;
  }
`;

export const Content = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 2rem;
`;
