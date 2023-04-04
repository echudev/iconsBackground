import { useRef } from "react";
import { useIconTransform } from "../../hooks/useIconTransform";
import {
  style,
  style2,
  small2,
  small3,
  medium,
  medium2,
  large,
} from "../../utils/constants";
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

const BkgIcons = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const { iconTransformX, iconTransformY, handleMousePosition } =
    useIconTransform(container);

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
          className={`${style} ${large} top-[17%] left-[18%]`}
        />
        <img
          src={htm}
          style={{
            transform: `translate(${iconTransformX.normal}px, ${iconTransformY.normal}px)`,
          }}
          className={`${style} ${medium} top-[33%] left-[10%]`}
        />
        <img
          src={git}
          style={{
            transform: `translate(${iconTransformX.normal}px, ${iconTransformY.normal}px)`,
          }}
          className={`${style} ${medium} top-[40%] left-[28%]`}
        />
        <img
          src={ts}
          style={{
            transform: `translate(${iconTransformX.fast}px, ${iconTransformY.fast}px)`,
          }}
          className={`${style} ${large} top-[10%] left-[42%]`}
        />
        <img
          src={mui}
          style={{
            transform: `translate(${iconTransformX.normal}px, ${iconTransformY.normal}px)`,
          }}
          className={`${style} ${medium} top-[60%] left-[25%]`}
        />
        <img
          src={react}
          style={{
            transform: `translate(${iconTransformX.fast}px, ${iconTransformY.fast}px)`,
          }}
          className={`${style} ${large} top-[55%] left-[70%]`}
        />
        <img
          src={mgo}
          style={{
            transform: `translate(${iconTransformX.fast}px, ${iconTransformY.fast}px)`,
          }}
          className={`${style} ${large} top-[65%] left-[35%]`}
        />
        <img
          src={css}
          style={{
            transform: `translate(${iconTransformX.normal}px, ${iconTransformY.normal}px)`,
          }}
          className={`${style} ${medium} top-[28%] left-[36%]`}
        />
        <img
          src={gh}
          style={{
            transform: `translate(${iconTransformX.fast}px, ${iconTransformY.fast}px)`,
          }}
          className={`${style} ${large} top-[23%] left-[82%]`}
        />
        <img
          src={fbse}
          style={{
            transform: `translate(${iconTransformX.normal}px, ${iconTransformY.normal}px)`,
          }}
          className={`${style} ${medium} top-[27%] left-[51%]`}
        />
        <img
          src={msql}
          style={{
            transform: `translate(${iconTransformX.normal}px, ${iconTransformY.normal}px)`,
          }}
          className={`${style} ${medium} top-[37%] left-[65%]`}
        />
        <img
          src={nde}
          style={{
            transform: `translate(${iconTransformX.normal}px, ${iconTransformY.normal}px)`,
          }}
          className={`${style} ${medium} top-[60%] left-[58%]`}
        />
        <img
          src={tlwnd}
          style={{
            transform: `translate(${iconTransformX.fast}px, ${iconTransformY.fast}px)`,
          }}
          className={`${style} ${large} top-[12%] left-[60%]`}
        />
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style2} ${small2} top-[80%] left-[25%]`}
        ></div>
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style2} ${small2} top-[17%] left-[18%]`}
        ></div>
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style} ${small2} top-[5%] left-[24%]`}
        ></div>
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style} ${medium2} top-[40%] left-[75%]`}
        ></div>
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style} ${small2} top-[72%] left-[75%]`}
        ></div>
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style2} ${small2} top-[20%] left-[50%]`}
        ></div>
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style2} ${small2} top-[20%] left-[75%]`}
        ></div>
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style} ${small3} top-[45%] left-[35%]`}
        ></div>
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style} ${small3} top-[55%] left-[45%]`}
        ></div>
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style} ${small3} top-[10%] left-[70%]`}
        ></div>
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style} ${small3} top-[60%] left-[15%]`}
        ></div>
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style2} ${medium2} top-[35%] left-[26%]`}
        ></div>
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style2} ${medium2} top-[72%] left-[55%]`}
        ></div>
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style2} ${small2} top-[40%] left-[61%]`}
        ></div>
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style} ${medium2} top-[30%] left-[40%]`}
        ></div>
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style} ${medium2} top-[3%] left-[44%]`}
        ></div>
        <div
          style={{
            transform: `translate(${iconTransformX.slow}px, ${iconTransformY.slow}px)`,
          }}
          className={`${style2} ${small2} top-[-3%] left-[64%]`}
        ></div>
      </div>
    </div>
  );
};

export default BkgIcons;
