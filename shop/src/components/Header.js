import React from 'react'
import styled from 'styled-components';
import nav_logo from '../../src/로고.png'; 
import menu_logo from '../../src/menu.png'; 

let Container = styled.header`
  width: 100vw;
  height: 50px;
  box-shadow: 0px 8px rgba(0, 0, 0, 0.05);
  font-size: 10px;
  padding: 0 80px;
  display: flex;
  align-items: center;

  & .menu_logo {
    width: 30px;
    height: 30px; 
    float: right;
  }
`;

const Header = () => {
  return (
    <>
    <Container>
      <img src = {nav_logo} />
      <h1>COZ Shopping</h1>
      <img className = 'menu_logo' src = {menu_logo} />
    </Container>
    </>
  )
}

export default Header;