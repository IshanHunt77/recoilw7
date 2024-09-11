import { CountAtom, evenSelector } from "./store/atoms/CountAtom";
import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

export const Count = () => {
  const setCount = useSetRecoilState(CountAtom);
  const count  = useRecoilValue(CountAtom)
    console.log("renders")
    const isEven = useRecoilValue(evenSelector)
  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(c => c + 1)}>Increment</button> {/* Corrected onClick */}
      <button onClick={() => setCount(c => c - 1)}>Decrement</button> {/* Corrected onClick */}
      <div>
        {isEven ? "Even" : null}
      </div>
    </>
  );
};
