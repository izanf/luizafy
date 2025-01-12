import styled from 'styled-components';

export const Wrapper = styled.div`
  grid-area: menu;
  background: black;
  padding: 2rem;

  @media (max-width: 568px) {
    padding: 0 1rem;
  }
`;

export const Logo = styled.img`
  @media (max-width: 568px) {
    display: none;
  }
`;

export const MenuList = styled.ul`
  list-style: none;
  padding: 0rem;
  margin: 2rem 0;

  @media (max-width: 568px) {
    display: flex;
    margin: 0;
    padding: .5rem 0;
  }
`;

export const MenuItem = styled.li<{ active: boolean }>`
  a {
    display: flex;
    align-items: center;
    color: ${({ active }) => active ? 'white' : '#949EA2'};
    text-decoration: none;
    padding: 1rem 0;
    font-size: 1.25rem;

    &:hover {
      color: white;
  
      svg {
        color: white;
      }
    }
  }

  span {
    font-weight: bold;
    margin-left: 1rem;
  }


  @media (max-width: 568px) {
    flex: 1;

    a {
      display: block;

      & > div{
        justify-content: center;
      }
    }

    span {
      display: none;
    }
  }
`;
