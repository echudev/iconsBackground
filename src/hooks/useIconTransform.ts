import { useEffect, useState, RefObject } from 'react'

interface MousePosition {
  pageX: number
  pageY: number
}
interface IconTransform {
  slow: number
  normal: number
  fast: number
}

export const useIconTransform = (container: RefObject<HTMLElement>) => {
  const [iconTransformX, setIconTransformX] = useState<IconTransform>({
    slow: 0,
    normal: 0,
    fast: 0,
  })
  const [iconTransformY, setIconTransformY] = useState<IconTransform>({
    slow: 0,
    normal: 0,
    fast: 0,
  })
  const [halfWidth, setHalfWidth] = useState<number>(1)
  const [halfHeight, setHalfHeight] = useState<number>(1)

  const handleMousePosition = ({ pageX, pageY }: MousePosition) => {
    setIconTransformX({
      fast: ((pageX - halfWidth) / halfWidth) * 200,
      normal: ((pageX - halfWidth) / halfWidth) * 160,
      slow: ((pageX - halfWidth) / halfWidth) * 130,
    })
    setIconTransformY({
      fast: ((pageY - halfHeight) / halfHeight) * 150,
      normal: ((pageY - halfHeight) / halfHeight) * 100,
      slow: ((pageY - halfHeight) / halfHeight) * 80,
    })
  }

  useEffect(() => {
    if (container.current) {
      const { width, height } = container.current.getBoundingClientRect()
      setHalfWidth(width / 2)
      setHalfHeight(height / 2)
    }
  }, [window.innerWidth, window.innerHeight, container.current])

  return { iconTransformX, iconTransformY, handleMousePosition, container }
}
