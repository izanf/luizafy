import styled from 'styled-components';

export const Wrapper = styled.div`
  background: black;
  padding: 2rem 5rem 2rem 2rem;
`;

export const Logo = styled.img``;

export const MenuList = styled.ul`
  list-style: none;
  padding: 0rem;
  margin: 2rem 0;
`;

export const MenuItem = styled.li`
  a {
    display: flex;
    align-items: center;
    color: #949EA2;
    text-decoration: none;
    padding: 1rem 0;
    font-size: 1.25rem;

    &:hover {
      color: white;
    }
  }

  span {
    font-weight: bold;
    margin-left: 1rem;
  }
`;
