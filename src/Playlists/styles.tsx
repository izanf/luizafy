import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem .5rem;

  @media (max-width: 568px) {
    flex-direction: column;
    align-items: flex-start;
    
    button {
      align-self: center;
      margin-top: 1rem;
    }
  }
`;

export const TitleWrapper = styled.div``;

export const Title = styled.h1`
  font-size: 1.75;
  color: white;
  font-weight: 600;
  margin: 0;
`;

export const Description = styled.h2`
  font-size: 1.05rem;
  color: #D3DADD;
  margin: .5rem 0;
`;
