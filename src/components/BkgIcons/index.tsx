import { useState, useRef, useEffect } from "react";
import js from "../../assets/js.png";
import react from "../../assets/react.png";
import ts from "../../assets/ts.png";
import htm from "../../assets/html.png";
import css from "../../assets/css.png";
import git from "../../assets/git.png";
import tlwnd from "../../assets/tailwind.png";
import mui from "../../assets/mui.png";
import msql from "../../assets/mysql.png";
import fbse from "../../assets/firebase.png";
import mgo from "../../assets/mongo.png";
import gh from "../../assets/gh.png";
import nde from "../../assets/node.png";

const style: string =
  "absolute rounded-xl bg-iconBkg p-3 pointer-events-none transition-transform ease-out duration-[3000ms]";
const style2: string =
  "absolute rounded-xl border border-4 border-iconBkg p-3 pointer-events-none transition-transform ease-out duration-[3000ms]";
const small2: string = "w-12 h-12 z-0 opacity-20";
const small3: string = "w-12 h-12 z-0 opacity-10";
const medium: string = "w-16 h-16 z-10 opacity-30";
const medium2: string = "w-16 h-16 z-10 opacity-10";
const large: string = "w-20 h-20 z-20 opacity-30";
const large2: string = "w-20 h-20 z-20 opacity-20";

interface MousePosition {
  offsetX: number;
  offsetY: number;
}
interface IconTransform {
  slow: number;
  normal: number;
  fast: number;
}

const BkgIcons = () => {
  const container = useRef<HTMLDivElement | null>(null);
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
      fast: ((offsetX - halfWidth) / halfWidth) * 250,
      normal: ((offsetX - halfWidth) / halfWidth) * 200,
      slow: ((offsetX - halfWidth) / halfWidth) * 150,
    });
    setIconTransformY({
      fast: ((offsetY - halfHeight) / halfHeight) * 150,
      normal: ((offsetY - halfHeight) / halfHeight) * 100,
      slow: ((offsetY - halfHeight) / halfHeight) * 50,
    });
  };

  useEffect(() => {
    if (container.current) {
      const { width, height } = container.current.getBoundingClientRect();
      setHalfWidth(width / 2);
      setHalfHeight(height / 2);
      console.log(width, height, halfWidth, halfHeight);
    }
  }, [window.innerWidth, window.innerHeight]);

  return (
    <div
      ref={container}
      className="w-full h-full bg-repeat bg-overlay-pattern z-50 overflow-hidden"
      onMouseMove={(e) => handleMousePosition(e.nativeEvent)}
    >
      <div className="relative flex w-full h-full select-none">
        <img
          src={js}
          style={{
            transform: `translate(${iconTransformX.fast}px, ${iconTransformY.fast}px)`,
          }}
          className={`${style} ${large} top-[15%] left-[25%]`}
        />
        <img
          src={htm}
          style={{
            transform: `translate(${iconTransformX.normal}px, ${iconTransformY.normal}px)`,
          }}
          className={`${style} ${medium} top-[30%] left-[10%]`}
        />
        <img
          src={git}
          style={{
            transform: `translate(${iconTransformX.normal}px, ${iconTransformY.normal}px)`,
          }}
          className={`${style} ${medium} top-[28%] left-[65%]`}
        />
        <img
          src={ts}
          style={{
            transform: `translate(${iconTransformX.fast}px, ${iconTransformY.fast}px)`,
          }}
          className={`${style} ${large} top-[35%] left-[40%]`}
        />
        <img
          src={mui}
          style={{
            transform: `translate(${iconTransformX.normal}px, ${iconTransformY.normal}px)`,
          }}
          className={`${style} ${medium} top-[55%] left-[20%]`}
        />
        <img
          src={react}
          style={{
            transform: `translate(${iconTransformX.fast}px, ${iconTransformY.fast}px)`,
          }}
          className={`${style} ${large} top-[55%] left-[60%]`}
        />
        <img
          src={mgo}
          style={{
            transform: `translate(${iconTransformX.fast}px, ${iconTransformY.fast}px)`,
          }}
          className={`${style} ${large} top-[65%] left-[30%]`}
        />
        <img
          src={css}
          style={{
            transform: `translate(${iconTransformX.normal}px, ${iconTransformY.normal}px)`,
          }}
          className={`${style} ${medium} top-[3%] left-[40%]`}
        />
        <img
          src={gh}
          style={{
            transform: `translate(${iconTransformX.normal}px, ${iconTransformY.normal}px)`,
          }}
          className={`${style} ${large2} top-[15%] left-[80%]`}
        />
        <img
          src={fbse}
          style={{
            transform: `translate(${iconTransformX.normal}px, ${iconTransformY.normal}px)`,
          }}
          className={`${style} ${medium} top-[38%] left-[85%]`}
        />
        <img
          src={msql}
          style={{
            transform: `translate(${iconTransformX.normal}px, ${iconTransformY.normal}px)`,
          }}
          className={`${style} ${medium} top-[55%] left-[75%]`}
        />
        <img
          src={nde}
          style={{
            transform: `translate(${iconTransformX.normal}px, ${iconTransformY.normal}px)`,
          }}
          className={`${style} ${medium} top-[50%] left-[50%]`}
        />
        <img
          src={tlwnd}
          style={{
            transform: `translate(${iconTransformX.fast}px, ${iconTransformY.fast}px)`,
          }}
          className={`${style} ${large} top-[12%] left-[55%]`}
        />
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style2} ${small2} top-[80%] left-[20%]`}
        ></div>
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style2} ${small2} top-[5%] left-[7%]`}
        ></div>
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style} ${small2} top-[5%] left-[19%]`}
        ></div>
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style} ${large2} top-[40%] left-[70%]`}
        ></div>
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style} ${small2} top-[72%] left-[70%]`}
        ></div>
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style2} ${small2} top-[20%] left-[45%]`}
        ></div>
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style2} ${small2} top-[60%] left-[90%]`}
        ></div>
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style} ${small3} top-[45%] left-[30%]`}
        ></div>
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style} ${small3} top-[55%] left-[40%]`}
        ></div>
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style} ${small3} top-[10%] left-[65%]`}
        ></div>
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style} ${small3} top-[60%] left-[10%]`}
        ></div>
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style2} ${medium2} top-[35%] left-[21%]`}
        ></div>
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style2} ${medium2} top-[72%] left-[50%]`}
        ></div>
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style2} ${small2} top-[45%] left-[50%]`}
        ></div>
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style} ${medium2} top-[30%] left-[35%]`}
        ></div>
      </div>
    </div>
  );
};

export default BkgIcons;
