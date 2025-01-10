import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
`;

export const Pressable = styled.button`
  flex: 1;
  display: flex;
  align-items: center;
  border-radius: .5rem;
  margin: .5rem 0;
  padding: .5rem;
  cursor: pointer;
  text-decoration: none;
  background: transparent;
  border: none;

  ${({ onClick }) => !onClick && `cursor: default;`}

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 568px) {
    margin: 0;
  }
`;

export const Content = styled.div`
  flex: 1;
  margin-left: 1rem;
  text-align: left;
`;

export const Title = styled.h2`
  color: white;
  font-size: 1rem;
  margin: 0;
`;

export const Description = styled.p`
  font-size: .8125rem;
  color: #EEE;
  margin: .5rem 0 0;
`;
