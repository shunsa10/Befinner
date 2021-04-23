import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from 'react';
import styled, {css} from 'styled-components'
import {useContext} from 'react'
import {AccountContext} from '../context/AccountContext'
import {useState} from 'react'
import { auth } from "../firebase/config";
import {useHistory} from 'react-router-dom'


const useStyles = makeStyles({
  Input: {
   position: 'relative',
   width: '100%',
   padding: '10px',
   background: '#f5f5f5',
   color: '#333',
   border: 'none',
   outline: 'none',
   boxShadow: 'none',
   margin: '8px 0',
   fontSize: '14px',
   letterSpacing: '1px',
   },
  Submit: {
    maxWidth: '100px',
    background: '#677eff',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '14px',
    letterSpacing: '1px',
    transition: '0.5s',
  },
});

type AccountProps = {
    account?: boolean
}


const Signup:React.FC = () => {
    const history = useHistory();
    const classes = useStyles();
    const [account, setAccount] = useContext(AccountContext);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        // ChangeEvent<HTMLInputElement> オーバーロードした
        //eventの型定義問題
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            //非同期処理成功時に実行
            .then((userCredential) => {
                if (userCredential.user === null)return; 
                //userがnullだったらリターンは返さない
               userCredential.user.updateProfile({ displayName: username })
               //コンパイルエラーが出て（？）をつけると解消される
                .then(() =>{
                    console.log('成功', userCredential);
                    history.push('/');
                });
            })
            .catch((error) =>{
                console.log('失敗', error);
                
            })
        
    }
    return (
        <SignupBxAC account={account ? true : false}>
              <SignupInfoAC account={account ? true : false}>
                  <SignupForm onSubmit={handleSubmit}>
                    <SignupH2>Create an Account</SignupH2>
                        <TextField className={classes.Input} 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        fullWidth label='ユーザー名'
                        variant='standard'
                        />
                        <TextField className={classes.Input} 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        fullWidth label='メールアドレス'
                        variant='outlined'
                        />
                        <TextField className={classes.Input} 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        fullWidth label='パスワード'
                        variant='outlined'
                        />
                        <Button className={classes.Submit}
                        type='submit'
                        variant='contained'
                        >Logup</Button>
                    <SignupP>既存のアカウントを持っていますか？
                        <SignupA
                        account={account ? true : false}
                        onClick={() => setAccount(!account)}
                        >Sign In</SignupA>
                    </SignupP>
                  </SignupForm>
              </SignupInfoAC>
              <SignupImgDiv account={account ? true : false}><SignupImgBxAC src={'./img/img22.jpeg'} /></SignupImgDiv>
        </SignupBxAC>
    )
}

export default Signup;

const SignupBxAC = styled.div<AccountProps> `
position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    pointer-events: none;
    ${({account}) => account ? css `
        pointer-events: initial;
    ` : ''}

`
const SignupInfoAC = styled.div<AccountProps> `
position: relative;
    width: 50%;
    height: 100%;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px;
    transition: 0.5s;
    top: -2rem;
    left: 100%;
    ${({account}) => account ? css `
        left: 0;
    ` : ''}

`
const SignupImgDiv = styled.div<AccountProps> `
position: relative;
    width: 50%;
    height: 100%;
    background: #5fa064;
    transition: 0.5s;
    left: -100%;
    ${({account}) => account ? css `
        left: 0;
    ` : ''}

`
const SignupImgBxAC = styled.img `
position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const SignupForm = styled.form `
position: relative;
    width: 80%;
    height: 100%;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px;
    transition: 0.5s;
`
const SignupH2 = styled.h2 `
    font-size: 18px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-align: center;
    width: 100%;
    margin-bottom: 10px;
    color: #555;
`
const SignupP = styled.p `
position: relative;
    margin-top: 20px;
    font: size 12px;
    font-weight: 300;
    letter-spacing: 1px;
    color: #555;
    text-transform: uppercase;
`
const SignupA = styled.a<AccountProps> `
    text-decoration: none;
    font-weight: 600;
    color: #677eff;
    cursor: pointer;
      ${({account}) => account ? css `
       
    ` : ''}
    
`