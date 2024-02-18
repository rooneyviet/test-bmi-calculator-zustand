import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface BmiState {
  height: number;
  weight: number;
  bmi: number | null;
}

interface BmiAction {
  setHeight: (newHeight: number) => void;
  setWeight: (newHeight: number) => void;
  calculateBmi: () => void;
}

const initValue: BmiState = {
  height: 0,
  weight: 0,
  bmi: null,
};

export const useBmiStore = create<BmiState & BmiAction>()(
  devtools((set, get) => ({
    ...initValue,
    height: 0,
    weight: 0,
    bmi: 0,
    setHeight: (height: number) => set({ height }),
    setWeight: (weight: number) => set({ weight }),
    calculateBmi: () => {
      const { height, weight } = get();
      const bmi = weight / (height / 100) ** 2;
      set({ bmi });
    },
  }))
);

// const useBmiStore = create<BmiState>((set) => ({
//   height: 0,
//   weight: 0,
//   bmi: null,
//   calculateBmi: () => {
//     set((state) => {
//       const result = state.weight / (state.height / 100) ** 2;
//       return { bmi: result };
//     });
//   },
// }));

export default useBmiStore;
