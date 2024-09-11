import { atom, selector } from 'recoil'; // Import 'atom' from 'recoil'

export const CountAtom = atom({
  key: 'CountAtom', // unique ID for the atom
  default: 0, // initial state is 0
});

export const evenSelector = selector({
    key:"evenSelector",
    get : (props)=>{
        const count  = props.get(CountAtom)
        return count % 2 ==0
    }
})