import { act, renderHook } from "@testing-library/react";
import { create } from "zustand";
import useBmiStore from "./BmiState";

describe("useIncrementingStore", () => {
  it("value's initial value is 0", () => {
    const { result } = renderHook(() => useBmiStore());
    expect(result.current.height).toEqual(0);
    expect(result.current.weight).toEqual(0);
    expect(result.current.bmi).toEqual(0);

    act(() => {
      result.current.setHeight(180);
      result.current.setWeight(80);
      result.current.calculateBmi();
    });

    expect(result.current.height).toEqual(180);
    expect(result.current.weight).toEqual(80);
    expect(result.current.bmi).toEqual(24.691358024691358);
  });
});
