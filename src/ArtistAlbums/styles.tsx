import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Header = styled.header`
  display: flex;
  align-items: flex-start;
  padding: 2rem 0;
`;

export const Title = styled.h1`
  flex: 1;
  font-size: 1rem;
  font-height: 1.1rem;
  font-weight: bold;
  margin: 1rem;
  color: white;
`;

export const Content = styled.div``;

export const GoBackButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  padding: .6rem;
  color: white;

  &:hover {
    color: #EEE;
  }
`;
