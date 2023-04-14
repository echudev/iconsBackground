// This is a zustand store that handles the mouse position and calculates the icon transform values

import { create } from "zustand";

interface MousePosition {
  pageX: number
  pageY: number
}
interface IconTransform {
  slow: number
  normal: number
  fast: number
}

interface MousePositionStore {
  halfHeight: number;
  halfWidth: number;
  iconTransformX: IconTransform;
  iconTransformY: IconTransform;
  handleMousePosition: (mousePosition: MousePosition) => void;
  setHalfWidth: (halfWidth: number) => void;
  setHalfHeight: (halfHeight: number) => void;
}

export const useMousePositionStore = create<MousePositionStore>((set) => ({
  halfHeight: 1,
  halfWidth: 1,
  iconTransformX: {
    fast: 0,
    normal: 0,
    slow: 0,
  },
  iconTransformY: {
    fast: 0,
    normal: 0,
    slow: 0,
  },
  setHalfWidth: (halfWidth: number) => {
    set((state) => ({
      halfWidth,
    }));
  },
  setHalfHeight: (halfHeight: number) => {
    set((state) => ({
      halfHeight,
    }));
  },
  handleMousePosition: ({ pageX, pageY }: MousePosition) => {
    set((state) => ({
      iconTransformX: {
        fast: ((pageX - state.halfWidth) / state.halfWidth) * 200,
        normal: ((pageX - state.halfWidth) / state.halfWidth) * 160,
        slow: ((pageX - state.halfWidth) / state.halfWidth) * 130,
      },
      iconTransformY: {
        fast: ((pageY - state.halfHeight) / state.halfHeight) * 150,
        normal: ((pageY - state.halfHeight) / state.halfHeight) * 100,
        slow: ((pageY - state.halfHeight) / state.halfHeight) * 80,
      },
    }));
  }
}));
