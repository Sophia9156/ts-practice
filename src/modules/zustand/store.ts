import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export interface BearStoreTypes {
  bears: number;
  increasePopulation: (num: number) => void;
  removeAllBears: () => void;
}

const useBearStore = create<BearStoreTypes>()(
  devtools(
    persist(
      (set) => ({
        bears: 0,
        increasePopulation: (num) => set((state) => ({ bears: state.bears + num})),
        removeAllBears: () => set({ bears: 0 }),
      })
    )
  )
);

export default useBearStore;