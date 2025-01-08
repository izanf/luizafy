import styled from 'styled-components';

export const Pressable = styled.a`
  display: flex;
  align-items: center;
  border-radius: .5rem;
  margin: .5rem 0;
  padding: .5rem;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

export const Content = styled.div`
  margin-left: 1rem;
`;

export const Title = styled.h2`
  color: white;
  font-size: .9rem;
`;

export const Description = styled.p``;
