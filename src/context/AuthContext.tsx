import { createContext, FC, useEffect, useState } from "react";
import { auth } from "../firebase/config";
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

export const AuthContext = createContext<{
  loading: boolean;
  data: firebase.default.User | null;
}>({ loading: true, data: null });

export let AuthProvider: FC = ({ children }) => {
  let [user, setUser] = useState<{
    loading: boolean;
    data: firebase.default.User | null;
  }>({ loading: true, data: null });
  useEffect(() => {
    //ログイン情報の取得
    auth.onAuthStateChanged((userState) => {
      setUser({ loading: false, data: userState });
    });
  }, []);

  const bool: [boolean, (account: boolean) => void] = [false, () => {}];
  const state: [boolean, (account: boolean) => void] = bool;

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
