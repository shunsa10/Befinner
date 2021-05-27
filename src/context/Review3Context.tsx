import { createContext, useState } from "react";

import { ReactNode } from "react";
//react側で型定義や参照をしている JSXもある

export const Review3Context = createContext<
  [boolean, (Reviews: boolean) => void]
>([false, () => {}]);
//tuple型になる  <> の中はvalueにも継承される.
// Recoil ,redux

export const Review3Provider = ({ children }: { children: ReactNode }) => {
  const [Reviews, setReviews] = useState(false);
  return (
    <Review3Context.Provider value={[Reviews, setReviews]}>
      {children}
    </Review3Context.Provider>
  );
};
