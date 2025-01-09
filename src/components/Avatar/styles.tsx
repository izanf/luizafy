import styled from "styled-components";

export const Figure = styled.figure<{ size: number, rounded?: boolean }>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  margin: 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, .5);
  overflow: hidden;
  ${({ rounded }) => rounded ? 'border-radius: 100%;' : ''}
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
