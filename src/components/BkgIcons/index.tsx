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
          className={`${style} ${large} top-[15%] left-[20%]`}
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
          className={`${style} ${large} top-[12%] left-[35%]`}
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
            transform: `translate(${iconTransformX.fast}px, ${iconTransformY.fast}px)`,
          }}
          className={`${style} ${large} top-[35%] left-[74%]`}
        />
        <img
          src={fbse}
          style={{
            transform: `translate(${iconTransformX.normal}px, ${iconTransformY.normal}px)`,
          }}
          className={`${style} ${medium} top-[24%] left-[46%]`}
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
          className={`${style2} ${small2} top-[17%] left-[13%]`}
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
          className={`${style} ${medium2} top-[40%] left-[70%]`}
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
          className={`${style2} ${small2} top-[40%] left-[56%]`}
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
