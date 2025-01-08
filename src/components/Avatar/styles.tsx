import styled from "styled-components";

export const Figure = styled.figure<{ size: number }>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  margin: 0;
  border-radius: 50%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, .5);
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
