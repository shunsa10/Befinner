import {createContext, useState} from 'react'
import React from 'react'
import {ReactNode} from 'react'
//react側で型定義や参照をしている JSXもある


export const StyleContext = 
createContext<[boolean, (styles:boolean) => void]>([false, () => {}]);
//tuple型になる  <> の中はvalueにも継承される.
//
// Recoil ,redux　

// type Children = {
//     children? : boolean
// }


export const StyleProvider = ({children}:{children:ReactNode}) => {
    const [styles, setStyles] = useState(false);
    return <StyleContext.Provider value={[styles, setStyles]}>
                {children}
           </StyleContext.Provider>
}
