import {createContext, useState} from 'react'

import {ReactNode} from 'react'
//react側で型定義や参照をしている JSXもある


export const ReviewContext = 
createContext<[boolean, (Reviews:boolean) => void]>([false, () => {}]);
//tuple型になる  <> の中はvalueにも継承される.
// Recoil ,redux　


export const ReviewProvider = ({children}:{children:ReactNode}) => {
    const [Reviews, setReviews] = useState(false);
    return ( <ReviewContext.Provider value={[Reviews, setReviews]}>
                {children}
           </ReviewContext.Provider>
           
    )
}
