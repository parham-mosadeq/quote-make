//* Styles
import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  transition: all 0.3s linear;
  width: 100vw;
  background-color: #444;
  margin: 0;
  padding: 0;
  height: auto;
  position: relative;

  ${(props) =>
    props.closeMenu
      ? 'transform:translateY(-100%)'
      : 'transform:translateY(0)'};

  @media screen and (min-width: 768px) {
    justify-content: center;
    align-items: center;
    min-width: 100vw;
  }
`;

export const Ul = styled.ul`
  list-style: none;
  padding: 0.4rem 0.8rem;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const Li = styled.li`
  margin: 0.3rem;
  width: 100%;

  a {
    text-decoration: none;
    color: lightgray;
    text-transform: capitalize;
    margin: 1rem;
    transition: all 0.3s linear;

    @media screen and (min-width: 992px) {
      margin: 0 5rem;
    }

    @media screen and (min-width: 1170px) {
      margin: 0 9rem;
    }

    :hover {
      color: gray;
    }
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const Times = styled.div`
  font-size: 30px;
  font-weight: bold;
  position: absolute;
  right: 20px;
  top: 10px;

  :hover {
    cursor: pointer;
    color: #555;
  }

  i {
    color: #fff;
  }

  @media screen and (min-width: 768px) {
    visibility: hidden;
  }
`;
