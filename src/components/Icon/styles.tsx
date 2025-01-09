import styled from 'styled-components';

export const Wrapper = styled.div<{ size: number }>`
  display: flex;
  align-items: center;

  svg {
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
  }
`;
