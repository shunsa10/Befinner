import { createContext, FC } from 'react';
// import {ReactNode} from 'react'
// import {ReactChild} from 'react'

//memo
//glovarStateでログイン周りを管理
//ログインしてるかどうか
// :{children:ReactNode}
//配列で型を定義する
//voidは何を返さないから、からのコールバック関数を置いておく
//FunctionComponent FC  プロップスの型まで推論してくれる
//VFC ではプロップスの定義は必要

export const AuthContext = createContext<[boolean, (account:boolean) => void]>([false, () => {}]);

export const AuthProvider:FC = ({children}) => {
    const bool: [boolean, (account: boolean) => void] = [false, () => {}];
    const state:[boolean, (account: boolean) => void] = bool;

    return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;

}