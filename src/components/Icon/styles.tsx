import styled from 'styled-components';

export const Figure = styled.figure<{ size: number }>`
  display: flex;
  margin: 0;
  width: ${({ size }) => size}px;
  height: 24px;
`;

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
