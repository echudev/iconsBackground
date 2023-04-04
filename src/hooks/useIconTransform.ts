import { useEffect, useState, RefObject } from 'react'

interface MousePosition {
    offsetX: number;
    offsetY: number;
  }
  interface IconTransform {
    slow: number;
    normal: number;
    fast: number;
  }
  
export const useIconTransform = (container: RefObject<HTMLElement>) => {
    const [iconTransformX, setIconTransformX] = useState<IconTransform>({
      slow: 0,
      normal: 0,
      fast: 0,
    });
    const [iconTransformY, setIconTransformY] = useState<IconTransform>({
      slow: 0,
      normal: 0,
      fast: 0,
    });
    const [halfWidth, setHalfWidth] = useState<number>(1);
    const [halfHeight, setHalfHeight] = useState<number>(1);
  
    const handleMousePosition = ({ offsetX, offsetY }: MousePosition) => {
      setIconTransformX({
        fast: ((offsetX - halfWidth) / halfWidth) * 200,
        normal: ((offsetX - halfWidth) / halfWidth) * 160,
        slow: ((offsetX - halfWidth) / halfWidth) * 130,
      });
      setIconTransformY({
        fast: ((offsetY - halfHeight) / halfHeight) * 150,
        normal: ((offsetY - halfHeight) / halfHeight) * 100,
        slow: ((offsetY - halfHeight) / halfHeight) * 80,
      });
    };
  
    useEffect(() => {
      if (container.current) {
        const { width, height } = container.current.getBoundingClientRect();
        setHalfWidth(width / 2);
        setHalfHeight(height / 2);
      }
    }, [window.innerWidth, window.innerHeight, container.current]);

  return {iconTransformX, iconTransformY, handleMousePosition, container}
}
