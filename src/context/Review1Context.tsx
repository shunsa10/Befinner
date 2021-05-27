import { createContext, useState } from "react";

import { ReactNode } from "react";
//react側で型定義や参照をしている JSXもある

export const Review1Context = createContext<
  [boolean, (Reviews: boolean) => void]
>([false, () => {}]);
//tuple型になる  <> の中はvalueにも継承される.
// Recoil ,redux

export const Review1Provider = ({ children }: { children: ReactNode }) => {
  const [Reviews, setReviews] = useState(false);
  return (
    <Review1Context.Provider value={[Reviews, setReviews]}>
      {children}
    </Review1Context.Provider>
  );
};
