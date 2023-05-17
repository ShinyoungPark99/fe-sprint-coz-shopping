import React from 'react'
import styled from 'styled-components'

let Container = styled.footer`
    width: 100vw;
    height: 50px;
    font-size: 12px;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    `

const Footer = () => {
  return (
    <Container>
    <span> 개인정보 처리 방침 | 이용 약관 </span>
    <span> All rights reserved @ Codestates </span>
    </Container>
  )
}

export default Footer