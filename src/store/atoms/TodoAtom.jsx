import { atom, selector } from "recoil";

export const title = atom({
  key: "title",
  default: "",
});

export const description = atom({
  key: "description",
  default: "",
});

export const TodoAtom = atom({
  key: "TodoAtom",
  default: [],
});

export const filtervalue = atom({
  key: "filtervalue",
  default: "",
});

export const filt = selector({
  key: "filt",
  get: ({ get }) => {
    const val1 = get(filtervalue); // Get filter value
    const val2 = get(TodoAtom); // Get todos array
    return val2.filter(
      (value) =>
        value.title.includes(val1) || value.description.includes(val1)
    );
  },
});
