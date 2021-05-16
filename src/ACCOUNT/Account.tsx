import React from 'react';
import styled, {css} from 'styled-components'
import {useContext} from 'react'

import {AccountContext} from '../context/AccountContext'

import Signin from './Signin'
import Signup from './Signup'

type AccountProps = {
    account?: boolean
}

const Account:React.FC = () => {
const [account] = useContext(AccountContext);
    return (
      <SectionAC account={account ? true : false}>
        <Container>
          <Signin />
          <Signup />
        </Container>
      </SectionAC>
     
    )
};

export default Account;

const SectionAC = styled.section<AccountProps> `
  position: relative;
    width: 100vw;
    height: 100vh;
    background: #5f9ea0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    transition: 0.5s;
    

    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'poppins', sans-serif;

    ${({account}) => account ? css `
        
        background: #ff7f50;
        transition: 1s;
    ` : ''}

`
const Container = styled.div `
position: relative;
    width: 800px;
    height: 500px;
    background: #fff;
    box-shadow: 0 15px 50px rgba(0,0,0,0.1);
    overflow: hidden;
`

///////////////////////////////////////////////
